exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('content').del()
    .then(function () {
      // Inserts seed entries
      return knex('content').insert([
        {
          id: 1,
          topic_id: 1,
          date: new Date(),
          text: "Dog whistles are coded language that to someone who isn't in the in group sounds doesn't raise alarm but to other members sends a clear message",
          active: true,
          authorid: ''
        },
        {
          id: 2,
          topic_id: 2,
          date: new Date(),
          text: 'research.com',
          active: true,
          authorid: ''
        },
        {
          id: 3,
          topic_id: 3,
          date: new Date(),
          text: 'research.com',
          active: true,
          authorid: ''
        },
        {
          id: 4,
          topic_id: 1,
          date: new Date(),
          text: 'research.com',
          active: true,
          authorid: ''
        }
      ]);
    })
    .then(function () {
      return knex.raw('alter sequence content_id_seq restart with 4')
    })
};
