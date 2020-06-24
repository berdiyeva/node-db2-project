// create sample data for cars
exports.seed = async function (knex) {
	await knex("cars").truncate();
	await knex("cars").insert([
		// {
		// 	mileage: 40000,
		// 	model: "Raw4",
		// 	name: "Toyota",
		// 	titleStatus: "salvage",
		// 	trackTransmissionType: "cvt",
		// 	vin: "123abc",
		// },
		// {
		// 	mileage: 120000,
		// 	model: "Versa",
		// 	name: "Nissan",
		// 	titleStatus: "clean",
		// 	trackTransmissionType: "cvt",
		// 	vin: "123abc1",
		// },
		{
			name: "Tesla",
			model: "S",
			mileage: 7000,
			vin: "123abc2",
			trackTransmissionType: "automatic",
			titleStatus: "clean",
		},
		{
			name: "BMW",
			model: "M3",
			mileage: 19000,
			vin: "123abc3",
			trackTransmissionType: "manual",
			titleStatus: "salvage",
		},
	]);
};
