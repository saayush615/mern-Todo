const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.post('/', async (req,res) => { 
    try{
        const todo = new Todo({
            title: req.body.title,
            desc: req.body.desc,
            dueDate: req.body.dueDate 
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
    try{
        const todo = await Todo.findById(req.params.id);
        todo.title = req.body.title;    
        todo.desc = req.body.desc;
        todo.dueDate = req.body.dueDate;
        todo.isCompleted = req.body.isCompleted;
        const updateTodo = await todo.save();
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