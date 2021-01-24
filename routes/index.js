const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const views = require("./views.js");

router.use("/", views);
router.use("/api", apiRoutes);

module.exports = router;