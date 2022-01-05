const router = require("express").Router();
const User = require("../User");
const crudController = require("../crudController");

router.get("/", crudController.get(User));
router.post("/", crudController.create(User));
router.put("/:id", crudController.put(User));
router.delete("/:id", crudController.delete(User));


module.exports = router;
