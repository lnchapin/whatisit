exports.up = function(knex, Promise) {
    return knex.schema.createTable('topic', (table) =>{
        table.increments()
        table.text("topic")
        table.text("header")
        table.boolean("active")
        table.integer("tsearched")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('topic')
};