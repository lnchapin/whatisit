exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sourceinfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('sourceinfo').insert([
        {
          id: 1,
          topic_id: 1,
          title: new Date(),
          text: 'this is a source',
          url: 'true.com',
        },
        {
          id: 2,
          topic_id: 2,
          title: new Date(),
          text: 'this is a source',
          url: 'true.com',
        },
        {
          id: 3,
          topic_id: 3,
          title: new Date(),
          text: 'this is a source',
          url: 'true.com',
        },
        {
          id: 4,
          topic_id: 1,
          title: new Date(),
          text: 'this is a source',
          url: 'true.com',
        }
      ]);
    })
    .then(function () {
      return knex.raw('alter sequence sourceinfo_id_seq restart with 4')
    })
};
