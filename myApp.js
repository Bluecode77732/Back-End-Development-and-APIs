let express = require('express');
let app = express();

/* Show on console 'Hello World' */

console.log("Hello World");


/* Start a Working Express Server */

app.get("/", function responsive (req, res) {
    res.send("Data");
});

/* "with the modern ES6 syntax you can save a few keystrokes by using 'arrow functions'. src : https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-start-a-working-express-server/301519"
app.get("/", (req, res) => {
    res.send("Data");
});
*/


/* Serve an HTML File */

app.get("/", (req, res) => {
    res.send = __dirname("/views/index.html");
});



module.exports = app;
