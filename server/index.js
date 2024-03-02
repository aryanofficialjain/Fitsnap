const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000

app.get("/", (req,res)=> {
    res.send("HOMEPAGE");
})


app.listen(PORT, ()=> {
    console.log("RUNNING !!!!!!");
})