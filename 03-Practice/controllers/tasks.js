const Task = require('../models/Task');

// make getAllTasks async
const getAllTasks = async (req, res) => {
  //Try and catch block to handle errors
  try {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
  } catch (error) {
    res.status(500).json({msg: error})
  }
}
const createTask = async (req, res) => {
  //try catch - validation errors
  try{
  const task = await Task.create(req.body);
  res.status(201).json({task})
} catch(error){
  res.status(500).json({msg: error})
}
}
const getTask = (req, res) => {
  res.json({id: req.params.id})
}
const updateTask = (req, res) => {
  res.send('update task')
}
const deleteTask = (req, res) => {
  res.send('delete task')
}
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}