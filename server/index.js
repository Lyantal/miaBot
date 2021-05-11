
const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');

const scrapers = require ('./scrapers');

const db = require('./db')

app.use(bodyParser.json())
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/heroesList', async (req, res) => {
    const heroesList = await db.getAllHeroes();
    res.send(heroesList)

})

app.post('/heroesList', async (req, res) => {
    console.log(req.body);
    const heroInfo = await scrapers.scrapeProduct(req.body.pageURL)
    const heroesList = await db.insertHero(heroInfo.data.heroImg, heroInfo.data.heroName, heroInfo.data.heroTitle,
      req.body.pageURL)
    res.send(heroesList);
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
