const router = require("express").Router();

const phoneData = require("../data/phones.json");

router.get("/", (req, res, next) => {
	res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
	res.status(200).json(phoneData);
});

router.get("/phones/:id", (req, res, next) => {
	const onePhone = phoneData.filter((data) => {
		return data.id === Number(req.params.id);
	});
	if (onePhone[0]) {
		res.status(200).json(onePhone[0]);
	} else {
		res.status(404).json("No phone is found");
	}
});

module.exports = router;
