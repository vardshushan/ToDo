const  router = require("express").Router()
const Todo = require("../models/Todo");

//routes will be here...
/**
 * Home page
 */
router.get("/", async (req, res) => {
    const allToDo = await Todo.find();
    res.render('index', {todo: allToDo});
})
/**
 * Edit page
 */
router.get("/edit/:id", async (req, res) => {
    const currentTodo = await Todo.findOne({ _id : req.params.id});
    res.render('edit', { todo: currentTodo});
});


module.exports = router;