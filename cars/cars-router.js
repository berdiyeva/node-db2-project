const express = require("express");
const db = require("../data/config");

const router = express.Router();

router.get("/cars", async (req, res, next) => {
	try {
		const cars = await db("cars");
		res.json(cars);
	} catch (err) {
		next(err);
	}
});

router.get("/cars/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const car = await db("cars").where({ id }).first();
		res.json(car);
	} catch (err) {
		next(err);
	}
});

router.post("/cars", async (req, res, next) => {
	try {
		const carData = req.body;
		const [id] = await db("cars").insert(carData);
		const newCar = await db("cars").where({ id });
		res.status(201).json(newCar);
	} catch (err) {
		next(err);
	}
});

router.put("/cars/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		await db("cars").where({ id }).update(req.body);
		const car = await db("cars").where({ id }).first();
		res.status(200).json(car);
	} catch (err) {
		next(err);
	}
});

router.delete("/cars/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		await db("cars").where({ id }).del();

		res.status(204).end();
	} catch (err) {
		next(err);
	}
});

module.exports = router;
