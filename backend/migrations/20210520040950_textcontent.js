exports.up = function(knex, Promise) {
    return knex.schema.createTable('content', (table) =>{
        table.increments()
        table.integer("topic_id")
            .references("topic.id")
            .onDelete("CASCADE")
        table.date("date")
        table.text("text", 25000)
        table.boolean("active")
        table.integer("authorid")
            .references("author.id")
            .onDelete("CASCADE")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('textcontent')
};