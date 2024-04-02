/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('order_details', function(table) {
    table.increments('id').primary();
    table.integer('order_id').unsigned().references('id').inTable('orders').onDelete('CASCADE');
    table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE');
    table.integer('quantity').notNullable();
    table.decimal('price_at_time', 10, 2);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('order_details');
};
