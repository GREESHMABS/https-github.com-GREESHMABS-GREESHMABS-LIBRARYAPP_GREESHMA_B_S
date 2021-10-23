const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://greeshmabs:Greeshma1999@greeshma.hqbco.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    author:String,
    genre:String,
    language:String,
    Year: Number,
    page: Number,
    date: Date,
    derails: String, 
    image: String
});
var Bookdata = mongoose.model('bookdata',BookSchema);
module.exports = Bookdata;