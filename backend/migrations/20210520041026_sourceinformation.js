exports.up = function(knex, Promise) {
    return knex.schema.createTable('sourceinfo', (table) =>{
        table.increments()
        table.integer("topic_id")
            .references("topic.id")
            .onDelete("CASCADE")
        table.text("title")
        table.text("text", 25000)
        table.text("url")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('sourceinfo')
};