const express = require('express');
const router = express.Router();
const uuidv1 = require('uuid/v1')

//data
const taskList = require('./data.json');

router.get('/', (request, response) => {
    response.status(201).json(taskList);
})

router.post('/', (request, response) => {
    const item = request.body;
    let newId = uuidv1();

    const newItem = {
        ...item,
        id: newId
    }
    
    taskList.push(newItem);
    response.status(200).send(newItem)
})

module.exports = router;