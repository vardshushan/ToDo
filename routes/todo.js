const router = require('express').Router();
const Todo = require("../models/Todo");
//routes
/**
 * Create To do
 */
router.post("/add/todo", (req, res) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo});
    //save the to do data
    newTodo.save()
        .then(() => {
            console.log("successfully saved!");
            res.redirect("/");
        })
        .catch(err => console.log(err));
})
/**
 * Edit To Do
 */
router.post("/edit/:id", async (req, res) => {
    const {todo, _id} = req.body;
    Todo.findByIdAndUpdate(_id, {$set: req.body}, {new: true})
        .then(() => {
            console.log("successfully Edited!");
            res.redirect("/");
        }).catch(err => console.log(err));
})
/**
 * Delete To do
 */
router.delete("/:id", (req, res)=>{
    Todo.findByIdAndDelete(req.params.id).then(result =>{})
})

module.exports = router;
