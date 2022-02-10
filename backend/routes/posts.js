const express = require("express");
const postController = require("../controllers/posts");

const router = express.Router();

router.post("/process",postController.process);

module.exports = router;