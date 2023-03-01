const { db, models: {Puzzle}} = require('../server/db');
const { faker } = require('@faker-js/faker');

//fake Puzzle data
let puzzles = [];
for (let i = 0; i < 50; i ++) {
    let newPuzzle = {
        name: faker.lorem.word({length: { min: 2, max: 5}}),
        description: faker.lorem.paragraph(),
        stockQuantity: faker.datatype.number({min: 0}),
        puzzlePieces: faker.helpers.arrayElement(['250 pieces','500 pieces', '1000 pieces', 1]),
        price: faker.helpers.arrayElement(['$12.99', '$15.99', '$19.99'], 1),
          //if puzzlePieces = 250 pieces, return $12.99  
          //if puzzlePieces = 500 pieces, return $15.99 
          //if puzzlePieces = 1000 pieces, return $19.99 
        // imgURL: 'https://picsum.photos/200',
    }
    puzzles.push(newPuzzle)
}

const seedPuzzles = async () => {
    try {
        await db.sync({ force: true})
        await Promise.all(puzzles.map((puzzle) => 
        Puzzle.create({
            name: puzzle.name,
            description: puzzle.description,
            stockQuantity: puzzle.stockQuantity,
            puzzlePieces: puzzle.puzzlePieces,
            price: puzzle.price,
            // image: puzzle.imgURL,
        })
        ))
    } catch (err) {
        console.log(err)
    }
}

seedPuzzles()

module.exports = seedPuzzles