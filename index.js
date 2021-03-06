const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose");

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/api/gcp", (req, res)=>{
	res.send(`your email is: this is amazing!!!`)
})

const PORT= 3001;
app.listen(PORT, ()=>{
	console.log(`App is running on port ${PORT}`)
})

module.exports = app
