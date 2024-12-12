const express = require('express');
const mongoose = require('mongoose')
const Cors = require('cors');
const dotenv = require('dotenv');
const { error } = require('console');
const { todo } = require('node:test');

dotenv.config()

const {
    fetchList,
    addList,
    completeList,
    deleteList
} = require('./controllers/todoController')

// APp confg
const app = express()
const port = process.env.PORT || 8000

const connectionURL = process.env.MONGO_URI

//middleware
app.use(express.json())

app.use(Cors())

mongoose.connect(connectionURL)
.then(() => {
    app.listen(port, () => console.log(`Running on port: ${port}`))
})
.catch((err) => {
    console.log(err)
})
// API Endpoints

// Get Todos List
app.get('/todos', fetchList)

//Create a new Todo
app.post('/todos', addList)

//Update a todo
app.put('/todos/:id', completeList)

//delele a todo
app.delete('/todos/:id', deleteList)
