//create cars table
exports.up = async function (knex) {
	await knex.schema.createTable("cars", (table) => {
		//   table.integer("id").notNull().unique().primary()
		table.increments("id");
		table.text("name").notNull().unique();
		table.text("model").notNull();
		table.integer("mileage").notNull();
		table.text("vin").notNull();
		table.text("trackTransmissionType");
		table.text("titleStatus");
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists("cars");
};
