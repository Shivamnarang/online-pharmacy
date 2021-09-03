const express = require("express");
const multer = require("multer");
const router = express.Router();
const pharmacyController = require("../controllers/pharmacy");

router.get("/", pharmacyController.getHome);
router.get("/contact", pharmacyController.getContactUs);
router.post("/contactUs", pharmacyController.postContactUs);

module.exports = router;
