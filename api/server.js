const express = require("express");

const Games = require("../games/gamesModel");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/games", async (req, res) => {
  const rows = await Games.getAll();

  res.status(200).json(rows);
});

server.post("/games", async (req,res) => {
  const game = req.body;
  if(game.title && game.genre) {
    try{
      const inserted = await Games.insert(game);
      res.status(201).json(inserted)
    } catch (err) {
      res.status(500).json({mess: 'ran into issues'})
    }
  } else {
    res.status(400).json({ mess: 'please provide title and genre'})
  }
})

module.exports = server;
