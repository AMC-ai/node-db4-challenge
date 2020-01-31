
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return
  // REMEMBER TO CHANGE THE TABLE NAME IN BOTH PLACES
  knex('ingredients')
    // .del() // does not reset the id
    .truncate() // empties the table and resets the primary key (id)
    .then(function () {
      // Inserts seed entries
      // CHANGE THE TABLE NAME
      return knex('ingredients').insert([
        { name: "carrot", recipes_id: 1 },
        { name: "raisins", recipes_id: 1 },
        { name: "cream cheese", recipes_id: 1 },
        { name: "corn meal", recipes_id: 2 },
        { name: "eggs", recipes_id: 2 },
        { name: "flour", recipes_id: 3 },
        { name: "sugar", recipes_id: 3 },
        { name: "milk", recipes_id: 3 },
        { name: "strawberry", recipes_id: 3 }
      ]);
    });
};