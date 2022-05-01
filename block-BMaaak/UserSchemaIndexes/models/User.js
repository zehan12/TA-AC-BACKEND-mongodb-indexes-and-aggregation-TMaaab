const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema( {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true, index: true }, //? index on username
    email: { type: String, required: true, unique: true },
    address: {
        city: { type: String },
        // state: { type: String, unique: true, index: true }, //? index on state with unique
        state: { type: String },
        country: { type: String },
        pin: { type: String }
    }
} , { timestamps: String } );

userSchema.index( { email: 1 } ) //? index on email
// userSchema.index( { 'address.country': 1 } ) //? index on country on nested schema 

//! compound indexes
userSchema.index( { state: 1, country: 1 }, { unique: true, } );

//! create index on mongo database
// db.users.createIndex( { email: 1 } );

module.exports = mongoose.model( "User", userSchema );