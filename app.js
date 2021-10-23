const express = require('express');
const nav= [
    {
        link:'/login',name:'login'
    },
    {
        link:'/signup',name:'Sign Up'
    },
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {link:'/admin',name:'Add Books'
    },
    {
    link:'/admin1',name:'Add Authors'
    }
]
const booksRouter = require('./src/routes/bookRoutes');
const authorsRouter = require('./src/routes/authorRoutes');
const adminRouter = require('./src/routes/adminRoutes')(nav);
const admin1Router = require('./src/routes/admin1Routes')(nav);
const loginRouter = require('./src/routes/loginRoutes');
const signupRouter = require('./src/routes/signupRoutes');
var app = express();
// var bodyparser = require('body-parser')
// app.use(bodyparser.urlencoded() );

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use('/admin1',admin1Router);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library App',
        heading:'LIBRARY'
    });
});
app.get('/login',function(req,res){
    res.render("login",{
        nav:[{link:'/signup',name:'Sign Up'}],
        title:'Library App'  
    });

});
app.get('/signup',function(req,res){
    res.render("signup",{
        nav:[{link:'/login',name:'login'}],
        title:'Library App'
    });
});
app.get('/admin',function(req,res){
    res.render("admin",{
       nav,
        title:'Library App'  
    });
});
app.get('/admin1',function(req,res){
    res.render("admin1",{
        nav,
        title:'Library App'  
    });
});
app.listen(4010);
