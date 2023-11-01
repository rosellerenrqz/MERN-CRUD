//ENV VARIABLES
require("dotenv").config();

//import dependencies
const express = require("express");
const connectMongoDB = require("./config/mongodb");
const TopicController = require("./controller/TopicController");

//create express app
const app = express();

// Add this middleware to parse JSON request bodies
app.use(express.json());

//connect to DB
connectMongoDB();

//routing
app.get("/notes", TopicController.getTopic);

app.get("/notes/:id", TopicController.getTopicById);

app.post("/notes", TopicController.createTopic);

app.put("/notes/:id", TopicController.updateTopic);

app.delete("/notes/:id", TopicController.deleteTopic);

//start server
app.listen(process.env.PORT);
