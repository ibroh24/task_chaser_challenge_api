const fs = require('fs');

module.exports = (app, cors) => {
    fs.readdirSync(__dirname).forEach((item) => {
        let [inp, flname, extension] = /(\w+).(\w+)$/.exec(item);
        if (flname === "index" || flname === "routes" || extension !== "js") return;
        let routeObj = require('./'+flname);
        app.use('/', cors(), routeObj);
    });   
}