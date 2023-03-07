// demo data to seed database with puzzledata
const {
  models: { Puzzle },
} = require("../server/db");

/**
 * function that creates 45 puzzle objects in the database
 */
const seedPuzzles = async () => {
  try {
    ///Puzzle data
    //250pc
    const puzzle1x250 = await Puzzle.create({
      name: "Puppy Eyes",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/237/300/200",
      stripeId: "prod_NSaBMb1gUwotPR",
    });

    const puzzle2x250 = await Puzzle.create({
      name: "Field",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/94/300/200",
      stripeId: "prod_NSaC5qlBbMFVjp",
    });

    const puzzle3x250 = await Puzzle.create({
      name: "Misty Morning",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/95/300/200",
      stripeId: "prod_NSaCQg3EacTbUt",
    });

    const puzzle4x250 = await Puzzle.create({
      name: "Beach Day",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/100/300/200",
      stripeId: "prod_NSaDNZvoXj3Rgf",
    });

    const puzzle5x250 = await Puzzle.create({
      name: "Relax, Ted",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/103/300/200",
      stripeId: "prod_NSaE5typZqHE7c",
    });

    const puzzle6x250 = await Puzzle.create({
      name: "Farmer Boy",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/111/300/200",
      stripeId: "prod_NSal02iIV44CXw",
    });

    const puzzle7x250 = await Puzzle.create({
      name: "After the Hay",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/110/300/200",
      stripeId: "prod_NSaEqCBpDVL1qT",
    });

    const puzzle8x250 = await Puzzle.create({
      name: "Good Sniff",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/169/300/200",
      stripeId: "prod_NSaGv7AtEqKIaU",
    });

    const puzzle9x250 = await Puzzle.create({
      name: "Ripe",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/102/300/200",
      stripeId: "prod_NSaHLcchLYIfSr",
    });

    const puzzle10x250 = await Puzzle.create({
      name: "Boat Alone",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/124/300/200",
      stripeId: "prod_NSaHUNKRXjibfz",
    });

    const puzzle11x250 = await Puzzle.create({
      name: "Walls",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/136/300/200",
      stripeId: "prod_NSaIHaEhn11zby",
    });

    const puzzle12x250 = await Puzzle.create({
      name: "Surprise!",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/146/300/200",
      stripeId: "prod_NSaI4OtuA149Ol",
    });

    const puzzle13x250 = await Puzzle.create({
      name: "How to Get to the Hills",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/155/300/200",
      stripeId: "prod_NSaIZsTH1hvCre",
    });

    const puzzle14x250 = await Puzzle.create({
      name: "Dark Dock",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/144/300/200",
      stripeId: "prod_NSaJggCzcjDsvG",
    });

    const puzzle15x250 = await Puzzle.create({
      name: "Sunday",
      description: "The perfect size for our younger puzzlers!",
      stockQuantity: 15,
      puzzlePieces: "250 pieces",
      price: 12.99,
      imgURL: "https://picsum.photos/id/145/300/200",
      stripeId: "prod_NSaJNFN5yJUlsG",
    });

    ///500pc

    const puzzle1x500 = await Puzzle.create({
      name: "Puppy Eyes",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/237/300/200",
      stripeId: "prod_NSaJH531QgVgWP",
    });

    const puzzle2x500 = await Puzzle.create({
      name: "Field",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/94/300/200",
      stripeId: "prod_NSaKzZz7UdAZ38",
    });

    const puzzle3x500 = await Puzzle.create({
      name: "Misty Morning",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/95/300/200",
      stripeId: "prod_NSaLYudzkDDeuy",
    });

    const puzzle4x500 = await Puzzle.create({
      name: "Beach Day",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/100/300/200",
      stripeId: "prod_NSaLL9M0lwmhiY",
    });

    const puzzle5x500 = await Puzzle.create({
      name: "Relax, Ted",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/103/300/200",
      stripeId: "prod_NSaMwk1ThRghoh",
    });

    const puzzle6x500 = await Puzzle.create({
      name: "Farmer Boy",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/111/300/200",
      stripeId: "prod_NSaMP0fpdoDT2c",
    });

    const puzzle7x500 = await Puzzle.create({
      name: "After the Hay",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/110/300/200",
      stripeId: "prod_NSaMkNB5zbZpno",
    });

    const puzzle8x500 = await Puzzle.create({
      name: "Good Sniff",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/169/300/200",
      stripeId: "prod_NSaNbtH2G6ZZBj",
    });

    const puzzle9x500 = await Puzzle.create({
      name: "Ripe",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/102/300/200",
      stripeId: "prod_NSaOwpRhczbi5b",
    });

    const puzzle10x500 = await Puzzle.create({
      name: "Boat Alone",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/124/300/200",
      stripeId: "prod_NSaODZTF6KOyLS",
    });

    const puzzle11x500 = await Puzzle.create({
      name: "Walls",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/136/300/200",
      stripeId: "prod_NSaP0IrP0Cr5LI",
    });

    const puzzle12x500 = await Puzzle.create({
      name: "Surprise!",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/146/300/200",
      stripeId: "prod_NSaQ2YIV1xsHb9",
    });

    const puzzle13x500 = await Puzzle.create({
      name: "How to Get to the Hills",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/155/300/200",
      stripeId: "prod_NSaQs7HwVGvtRA",
    });

    const puzzle14x500 = await Puzzle.create({
      name: "Dark Dock",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/144/300/200",
      stripeId: "prod_NSaRePFyJTCR0D",
    });

    const puzzle15x500 = await Puzzle.create({
      name: "Sunday",
      description: "The perfect size to finish in a weekend!",
      stockQuantity: 15,
      puzzlePieces: "500 pieces",
      price: 15.99,
      imgURL: "https://picsum.photos/id/145/300/200",
      stripeId: "prod_NSaRFTwkOKTx4q",
    });

    ///1000pc
    const puzzle1x1000 = await Puzzle.create({
      name: "Puppy Eyes",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/237/300/200",
      stripeId: "prod_NSaW5Kl44O7i2p",
    });

    const puzzle2x1000 = await Puzzle.create({
      name: "Field",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/94/300/200",
      stripeId: "prod_NSaW21N1CZxkNv",
    });

    const puzzle3x1000 = await Puzzle.create({
      name: "Misty Morning",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/95/300/200",
      stripeId: "prod_NSaXwGF5n1JDVZ",
    });

    const puzzle4x1000 = await Puzzle.create({
      name: "Beach Day",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/100/300/200",
      stripeId: "prod_NSaZx3gkzm4FEp",
    });

    const puzzle5x1000 = await Puzzle.create({
      name: "Relax, Ted",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/103/300/200",
      stripeId: "prod_NSaXvJq4j0ohV8",
    });

    const puzzle6x1000 = await Puzzle.create({
      name: "Farmer Boy",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/111/300/200",
      stripeId: "prod_NSaXb099qMmaU1",
    });

    const puzzle7x1000 = await Puzzle.create({
      name: "After the Hay",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/110/300/200",
      stripeId: "prod_NSaYJHTENjmAPr",
    });

    const puzzle8x1000 = await Puzzle.create({
      name: "Good Sniff",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/169/300/200",
      stripeId: "prod_NSaar9vePhCBcH",
    });

    const puzzle9x1000 = await Puzzle.create({
      name: "Ripe",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/102/300/200",
      stripeId: "prod_NSaaXaM0ny3FMG",
    });

    const puzzle10x1000 = await Puzzle.create({
      name: "Boat Alone",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/124/300/200",
      stripeId: "prod_NSabJYABMiXTWR",
    });

    const puzzle11x1000 = await Puzzle.create({
      name: "Walls",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/136/300/200",
      stripeId: "prod_NSabI3ooRasqlL",
    });

    const puzzle12x1000 = await Puzzle.create({
      name: "Surprise!",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/146/300/200",
      stripeId: "prod_NSabJab2B8Ssok",
    });

    const puzzle13x1000 = await Puzzle.create({
      name: "How to Get to the Hills",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/155/300/200",
      stripeId: "prod_NSabRke4NkXMRq",
    });

    const puzzle14x1000 = await Puzzle.create({
      name: "Dark Dock",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/144/300/200",
      stripeId: "prod_NSacoVLL0t429C",
    });

    const puzzle15x1000 = await Puzzle.create({
      name: "Sunday",
      description:
        "Perfect for when you want a longer-term commitment to a puzzle!",
      stockQuantity: 15,
      puzzlePieces: "1000 pieces",
      price: 19.99,
      imgURL: "https://picsum.photos/id/145/300/200",
      stripeId: "prod_NSacGtASnKXhOt",
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = seedPuzzles;
