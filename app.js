const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const expHbs = require('express-handlebars');


const app = express();
app.engine('.html', expHbs({extname: '.html'}));
app.set('view engine', '.html');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public', 'assets'))

app.get('/', (req, res, next) => {
    res.render('resume');
})



const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));