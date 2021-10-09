const express = require('express');
const adminRouter = express.Router();
function router(nav){
    adminRouter.get('/',function(req,res){
        res.render('addbooks',{
            nav,
            title:'Library App'
        });
    }); 
    adminRouter.get('/add',function(req,res){
        res.send("New Book is Added!!");
    })
    return adminRouter;
}
module.exports = router;
