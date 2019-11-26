exports.up = function(knex) {
    return knex.schema.createTable('favorites', table => {
          table.increments('id').primary()
          table.string('name')
          table.integer('users_id').references('users.id')
      })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('favorites')
  };