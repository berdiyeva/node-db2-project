//create cars table
exports.up = async function (knex) {
	await knex.schema.createTable("cars", (table) => {
		//   table.integer("id").notNull().unique().primary()
		table.increments("id");
		table.text("name").notNull().unique();
		table.text("model").notNull();
		table.real("mileage").notNull();
		table.real("vin").notNull();
		table.text("trackTransmissionType");
		table.text("titleStatus");
	});
};

exports.down = function (knex) {};
