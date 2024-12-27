const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(`${process.env.MONGODB_URI}/uberclone`)
    .then(() => console.log('Connected to DB'))
    .catch(err => {
        console.error('Database connection error:', err);
        process.exit(1); // Exit process with failure code
    });
}

module.exports = connectToDb;
