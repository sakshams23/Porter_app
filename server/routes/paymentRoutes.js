
const express = require("express");
const { processDonation } = require("../controllers/paymentController");
const router = express.Router();

router.post("/donate", processDonation);

module.exports = router;
