
exports.seed = function(knex) {

  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { username: 'gage',
        email: 'gage@gage.com'
        }
      ]);
    });
};
