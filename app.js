const express= require('express');
const ejs= require('ejs');
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const passport= require('passport');


const app= express();

//middlewares
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))


app.get('/',(req,res)=>{
    const title= 'Home';
    res.render('homepage',{title:title})
});

app.get('/books',(req,res)=>{
    const title='Books'
    res.render('books',{title:title})
});

app.get('/about',(req,res)=>{
    const title= 'About Us';
    res.render('about',{title:title});
});


app.get('/testimonies',(req,res)=>{
    const title= 'Testimonies';
    res.render('testimonies',{title:title})
})

app.listen('3000',()=>{
    console.log('Book server started on port 3000');
})
