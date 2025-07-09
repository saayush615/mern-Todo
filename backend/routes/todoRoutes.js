const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.post('/', async (req,res) => { 
    try{
        const todo = new Todo({
            task: req.body.task
        });
        const todos = await todo.save();
        res.status(201).json(todos);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});
router.get('/', async (req,res) => { 
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    }catch(err){
        res.status(400).json({message: err.message});
    }
 });
 router.put('/:id', async (req,res) => { 
    const { id } = req.params;
    const { isCompleted } = req.body;

    try{
        const updateTodo = await Todo.findByIdAndUpdate(
            id,
            { isCompleted },
            { new: true }
        );
        
        res.status(201).json(updateTodo);
    }catch(err){
        res.status(400).json({message: err.message});
    }
 })
 router.delete('/:id', async (req,res) => { 
    try{
        const todo = await Todo.deleteOne({_id: req.params.id});
        res.status(200).json(todo);
    }catch(err){
        res.status(400).json({message: err.message});
    }
 })

 module.exports = router;