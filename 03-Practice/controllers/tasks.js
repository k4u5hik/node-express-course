const Task = require('../models/Task');

// make getAllTasks async
const getAllTasks = async (req, res) => {
  //Try and catch block to handle errors
  try {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
    //res.status(200).json({tasks, amount: tasks.length})
    //res.status(200).json({success: true, data: {tasks,nbHits: tasks.length}})
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
const getTask = async (req, res) => {
  try {
    const {id:taskID} =  req.params
    const task = await Task.findOne({_id: taskID})
    if(!task){
      return res.status(404).json({msg: `Task id: ${taskID} not found`}) // ALWAYS RETURN STATUS CODE * Very important*
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg: error})
  }
}
const updateTask = async (req, res) => {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {new: true, runValidators:true}) // new: true returns the updated document
    if(!task){
      return res.status(404).json({msg: `Task id: ${taskID} not found`})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg: error})
  }
}
const deleteTask = async (req, res) => {
  try {
    const {id:taskID} =  req.params
    const task = await Task.findOneAndDelete({_id: taskID})
    if(!task){
      return res.status(404).json({msg: `Task id: ${taskID} not found`}) // ALWAYS RETURN STATUS CODE * Very important*
    }
    //res.status(200).json({task}) OR
    //res.status(200).send() OR
    res.status(200).json({task:null, status: 'deleted'})
  } catch (error) {
    res.status(500).json({msg: error})
  }
}
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}