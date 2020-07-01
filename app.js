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
            let allDuties = allData.work_history.map( (jd, i) => jd.job_duties );
            function jobDescriptions() {
                for (i = 0; i < allDuties.length; i++) {
                    let eachJD = allDuties[i].length;
                    console.log(`length of each jd: ${eachJD}`)
                    for (j = 0; j < eachJD.length; j++) {
                        console.log(eachJD[j]);
                        // need to stop iteration when the length of eachJD is reached and move to the next job.
                    }
                }
            }
            jobDescriptions();

        res.render('resume', {
            pageTitle: "Resume",
            styles: "resume.css",
            path: "/resume",
            activeResume: true,
            skills: allData.skills,
            education: allData.education,
            workHistory: allData.work_history,
            // jobDuties: jDuties
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