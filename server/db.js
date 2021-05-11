const typeorm = require('typeorm');

class Hero {
    constructor(id, heroImg, heroName, heroTitle, hp, atk, spd, def, heroRes, BSTtotal, weapon, 
        rarity) {
        this.id = id;
        this.heroImg = heroImg;
        this.heroName = heroName;
        this.heroTitle = heroTitle;
    }
}

const EntitySchema = require("typeorm").EntitySchema;

const HeroSchema = new EntitySchema({
    name: "Hero",
    target: Hero,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        heroImg: {
            type: "text"
        },
        heroName: {
            type: "text"
        },
        heroTitle: {
            type: "varchar"
        }
        
    }
});

async function getConnection() {
    return await typeorm.createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "Kjmnu8*SA",
        database: "setupheroes",
        synchronize: true,
        logging: false,
        entities: [
            HeroSchema
        ]
    })
}

async function getAllHeroes(){
    const connection = await getConnection();
    const heroRepo = connection.getRepository(Hero);
    const heroesList = await heroRepo.find();
    connection.close();
    return heroesList;
}

async function insertHero(heroImg, heroName, heroTitle){
        const connection = await getConnection();

        //create
        const hero = new Hero();
        hero.heroImg = heroImg;
        hero.heroName = heroName;
        hero.heroTitle = heroTitle;

        //save
        const heroRepo = connection.getRepository(Hero);
        const res = await heroRepo.save(hero);
        console.log('saved', res);

        //return new list
        const allHeroes = await heroRepo.find();
        connection.close();
        return allHeroes;


    }


module.exports = {
    getAllHeroes,
    insertHero
}
