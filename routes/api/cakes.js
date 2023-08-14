const express = require("express");
const router = express.Router();
const cakesCtrl = require("../../controllers/api/cakes");

// GET /api/cakes
router.get("/", cakesCtrl.getAllCakes);

// GET /api/cakes/:id
// router.post("/cakes/:id", cakesCtrl.createCake);
router.post("/", cakesCtrl.createCake);

router.get("/:id", cakesCtrl.getCakeById);

router.put("/:id", cakesCtrl.updateCake);

router.delete("/:id", cakesCtrl.deleteCake);

module.exports = router;
