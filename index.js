import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";

const app = express();
const {port,database} = require('./config/config');

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${database}`, {useNewUrlParser: true});

//bodyparser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => res.send(`Node and Express running on port ${port}`));

app.listen(port, () => {
    console.log(`your server is running on port ${port}`);
});