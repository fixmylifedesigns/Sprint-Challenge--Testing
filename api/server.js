const express = require("express");

const Games = require("../games/gamesModel");

const server = express();

let games = [




];

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.get("/games", (req, res) => {
  res.status(200).json(games);
});

server.post("/games", (req, res) => {
  let { title, genre, releaseYear } = req.body;

  if (!title || !genre) {
    return res
      .status(422)
      .json('games');
  }
  return res
    .status(201)
    .json(`${title} has been added to our library` );
});
// server.use(express.json());

// server.get("/", async (req, res) => {
//   res.status(200).json({ api: "up" });
// });

// server.get("/games", async (req, res) => {
//   Games.getAll()
//     .then(games => {
//       res.status(200).json(games);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// server.post("/games", async (req, res) => {
//   const game = req.body;
//   if (game.title && game.genre) {
//     try {
//       const inserted = await Games.insert(game);
//       res.status(201).json(inserted);
//     } catch (err) {
//       res.status(500).json({ mess: "ran into issues" });
//     }
//   } else {
//     res.status(400).json({ mess: "please provide title and genre" });
//   }
// });

module.exports = server;
