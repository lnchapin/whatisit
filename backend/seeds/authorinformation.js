exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('author').del()
    .then(function () {
      // Inserts seed entries
      return knex('author').insert([
        {
          id: 1,
          fName: 'Lindsay',
          lName: 'Chapin',
          email: 'lindsay@test.com',
          password: '$2a$13$CiRpEgaSnbGd.zCscx99cuZFs3jSlQwkqEO140x9veCaP3zZ6fZlm',
          info: 'hello',
          url: 'google.com'
        },
        {
          id: 2,
          fName: 'Sarah',
          lName: 'Nadler',
          email: 'sarah@test.com',
          password: '$2a$13$CiRpEgaSnbGd.zCscx99cuZFs3jSlQwkqEO140x9veCaP3zZ6fZlm',
          info: 'hello',
          url: 'google.com'
        },
        {
          id: 3,
          fName: 'Chance',
          lName: 'Scott-Burke',
          email: 'chance@test.com',
          password: '$2a$13$CiRpEgaSnbGd.zCscx99cuZFs3jSlQwkqEO140x9veCaP3zZ6fZlm',
          info: 'hello',
          url: 'google.com'
        }
      ]);
    })
    .then(function () {
      return knex.raw('alter sequence author_id_seq restart with 4')
    })
};
