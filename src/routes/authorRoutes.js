const express = require('express');
const authorsRouter = express.Router();
var authors=[
    {
        title:'O.V Vijayan',
        nationality: 'Nationality: Indian',
        born:'Born on: 2 July 1930, Palakkad',
        occupation: 'occupation: Novelist, Joutnalist, Cartoonist',
        famousin:'Famous work: Khasakkinte Ithihasam(1969)',
        img:"ov vijayan.jpg"
    },
    {
        title:'Thakazhi Sivasankara Pillai',
        nationality: 'Nationality: Indian',
        born:'Born on: 10 April 1912, Alleppey',
        occupation: 'occupation: Writer',
        famousin:'Famous work: kayar(1978),Chemmen(1956)',
        img:"Thakazhi Sivasankara Pillai.jpg"
    },
    {
        title:'M.T Vasudevan Nair',
        nationality: 'Nationality: Indian',
        born:'Born on: 15 July 1933, Kudallur',
        occupation: 'occupation: Novelist, Film Director',
        famousin:'Famous work: Randamoozham(1984),Nalukettu(1958)',
        img:"MT Vasudevan Nair.jpg"
    },
    {
        title:'Kamala Surayya Das',
        nationality: 'Nationality: Indian',
        born:'Born on: 31 March 1932, Malabar',
        occupation: 'occupation: Poet,Novelist,Short story Writer',
        famousin:'Famous work: Summer in Culcutta(1965),My Story(1973)',
        img:"Kamala Surayya Das.jpg"
    },
    {
        title:'Perumbadavam Sreedharan',
        nationality: 'Nationality: Indian',
        born:'Born on: 12 February 1938, Perumbadavam',
        occupation: 'occupation: Writer',
        famousin:'Famous work: Oru Sankeerthanam Pole(1993)',
        img:"Perumbadavam Sreedharan.jpg"
    },
    {
        title:'Benyamin',
        nationality: 'Nationality: Indian',
        born:'Born on: 12 February 1971, Pathanamthitta',
        occupation: 'occupation: Writer',
        famousin:'Famous work: Adu Jeevitham(2008)',
        img:"Benyamin.jpg"
    },
    {
        title:'M. Mukundan',
        nationality: 'Nationality: Indian',
        born:'Born on: 10 September 1942, Mahe',
        occupation: 'occupation: Writer,Social Activist',
        famousin:'Famous work: Mayyazhippuzhayude Theeragalil(1974)',
        img:"M. Mukundan.jpg"
    },
    {
        title:'Lalitambika Antarjanam',
        nationality: 'Nationality: Indian',
        born:'Born on: 30 March 1909, Kollam',
        occupation: 'occupation: Writer,Social Reformer',
        famousin:'Famous work: Agnisakshi(1976)',
        img:"Lalithambika_Antherjanam.jpg"
    },
    {
        title:'Vaikom Muhammad Basheer',
        nationality: 'Nationality: Indian',
        born:'Born on: 21 January 1908, Kottayam',
        occupation: 'occupation: Writer,Freedom Fighter',
        famousin:'Famous work: Pathummayude Aadu(1959)',
        img:"Vaikom Muhammad Basheer.png"
    },
    {
        title:'Vyloppilli Sreedhara Menon',
        nationality: 'Nationality: Indian',
        born:'Born on: 11 May 1911, Cochin',
        occupation: 'occupation: Poet',
        famousin:'Famous work: Mambazham(1936),Kannikkoythu(2006)',
        img:"Vailoppally Sreedhara Menon.jpg"
    },
    {
        title:'Arundhati Roy',
        nationality: 'Nationality: Indian',
        born:'Born on: 24 November 1961, Assam',
        occupation: 'occupation: Writer,Essayist,Activist',
        famousin:'Famous work: The God of Small Things(1997)',
        img:"Arundhati Roy.jpg"
    },
    {
        title:'Jonathan Swift',
        nationality: 'Nationality: British',
        born:'Born on: 30 November 1667, Ireland',
        occupation: 'occupation: Poet,Essayist,Priest',
        famousin:'Famous work: A Tail of a Tub(1704),Gullivers Travels(1726)',
        img:"Jonathan Swift.jpg"
    },
    {
        title:'Jane Austen',
        nationality: 'Nationality: British',
        born:'Born on: 16 December 1775, England',
        occupation: 'occupation: Author,Novelist',
        famousin:'Famous work: Pride and Prejudice(1813)',
        img:"Jane Austen.jpg"
    },
    {
        title:'Charles Dickens',
        nationality: 'Nationality: British',
        born:'Born on: 7 February 1812, England',
        occupation: 'occupation: Writer',
        famousin:'Famous work: Oliver Twist(1838),Bleak House(1853)',
        img:"Charles Dickens.jpg"
    },
    {
        title:'George Orewell',
        nationality: 'Nationality: English',
        born:'Born on: 25 June 1903, Motihari',
        occupation: 'occupation: Novelist,Essayist,jouralist',
        famousin:'Famous work: Animal Farm(1945),1984(1949)',
        img:"George Orewell.jpg"
    },
    {
        title:'Antoine de Saint-Exupery',
        nationality: 'Nationality: French',
        born:'Born on: 29 June 1900, France',
        occupation: 'occupation: Aviator, writer',
        famousin:'Famous work: The Little Prince(1943)',
        img:"Antoine de.jpg"
    },
    {
        title:'Fyodor Dostoyevsky',
        nationality: 'Nationality: Russian',
        born:'Born on: 11 November 1821, Russia',
        occupation: 'occupation: Novelist, Journalist',
        famousin:'Famous work: Crime and Punishment(1866),The Double(1846)',
        img:"Fyodor Dostoyevsky.jpg"
    },
    {
        title:'Lewis Carroll',
        nationality: 'Nationality: British',
        born:'Born on: 27 January 1832, England',
        occupation: 'occupation: Author,Poet,Teacher,Inventer',
        famousin:'Famous work: Alice Advventures in Wonterland(1865)',
        img:"Lewis Carroll.jpg"
    },
    {
        title:'Leo Tolstoy',
        nationality: 'Nationality: Russian',
        born:'Born on: 9 September 1828, Russia',
        occupation: 'occupation: Novelist,Playwrite,Essayist',
        famousin:'Famous work: War and Peace(1869),Anna Karenina(1878)',
        img:"Leo Tolstoy.jpg"
    },
    {
        title:'J.K Rowling',
        nationality: 'Nationality: British',
        born:'Born on: 31 July 1965, England',
        occupation: 'occupation: Author,Screenwriter',
        famousin:'Harry Potter(2007),Cormoran Strike(2013)',
        img:"rowling.jpg"
    }    
]
authorsRouter.get('/',function(req,res){
    res.render("authors",{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbooks',name:'Add Books'},{link:'/addauthors',name:'AddAuthors'}],
        title:'Library App',
        authors  
    });
});
authorsRouter.get('/:i',function(req,res){
    const i = req.params.i
    res.render('author',{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/admin',name:'Add Books'},{link:'/addauthors',name:'Add Authors'}],
        title:'Library App',
        author: authors[i]
    })
})
module.exports = authorsRouter;