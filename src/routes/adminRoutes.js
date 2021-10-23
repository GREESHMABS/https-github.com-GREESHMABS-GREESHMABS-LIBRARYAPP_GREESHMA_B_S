const express = require('express');
const multer = require('multer');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    adminRouter.get('/',function(req,res){
        res.render('addbooks',{
            nav,
            title:'Library App'
        });
    }); 
    adminRouter.post('/add',function(req,res){
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            language: req.body.language,
            Year: req.body.Year,
            page: req.body.page,
            date: req.body.date,
            details:req.body.details,
            image: req.file.path
        }
       var book = Bookdata(item);
       book.save();
       res.redirect('/books');
    });
    return adminRouter;
}
module.exports = router;
