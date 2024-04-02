/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('payment_details', function(table) {
    table.increments('id').primary();
    table.integer('order_id').unsigned().references('id').inTable('orders').onDelete('CASCADE');
    table.string('payment_type').notNullable();
    table.string('approval_code');
    table.string('payment_status');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('payment_details');
};
