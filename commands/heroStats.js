module.exports = {
    
    name: 'heroStats',
    description: "Give hero stats.",

    execute(message, args){
        hero = args;
        message.channel.send('Working on adding ' + hero + '.')
    }

}

const express = require('express')
        const app = express()
        const port = 3000
        
        app.get('/heroes', async (req, res) => {
          const heroInfo = [
              {heroPicture: 'blank', heroName: 'blank', heroTitle: 'blank', 
              hp: 'blank', atk: 'blank', spd: 'blank', def: 'blank', res: 'blank', BSTtotal: 'blank', 
              weapon: 'blank', weaponTxt: 'blank', weaponType: 'blank', moveType: 'blank', 
              rarity: 'blank', releaseDate: 'blank', game: 'blank'}
          ]
          //Get from DB
          res.send(heroInfo)
        
        })
        
        app.post('/heroes', async (req, res) => {
            console.log(req.body)
            const heroData = await scrapers.scrapeProduct(req.body.hero)
            console.log(heroData);
            //Add to DB
            res.send('added')
        })
