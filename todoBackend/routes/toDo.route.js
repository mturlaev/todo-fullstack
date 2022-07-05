const {toDoController} = require("../controllers/toDo.controller");
const {Router} = require("express");

const router = Router();

router.post("/todo", toDoController.postToDo);
router.patch("/todo/:id", toDoController.patchToDo);
router.get("/todo", toDoController.getTodo);
router.delete("/todo/:id", toDoController.deleteTodo);

module.exports = router;
