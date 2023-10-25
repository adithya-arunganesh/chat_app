const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
    res.send("API is Running Successfully");
});

app.get('/api/chats', (req, res) => {
    res.send(chats);
});

app.get('/api/chats/:id', (req, res) => {
    //console.log(req.params.id);
    const singleChat = chats.find(c=>c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT,console.log(`Server Started on PORT ${PORT}`));