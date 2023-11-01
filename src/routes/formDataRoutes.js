const express = require("express");
const router = express.Router();
const formDataController = require("./../controllers/formDataController");

router.post("/saveFormData", formDataController.saveFormData);

module.exports = router;
