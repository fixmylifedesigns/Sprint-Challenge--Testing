
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games')
  // .del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, title: 'rowValue1', genre: 'stuff'},
        {id: 2, title: 'rowValue2', genre: 'stuff'},
        {id: 3, title: 'rowValue3', genre: 'stuff'}
      ]);
    });
};
