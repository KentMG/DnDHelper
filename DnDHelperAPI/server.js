const express = require('express');
const app = express();
const apiRouter = require("./api");
var cors = require('cors');

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://<username>:<password>@dndhelper-kyqmm.mongodb.net/DnDHelper?retryWrites=true", {
    useCreateIndex: true,
    useNewUrlParser: true
})

app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.use('/', apiRouter)

app.listen(process.env.PORT || 5000, function () { });

mongoose.connection.once("open", () => { console.log("DB is Connected!") })