exports.up = function(knex, Promise) {
    return knex.schema.createTable('author', (table) =>{
        table.increments()
        table.text("info", 25000)
        table.text("url")
        table.text("fName")
        table.text("lName")
        table.text("email")
        table.text("password")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('author')
};