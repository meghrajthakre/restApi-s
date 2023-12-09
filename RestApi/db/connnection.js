const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/TVseries")
    .then(() => {
        console.log("Connected to MongoDB")
            ;
    })
    .catch((err) => {
        console.log("got and error " + err);
    })