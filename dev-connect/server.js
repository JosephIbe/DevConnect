const express = require('express');
const app = express();
const port = process.env.PORT || 6001;

const logger = require('morgan');

const mongoose = require('mongoose');
const dbURL = require('./config/db');

mongoose.connect(dbURL.databaseURL);
let db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', (err) => console.error(`Error Connecting DB:\t ${err}`));
db.once('open', ()=> console.log(`Database Connected`));

const Users = require('./routes/api/users');
const Profile = require('./routes/api/profile');
const Posts = require('./routes/api/posts');

app.use(logger('dev'));
app.use('/api/users', Users);
app.use('/api/profile', Profile);
app.use('/api/posts', Posts);

app.get('/', (req, res)=> res.send(`Hello World`));

app.listen(port, (err) => {
    if (err){
        console.error(err);
    }
    console.log(`Server runs at port ${port}`);
});