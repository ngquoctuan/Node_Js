import express from "express";
import configViewEngine from "./configs/ViewEngine";;
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('test/init.ejs');
})
app.get('/about', (req, res) => {
    res.send(`<h1>I'm Sugar Venom</h1>`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
