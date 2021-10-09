const express = require('express');
const admin1Router = express.Router();
function router(nav){
    admin1Router.get('/',function(req,res){
        res.render("addauthors",{
            nav,
            title:'Library App'
        });
    }); 
    admin1Router.get('/add',function(req,res){
        res.send(" New Author is Added!!");
    })
    return admin1Router;
}
module.exports = router;