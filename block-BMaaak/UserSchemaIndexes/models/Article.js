const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var articleSchema = new Schema( {
    title: { type: String, required: true },
    description: { type: String },
    tags: [ String ]
} , { timestamps: String } );

articleSchema.index( { tags: 1 } ) //? multi key index
articleSchema.index( { title: "text" } ) //? text index

//! Use in mongoDB 
//db.article.find( $text: { $search: key_here } );

module.exports = mongoose.model( "Article", articleSchema )