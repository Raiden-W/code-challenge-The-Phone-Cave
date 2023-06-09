const router = require("express").Router();

const phoneData = require("../data/phones.json");

router.get("/", (req, res, next) => {
	res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
	res.json(phoneData);
});

router.get("/phones/:id", (req, res, next) => {
	const onePhone = phoneData.filter((data) => {
		return data.id === Number(req.params.id);
	});
	res.json(onePhone[0]);
});

module.exports = router;
