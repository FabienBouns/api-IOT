const express = require("express");
const router = express.Router();

const {create, get } = require("../controllers/sensor")
const {checkAuth, checkData} = require('../middleware/')

router.get("/", checkAuth, get);
router.post("/", checkAuth, checkData, create);

module.exports = router