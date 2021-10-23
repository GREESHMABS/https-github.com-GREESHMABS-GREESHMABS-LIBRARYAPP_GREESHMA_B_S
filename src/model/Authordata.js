const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://greeshmabs:Greeshma1999@greeshma.hqbco.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    title: String,
    nationality: String,
    place: String,
    occupation: String,
    famous: String,
    dob: Date,
    derails: String, 
    image: String
});
var Authordata = mongoose.model('authordata',AuthorSchema);
module.exports = Authordata;