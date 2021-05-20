exports.up = function(knex, Promise) {
    return knex.schema.createTable('topic', (table) =>{
        table.increments()
        table.text("topic")
        table.text("header")
        table.boolean("active")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('topic')
};