const express = require('express');
const admin1Router = express.Router();
const Authordata = require('../model/Authordata');
function router(nav){
    admin1Router.get('/',function(req,res){
        res.render("addauthors",{
            nav,
            title:'Library App'
        });
    }); 
    admin1Router.post('/add',function(req,res){
        var items = {
            title: req.body.title,
            nationality: req.body.nationality,
            place: req.body.place,
            occupation: req.body.occupation,
            famous: req.body.famous,
            dob: req.body.dob,
            details:req.body.details,
            image: req.body.image
        }
       var author = Authordata(items);
       author.save();
       res.redirect('/authors');
    });
    return admin1Router;
}
module.exports = router;
