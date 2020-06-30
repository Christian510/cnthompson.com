const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const expHbs = require('express-handlebars');
const Data = require('./models/getData');


const app = express();
app.engine('.html', expHbs({extname: '.html'}));
app.set('view engine', '.html');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public', 'assets'))

app.get('/', (req, res, next) => {
    res.render('about', {
        pageTitle: "About",
        styles: "about.css",
        path: "/",
        activeAbout: true
    });
});

app.get('/resume', (req, res, next) => {
    Data.fetchData(allData => {
        // console.log(allData.education);
        res.render('resume', {
            pageTitle: "Resume",
            styles: "resume.css",
            path: "/resume",
            activeResume: true,
            skills: allData.skills,
            education: allData.education,
            wh: allData.work_history
    })
    });
})

app.get('/portfolio', (req, res, next) => {
    res.render('portfolio', {
        pageTitle: "Portfolio",
        styles: "portfolio.css",
        path: "/portfolio",
        activePortfolio: true
    });
});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));