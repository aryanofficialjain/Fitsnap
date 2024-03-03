const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())



const dbURI = "mongodb+srv://aryanofficialjain:7985447692@cluster0.i9we7he.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB Atlas");
})
.catch((err) => {
  console.error("Error connecting to MongoDB Atlas:", err.message);
});


app.get("/", (req, res) => {
  res.send("HOMEPAGE");
});


app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
