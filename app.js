const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
//ustawienie, ze moja aplikacja musi korzystac z silnika hbs
app.set("view engine", 'hbs')
// Podpięcie css
const path = require('path')
app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/JS', express.static(path.join(__dirname, "./js")));
//gdy uzytkownik wchodzi na stronę
app.get('/', function (req, res) {
    res.render('index',
    {pageTitle: "Lekcja 01"})
})
app.get('/about', function (req, res) {
    res.send("My site")
})
app.listen(port, (err) => {
    if (err) {
        return console.log("coś poszło nie tak...:", err)
    }
    console.log("serwer działa na porcie", port)
})