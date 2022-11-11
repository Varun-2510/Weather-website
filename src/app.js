const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

//  Public Static Path :

const staticPath = path.join(__dirname , "../public");
const viewsPath = path.join(__dirname , "../templates/views")
const partialsPath = path.join(__dirname , "../templates/partials")

app.set("view engine" , "hbs");
app.set("views" , viewsPath);

hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));


// Routing :

app.get("/" , (req , res) => {
    res.render("index.hbs");  
})

app.get("/about" , (req , res) => {
    res.render("about.hbs");  
})

app.get("/weather" , (req , res) => {
    res.render("weather.hbs");  
})

app.get("*" , (req , res) => {
    res.render("404error.hbs" , {
        errorMsg : "Opps! Page not Found"
    });   
})

app.listen(port , () => {
    console.log(`Listening to the port at ${port}`);
})