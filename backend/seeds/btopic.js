exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('topic').del()
    .then(function () {
      // Inserts seed entries
      return knex('topic').insert([
        {
          id: 1, 
          topic: 'Dog whistles',
          header: 'What is a Dog whistle?',
          active: true,
          tsearched: 0
        },
        {
          id: 2,
          topic: 'AAVE',
          header: 'What is AAVE?',
          active: true,
          tsearched: 0
        },
        {
          id: 3,
          topic: 'White Privlage',
          header: 'What is White Privilage?',
          active: true,
          tsearched: 0
        },
        {
          id: 4,
          topic: 'Missing Indigenous Women',
          header: 'Who are the missing indigenous women',
          active: true,
          tsearched: 0
        }
      ]);
    })
    .then(function () {
      return knex.raw('alter sequence topic_id_seq restart with 4')
    })
};
