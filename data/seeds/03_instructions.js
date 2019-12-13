
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return
  // REMEMBER TO CHANGE THE TABLE NAME IN BOTH PLACES
  knex('steps')
    // .del() // does not reset the id
    .truncate() // empties the table and resets the primary key (id)
    .then(function () {
      // Inserts seed entries
      // CHANGE THE TABLE NAME
      return knex('steps').insert([
        { info: 'shred 1/5 c. of carrots', recipes_id: 1 },
        { info: 'use handful of green and red raisins', recipes_id: 1 },
        { info: 'use 1/5 c. of corn meal', recipes_id: 2 },
        { info: 'beat together 3 egg yolks and 2 egg-whites', recipes_id: 2 },
        { info: 'mix in 1/2 c. of flour', recipes_id: 3 },
        { info: 'mix in 4 c. of surger', recipes_id: 3 },
        { info: 'mix in 1/2 c. of milk', recipes_id: 3 },
        { info: 'slice 2 lbs of strawberries', recipes_id: 3 }
      ]);
    });
};