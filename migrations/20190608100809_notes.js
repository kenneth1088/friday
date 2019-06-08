exports.up = knex => {
  return knex.schema.createTable('notes', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('notes')
    t.datetime('created').defaultTo(knex.fn.now())
  })
}

exports.down = knex => {
  return knex.schema.dropTable('notes')
}
