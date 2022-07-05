const toDo = require("../models/Todo.model");

module.exports.toDoController = {
    postToDo: async (req, res) => {
        try {
            const result = await toDo.create({
                text: req.body.text,
                completed: req.body.completed
            })
            res.json(result)
        } catch (error) {
            res.json(error.message)
        }
    },
    patchToDo: async (req, res) => {
        try {
            const result = await toDo.findByIdAndUpdate(req.params.id, {
               completed: req.body.completed
            })
            console.log(result)
            res.json(result)
        } catch (error) {
            res.json(error.message)
        }
    },
    getTodo: async (req, res) => {
        try {
            const result = await toDo.find();
            res.json(result)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteTodo: async (req, res) => {
        try {
            await toDo.findByIdAndRemove(req.params.id);
            res.json(" тудушка удалена")
        } catch (error) {
            res.json(error.message)
        }
    },
};