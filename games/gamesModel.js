const db = require("../data/dbConfig");

module.exports = {
  insert,
  getAll
};

async function insert(games) {
  const [id] = await db("games").insert(hobbit);

  return db("games")
    .where({ id })
    .first();
}

function getAll() {
  return db(games);
}
