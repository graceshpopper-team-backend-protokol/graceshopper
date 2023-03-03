const {
  db,
  models: { Puzzle },
} = require("../server/db");
const { faker } = require("@faker-js/faker");

//fake Puzzle data
let puzzles = [];
for (let i = 0; i < 50; i++) {
  let newPuzzle = {
    name: faker.lorem.word({ length: { min: 2, max: 5 } }),
    description: faker.lorem.paragraph(),
    stockQuantity: faker.datatype.number({ min: 0 }),
    puzzlePieces: faker.helpers.arrayElement(
      ["250 pieces", "500 pieces", "1000 pieces"],
      1
    ),
    price: faker.helpers.arrayElement([12.99, 15.99, 19.99], 1),
    //if puzzlePieces = 250 pieces, return $12.99
    //if puzzlePieces = 500 pieces, return $15.99
    //if puzzlePieces = 1000 pieces, return $19.99
    // imgURL: 'https://picsum.photos/200',
  };
  puzzles.push(newPuzzle);
}


const puzzle1x250 = await Puzzle.create({
  name: 'Puppy Eyes',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/237/200/300'
})

const puzzle2x250 = await Puzzle.create({
  name: 'Field',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/94/200/300'
})

const puzzle3x250 = await Puzzle.create({
  name: 'Misty Morning',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/95/200/300'
})

const puzzle4x250 = await Puzzle.create({
  name: 'Beach Day',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/100/200/300'
})

const puzzle5x250 = await Puzzle.create({
  name: 'Relax, Ted',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/103/200/300'
})

const puzzle6x250 = await Puzzle.create({
  name: 'Farmer Boy',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/111/200/300'
})

const puzzle7x250 = await Puzzle.create({
  name: 'After the Hay',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/110/200/300'
})

const puzzle8x250 = await Puzzle.create({
  name: 'Misty Morning',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/95/200/300'
})

const puzzle9x250 = await Puzzle.create({
  name: 'Ripe',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/102/200/300'
})

const puzzle10x250 = await Puzzle.create({
  name: 'Boat Alone',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/124/200/300'
})

const puzzle11x250 = await Puzzle.create({
  name: 'Walls',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/136/200/300'
})

const puzzle12x250 = await Puzzle.create({
  name: 'Surprise!',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/146/200/300'
})

const puzzle13 = await Puzzle.create({
  name: 'How to Get to the Hills',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/155/200/300'
})

const puzzle14 = await Puzzle.create({
  name: 'Dark Dock',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/144/200/300'
})

const puzzle15 = await Puzzle.create({
  name: 'Sunday',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  image: 'https://picsum.photos/id/145/200/300'
})


const seedPuzzles = async () => {
  try {
    await Promise.all(
      puzzles.map((puzzle) =>
        Puzzle.create({
          name: puzzle.name,
          description: puzzle.description,
          stockQuantity: puzzle.stockQuantity,
          puzzlePieces: puzzle.puzzlePieces,
          price: puzzle.price,
          // image: puzzle.imgURL,
        })
      )
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedPuzzles;
