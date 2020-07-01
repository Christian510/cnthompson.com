const fs = require('fs');
const path = require('path');

const d = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'getData.json'
)

const skills = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'skills.json'
);
const edu = path.join(
    path.dirname(process.mainModule.filename),
    'data', 
    'education.json'
    );
const wh = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'workHistory.json'
);

const getData = cb => {
    fs.readFile(d, (err, fileContent) => {
        if(err){
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
}
const getSkills = cb => {
    fs.readFile(skills, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
}

const getEd = cb => {
    fs.readFile(edu, (err, fileContent) => {
        if(err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
}

const getWH = cb => {
    fs.readFile(wh, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
}

module.exports = class Data {
    static fetchData(cb) {
        getData(cb);
    }
}