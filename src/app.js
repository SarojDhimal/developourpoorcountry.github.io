const express = require("express");
const app = express();
const path = require("path");
const hbs  = require("hbs");

// Express Server Framework

// const Database = require("./db/conn");



// Database.connect("username", "password", "dbname");

// module.exports = app;


// adding the database system with the server for the better configurations !!!

// const User=require("./models/usermessage");
const port = process.env.PORT || 2500;

// adding the static file to the server to redirect the port :
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");


// joining the bootstap css into the files :
app.use(express.static(staticpath));
app.use(express.urlencoded({extended:false}));

app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")));



app.set("view engine", "hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);





app.post("/contact",async(req,res) =>{

    try{

       
        const UserData=new User(req.body);
        await UserData.save();
        res.status(201).render("index");
        
    } catch(error){
        res.status(500).send(error);
    }





})
// this is the routing portions 
app.get("/", (req, res) => {
    res.render("index");


})



app.get("/about", (req, res) => {
    res.render("about");


})
app.get("/services", (req, res) => {
    res.render("services");


})
app.get("/gallery", (req, res) => {
    res.render("gallery");


})
app.get("/contact", (req, res) => {
    res.render("contact");


})




// server creation process :
app.listen(port, () => {
    console.log(` server is running at port number ${port}`);


})
