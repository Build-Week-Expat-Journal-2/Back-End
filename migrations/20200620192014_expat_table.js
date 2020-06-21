exports.up = function (knex) {
    return (
      knex.schema
        .createTable('user', (tbl) => {
          tbl.increments();
          tbl.text('username', 255).notNullable().unique();
          tbl.string('password', 255).notNullable();
          tbl.text('firstname', 255);
          tbl.text('location', 255);
        })
        .createTable('story', (tbl) => {
          tbl.increments();
          tbl.string('title', 255).notNullable();
          tbl.string('location', 255).notNullable();
          tbl.string('description', 255);
          tbl.string('date', 255);
          tbl.string('image_url', 255);
          tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('user')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        })
    );
  };

  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('story')
      .dropTableIfExists('user')
  };