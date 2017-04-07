let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let game = require('../config/games'); // create game object - reps document in games collection

/* GET home page. */
router.get('/', (req, res, next) =>{
  let currentDate = new Date(); //local variable for Callback Function
  res.render('content/index', { 
    title: 'Home',
  date: `${currentDate.getMonth()}, ${currentDate.getDay()}, ${currentDate.getFullYear()} (MM,DD,YYYY) -- ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} (HH:MM:SS)`
   });
});

/* GET about page. Extra route using about.ejs View*/
router.get('/about', (req, res, next) =>{
    let currentDate = new Date();//local variable for Callback Function
  res.render('content/about', { 
    title: 'About',
date: `${currentDate.getMonth()}, ${currentDate.getDay()}, ${currentDate.getFullYear()} (MM,DD,YYYY) -- ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} (HH:MM:SS)`
 }); //Render about.ejs view, ref. title/date - pass in 'About' and time, etc
});

router.get('/projects', (req, res, next) =>{
    let currentDate = new Date();//local variable for Callback Function
  res.render('content/projects', { 
    title: 'Projects',
date: `${currentDate.getMonth()}, ${currentDate.getDay()}, ${currentDate.getFullYear()} (MM,DD,YYYY) -- ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} (HH:MM:SS)`
 }); //Render about.ejs view, ref. title/date - pass in 'About' and time, etc
});

router.get('/services', (req, res, next) =>{
    let currentDate = new Date();//local variable for Callback Function
  res.render('content/services', { 
    title: 'Services',
date: `${currentDate.getMonth()}, ${currentDate.getDay()}, ${currentDate.getFullYear()} (MM,DD,YYYY) -- ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} (HH:MM:SS)`
 }); //Render about.ejs view, ref. title/date - pass in 'About' and time, etc
});

router.get('/contact', (req, res, next) =>{
    let currentDate = new Date();//local variable for Callback Function
  res.render('content/contact', { 
    title: 'Contact',
date: `${currentDate.getMonth()}, ${currentDate.getDay()}, ${currentDate.getFullYear()} (MM,DD,YYYY) -- ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} (HH:MM:SS)`
 }); //Render about.ejs view, ref. title/date - pass in 'About' and time, etc
});

module.exports = router;
