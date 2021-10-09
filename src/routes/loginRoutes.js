const express = require('express');
const loginRouter = express.Router();
    loginRouter.post('/',function(req,res){
        var username = req.body.username;
        var password = req.body.password;
        if(username=='admin' && password=='12345'){
            console.log("login Success!!");
            res.redirect('/');
        }
        else{
            console.log("Login Invalid");
        }
    });
    module.exports = loginRouter;