const express = require('express');
const booksRouter = express.Router();
var books = [
    {
        title:'Khasakinte Ithihasam',
        author:'Author: O.V Vijayan',
        Year: 'year: 1969',
        language:'language: Malayalam',
        genre:'Genre:Novel',
        img:"Khasakkinte ithihasam.jpg"
    },
    {
        title:'Chemmeen',
        author:'Author: Thakazhi Sivasankara Pillai',
        Year: 'year: 1956',
        language:'language: Malayalam',
        genre:'Genre: Literature',
        img:"Chemmen.jpg"
    },
    {
        title:'Randamoozham ',
        author:'Author: M.T Vasudevan Nair',
        Year: 'year: 1984',
        language:'language: Malayalam',
        genre:'Genre: Novel',
        img:"Randamoozham.jpg"
    },
    {
        title:'Ente Katha',
        author:'Author: Kamala Surayya Das',
        Year: 'year: 1973',
        language:'language: Malayalam',
        genre:'Genre: Autobiography',
        img:"My_Story.jpeg"
    },
    {
        title:'Oru Sankeerthanam Pole',
        author:'Author: Perumbadavam Sreedharan',
        Year: 'year: 1993',
        language:'language: Malayalam',
        genre:'Genre: Novel',
        img:"Oru Sankeerthanam Pole.jpg"
    },
    {
        title:'Aadu Jeevitham',
        author:'Author: Benyamin',
        Year: 'year: 2008',
        language:'language: Malayalam',
        genre:'Genre: Novel',
        img:"Aadu Jeevitham.jpg"
    },
    {
        title:'Mayyazhipuzhayude Theerangalil ',
        author:'Author: M. Mukundan',
        Year: 'year: 1974',
        language:'language: Malayalam',
        genre:'Genre: Novel',
        img:"Mayyazhipuzhayude Theerangalil.jpg"
    },
    {
        title:'Agnisakshi',
        author:'Author: Lalitambika Antarjanam',
        Year: 'year: 1976',
        language:'language: Malayalam',
        genre:'Genre: Novel',
        img:"Agnisakshi.jpg"
    },
    {
        title:'Mathilukal',
        author:'Author: Vaikom Muhammad Basheer',
        Year: 'year: 1965',
        language:'language: Malayalam',
        genre:'Genre: Literature',
        img:"Mathilukal.jpg"
    },
    {
        title:'Pathummayude Aadu',
        author:'Author: Vaikom Muhammad Basheer',
        Year: 'year: 1959',
        language:'language: Malayalam',
        genre:'Genre: Novel',
        img:"Pathummayude Aadu.jpg"
    },
    {
        title:'The God of Small Things',
        author:'Author: Arundhati Roy',
        Year: 'year: 1997',
        language:'language: English',
        genre:'Genre: Literature',
        img:"The God of Small Things.jpg"
    },
    {
        title:'Gullivers travels',
        author:'Author: Jonathan Swift',
        Year: 'year: 1991',
        language:'language: English',
        genre:'Genre: Fiction',
        img:"Gullivers-Travels.jpg"
    },
    {
        title:'Pride and prejudice',
        author:'Author: Jane Austen',
        Year: 'year: 1995',
        language:'language: English',
        genre:'Genre: Novel',
        img:"pride-prejudice.jpg"
    },
    {
        title:'Oliver Twist',
        author:'Author: Charles Dickens',
        Year: 'year: 1992',
        language:'language: English',
        genre:'Genre: Serial novel',
        img:"oliver-twist.jpg"
    },
    {
        title:'A tale of two cities',
        author:'Author: Charles Dickens',
        Year: 'year: 1993',
        language:'language: English',
        genre:'Genre: Historical Fiction',
        img:"A tale of two cities.jpg"
    },
    {
        title:'The little prince',
        author:'Author: Antoine de Saint-Exupery',
        Year: 'year: 1943',
        language:'language: English',
        genre:'Genre: Fairy tales',
        img:"The little prince.jpg"
    },
    {
        title:'Crime and punishment',
        author:'Author: Fyodor Dostoyevsky',
        Year: 'year: 1950',
        language:'language: English',
        genre:'Genre: Detective Story',
        img:"Crime and punishment.jpg"
    },
    {
        title:'Alices adventures in wonderland',
        author:'Author: Lewis Carroll, Robert Ingpen',
        Year: 'year: 2017',
        language:'language: English',
        genre:'Genre: Fantacy Fiction',
        img:"Alices-Adventures-In-Wonderland.jpg"
    },
    {
        title:'Anna Karenina',
        author:'Author: Leo Tolstoy',
        Year: 'year: 2002',
        language:'language: English',
        genre:'Genre: Novel',
        img:"Anna Karenina.jpg"
    },
    {
        title:'Harry Potter and the goblet of fire',
        author:'Author: J.K Rowling',
        Year: 'year: 2000',
        language:'language: English',
        genre:'Genre: Novel',
        img:"Harry Potter and the goblet of fire.jpg"
    }
] 
booksRouter.get('/',function(req,res){
    res.render("books",{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/admin',name:'Add Books'},{link:'/add authors',name:'Add Authors'}],
        title:'Library App',
        books
        
    });
});
booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('book',{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/admin',name:'Add Books'},{link:'/add authors',name:'Add Authors'}],
        title:'Library App',
        book: books[id]
    })
})
module.exports = booksRouter;
