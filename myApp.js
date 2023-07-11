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


/* Serve Static Asset */
/** 
 * 
 * The '__dirname' variable is a string containing the absolute path to the root of your project 
 * which has to be concatenated with the folder containing the assets. 
 * 
   // Normal usage
   app.use(express.static(__dirname + "/public"));   
   // Assets at the /public route
   app.use("/public", express.static(__dirname + "/public"));
*/

app.use(express.static(__dirname + "/public/style.css"));


/* Serve JSON on a Specific Route */
/**
  While an HTML server serves HTML, an API serves data. 
  A REST (REpresentational State Transfer) API allows data exchange in a simple way, 
  without the need for clients to know any detail about the server. 
  The client only needs to know where the resource is (the URL), 
  and the action it wants to perform on it (the verb). 
  The GET verb is used when you are fetching some information, without modifying anything. 
  These days, the preferred data format for moving information around the web is JSON. 
  Simply put, JSON is a convenient way to represent a JavaScript object as a string, 
  so it can be easily transmitted.

  Let's create a simple API by creating a route that responds with JSON at the path /json. 
  You can do it as usual, with the app.get() method. 
  Inside the route handler, use the method res.json(), passing in an object as an argument. 
  This method closes the request-response loop, returning the data. 
  Behind the scenes, it converts a valid JavaScript object into a string, 
  then sets the appropriate headers to tell your browser that you are serving JSON, 
  and sends the data back. 
  A valid object has the usual structure {key: data}. 
  'data' can be a number, a string, a nested object or an array. 
  'data' can also be a variable or the result of a function call, 
  in which case it will be evaluated before being converted into a string.

  Serve the object {"message": "Hello json"} as a response, in JSON format, 
  to GET requests to the /json route. 
  Then point your browser to your-app-url/json, you should see the message on the screen.
*/

app.get("/json", (req, res) => {
    res.json({
        "message" : "Hello json"
    });
});

module.exports = app;
