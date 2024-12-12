const mongoose = require('mongoose')
const Todos = require('../Todo_Model')
const { timeStamp } = require('console')

// const fetchList = async (req, res) => {
//     try {
//         const allTodos = await Todos.find({}).sort({createdAt: -1})
//         res.status(200).send(allTodos)
//     } catch (error) {
//         res.status(400).send(error.message)

//     }
// }

const fetchList = async (req, res) => {
    const { priority } = req.query; // Extract the priority filter from query parameters

    try {
        const filter = priority ? { priority } : {}; // Apply filter only if priority is provided
        const allTodos = await Todos.find(filter).sort({ createdAt: -1 }); // Sort by createdAt
        res.status(200).send(allTodos);
    } catch (error) {
        res.status(400).send(error.message);
    }
};




// const addList = async (req, res) => {
//     const Todo_Model = req.body;

//     try {
//         const newTodo = await Todos.create(Todo_Model)
//         res.status(201).send(newTodo)
//     } catch (error) {
//         res.status(500).send(error.message)

//     }
// }
const addList = async (req, res) => {
    const Todo_Model = req.body;

    try {
        const newTodo = await Todos.create({
            text: Todo_Model.text,
            completed: Todo_Model.completed,
            priority: Todo_Model.priority || 'Medium', // Default to Medium
        });
        res.status(201).send(newTodo);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


// const completeList = async (req, res) => {
//     const {id} = req.params

//     try {
//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(404).send(`There is no Todo with the id of ${id}`)
//         }
//         const todoID = { _id: id }
//         const update = { completed: true }
//         const updateTodo = await Todos.findOneAndUpdate(todoID, update)
//         if (!updateTodo) {
//             return res.status(404).send(`There is no Todo with the id of ${id}`)
//         }
//         res.status(200).send(updateTodo)
//     } catch (error) {
//         res.status(500).send(error.message)

//     }
// }

const completeList = async (req, res) => {
    const { id } = req.params;
    const { text, priority } = req.body; // Accept updated fields

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Todo with id: ${id}`);
        }
        const todoID = { _id: id };
        const update = {};
        if (text) update.text = text;
        if (priority) update.priority = priority;
        const updatedTodo = await Todos.findOneAndUpdate(todoID, update, { new: true });
        if (!updatedTodo) {
            return res.status(404).send(`No Todo with id: ${id}`);
        }
        res.status(200).send(updatedTodo);
    } catch (error) {
        res.status(500).send(error.message);
    }
};



const deleteList = async (req, res) => {
    const {id} = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`There is no Todo with the id of ${id}`)
        }
        const deleteTodo = await Todos.findOneAndDelete({ _id: id })
        res.status(200).send(deleteTodo)
    } catch (error) {
        res.status(500).send(error.message)

    }
}

module.exports = {
    fetchList,
    addList,
    completeList,
    deleteList
}
