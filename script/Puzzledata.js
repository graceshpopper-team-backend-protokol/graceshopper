const {
  db,
  models: { Puzzle },
} = require("../server/db");
//const { faker } = require("@faker-js/faker");

//fake Puzzle data
// let puzzles = [];
// for (let i = 0; i < 50; i++) {
//   let newPuzzle = {
//     name: faker.lorem.word({ length: { min: 2, max: 5 } }),
//     description: faker.lorem.paragraph(),
//     stockQuantity: faker.datatype.number({ min: 0 }),
//     puzzlePieces: faker.helpers.arrayElement(
//       ["250 pieces", "500 pieces", "1000 pieces"],
//       1
//     ),
//     price: faker.helpers.arrayElement([12.99, 15.99, 19.99], 1),
//     //if puzzlePieces = 250 pieces, return $12.99
//     //if puzzlePieces = 500 pieces, return $15.99
//     //if puzzlePieces = 1000 pieces, return $19.99
//     // imgURL: 'https://picsum.photos/200',
//   };
//   puzzles.push(newPuzzle);
// }


const seedPuzzles = async () => {
  try {
    await db.sync({ force: true })
///Puzzle data
//250pc
const puzzle1x250 = await Puzzle.create({
  name: 'Puppy Eyes',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/237/200/300',
  stripeId: 0
})

const puzzle2x250 = await Puzzle.create({
  name: 'Field',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/94/200/300',
  stripeId: 0
})

const puzzle3x250 = await Puzzle.create({
  name: 'Misty Morning',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/95/200/300',
  stripeId: 0
})

const puzzle4x250 = await Puzzle.create({
  name: 'Beach Day',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/100/200/300',
  stripeId: 0
})

const puzzle5x250 = await Puzzle.create({
  name: 'Relax, Ted',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/103/200/300',
  stripeId: 0
})

const puzzle6x250 = await Puzzle.create({
  name: 'Farmer Boy',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/111/200/300',
  stripeId: 0
})

const puzzle7x250 = await Puzzle.create({
  name: 'After the Hay',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/110/200/300',
  stripeId: 0
})

const puzzle8x250 = await Puzzle.create({
  name: 'Misty Morning',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/95/200/300',
  stripeId: 0
})

const puzzle9x250 = await Puzzle.create({
  name: 'Ripe',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/102/200/300',
  stripeId: 0
})

const puzzle10x250 = await Puzzle.create({
  name: 'Boat Alone',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/124/200/300',
  stripeId: 0
})

const puzzle11x250 = await Puzzle.create({
  name: 'Walls',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/136/200/300',
  stripeId: 0
})

const puzzle12x250 = await Puzzle.create({
  name: 'Surprise!',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/146/200/300',
  stripeId: 0
})

const puzzle13x250 = await Puzzle.create({
  name: 'How to Get to the Hills',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/155/200/300',
  stripeId: 0
})

const puzzle14x250 = await Puzzle.create({
  name: 'Dark Dock',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/144/200/300',
  stripeId: 0
})

const puzzle15x250 = await Puzzle.create({
  name: 'Sunday',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '250 pieces',
  price: 12.99,
  imgURL: 'https://picsum.photos/id/145/200/300',
  stripeId: 0
})

///500pc

const puzzle1x500 = await Puzzle.create({
  name: 'Puppy Eyes',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/237/200/300',
  stripeId: 0
})

const puzzle2x500 = await Puzzle.create({
  name: 'Field',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/94/200/300',
  stripeId: 0
})

const puzzle3x500 = await Puzzle.create({
  name: 'Misty Morning',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/95/200/300',
  stripeId: 0
})

const puzzle4x500 = await Puzzle.create({
  name: 'Beach Day',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/100/200/300',
  stripeId: 0
})

const puzzle5x500 = await Puzzle.create({
  name: 'Relax, Ted',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/103/200/300',
  stripeId: 0
})

const puzzle6x500 = await Puzzle.create({
  name: 'Farmer Boy',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/111/200/300',
  stripeId: 0
})

const puzzle7x500 = await Puzzle.create({
  name: 'After the Hay',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/110/200/300',
  stripeId: 0
})

const puzzle8x500 = await Puzzle.create({
  name: 'Misty Morning',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/95/200/300',
  stripeId: 0
})

const puzzle9x500 = await Puzzle.create({
  name: 'Ripe',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/102/200/300',
  stripeId: 0
})

const puzzle10x500 = await Puzzle.create({
  name: 'Boat Alone',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/124/200/300',
  stripeId: 0
})

const puzzle11x500 = await Puzzle.create({
  name: 'Walls',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/136/200/300',
  stripeId: 0
})

const puzzle12x500 = await Puzzle.create({
  name: 'Surprise!',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/146/200/300',
  stripeId: 0
})

const puzzle13x500 = await Puzzle.create({
  name: 'How to Get to the Hills',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/155/200/300',
  stripeId: 0
})

const puzzle14x500 = await Puzzle.create({
  name: 'Dark Dock',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/144/200/300',
  stripeId: 0
})

const puzzle15x500 = await Puzzle.create({
  name: 'Sunday',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 15.99,
  imgURL: 'https://picsum.photos/id/145/200/300',
  stripeId: 0
})

///1000pc
const puzzle1x1000 = await Puzzle.create({
  name: 'Puppy Eyes',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/237/200/300',
  stripeId: 0
})

const puzzle2x1000 = await Puzzle.create({
  name: 'Field',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/94/200/300',
  stripeId: 0
})

const puzzle3x1000 = await Puzzle.create({
  name: 'Misty Morning',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/95/200/300',
  stripeId: 0
})

const puzzle4x1000 = await Puzzle.create({
  name: 'Beach Day',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/100/200/300',
  stripeId: 0
})

const puzzle5x1000 = await Puzzle.create({
  name: 'Relax, Ted',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/103/200/300',
  stripeId: 0
})

const puzzle6x1000 = await Puzzle.create({
  name: 'Farmer Boy',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/111/200/300',
  stripeId: 0
})

const puzzle7x1000 = await Puzzle.create({
  name: 'After the Hay',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/110/200/300',
  stripeId: 0
})

const puzzle8x1000 = await Puzzle.create({
  name: 'Misty Morning',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/95/200/300',
  stripeId: 0
})

const puzzle9x1000 = await Puzzle.create({
  name: 'Ripe',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/102/200/300',
  stripeId: 0
})

const puzzle10x1000 = await Puzzle.create({
  name: 'Boat Alone',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/124/200/300',
  stripeId: 0
})

const puzzle11x1000 = await Puzzle.create({
  name: 'Walls',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/136/200/300',
  stripeId: 0
})

const puzzle12x1000 = await Puzzle.create({
  name: 'Surprise!',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/146/200/300',
  stripeId: 0
})

const puzzle13x1000 = await Puzzle.create({
  name: 'How to Get to the Hills',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/155/200/300',
  stripeId: 0
})

const puzzle14x1000 = await Puzzle.create({
  name: 'Dark Dock',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/144/200/300',
  stripeId: 0
})

const puzzle15x1000 = await Puzzle.create({
  name: 'Sunday',
  description: 'lorem ipsum',
  stockQuantity: 15,
  puzzlePieces: '500 pieces',
  price: 19.99,
  imgURL: 'https://picsum.photos/id/145/200/300',
  stripeId: 0
});

  }catch(err){
    console.error(err)
  }
}

// const seedPuzzles = async () => {
//   try {
//     await Promise.all(
//       puzzles.map((puzzle) =>
//         Puzzle.create({
//           name: puzzle.name,
//           description: puzzle.description,
//           stockQuantity: puzzle.stockQuantity,
//           puzzlePieces: puzzle.puzzlePieces,
//           price: puzzle.price,
//           image: puzzle.imgURL,
//           stripeId: puzzle.stripeId,
//         })
//       )
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };

module.exports = seedPuzzles;
