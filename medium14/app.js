
const express=require('express');
const session =require('express-session');
const path=require('path');
const app=express();

app.use(express.static(path.join(__dirname,'public')))
const passport=require('passport');
const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session); 


const PORT=4444;


app.use(express.urlencoded({extended:true}));
const  store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/userdetails',
    collection: 'sessions'
});

app.use(session({
    secret: 'gsgdhdgdh hdhdftehd hdhdyeedh',
    resave: false,
    saveUninitialized: true,
    store:store,
    cookie: {
        // maxAge:60* 60* 24* 1000,
        maxAge:8  

    }
}))
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine','hbs');

  mongoose.connect('mongodb://localhost:27017/userdetails');

const allRoutes= require('./routes/router');

///PASSPORT/////////////////////////////
require('./passport');  


//ROUTE//////////////////////////////////////

app.use('/',allRoutes);


app.listen(PORT,()=>{ 
    console.log("http://localhost:" +PORT);
})