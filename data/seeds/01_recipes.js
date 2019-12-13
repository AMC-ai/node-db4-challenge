
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return
  // REMEMBER TO CHANGE THE TABLE NAME IN BOTH PLACES
  knex('recipes')
    // .del() // does not reset the id
    .truncate() // empties the table and resets the primary key (id)
    .then(function () {
      // Inserts seed entries
      // CHANGE THE TABLE NAME
      return knex('recipes').insert([
        { name: 'Carrot Cake' },
        { name: 'Yellow Cake' },
        { name: 'Milk Cake' }
      ]);
    });
};