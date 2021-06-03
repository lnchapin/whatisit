exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fresearch').del()
    .then(function () {
      // Inserts seed entries
      return knex('fresearch').insert([
        {
          id: 1,
          topic_id: 1,
          text: 'Further Research, 1, 1',
          url: 'google.com'
        },
        {
          id: 2,
          topic_id: 2,
          text: 'Further Research, 2, 2',
          url: 'google.com'
        },
        {
          id: 3,
          topic_id: 3,
          text: 'Further Research, 3, 3',
          url: 'google.com'
        },
        {
          id: 4,
          topic_id: 1,
          text: 'Further Research, 1, 4',
          url: 'google.com'
        }
      ]);
    })
    .then(function () {
      return knex.raw('alter sequence fresearch_id_seq restart with 4')
    })
};
