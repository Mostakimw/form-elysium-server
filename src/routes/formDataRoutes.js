const express = require("express");
const router = express.Router();
const formDataController = require("./../controllers/formDataController");

router.post("/saveFormData", formDataController.saveFormData);
router.get("/getFormData", formDataController.getFormData);
router.get("/getSpecificFormData", formDataController.getSpecificFormData);

module.exports = router;
