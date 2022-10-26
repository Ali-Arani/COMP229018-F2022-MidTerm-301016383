// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://dbuser:xh18KWDMtXZDMw3s@cluster1.x4anyjk.mongodb.net/midterm?retryWrites=true&w=majority";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}