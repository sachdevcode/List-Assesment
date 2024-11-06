const express = require("express");
const router = express.Router();
const { createList, getList } = require("../controllers/list.controller.js");

router.post("/", createList);
router.get("/", getList);

module.exports = router;
