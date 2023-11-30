
const express = require('express');
const router = express.Router();

//get all items
router.get('/', (req, res) => {
    res.send('get all items api route');
});

//get one item
router.get('/:id', (req, res) => {
    res.send('get one item api route');
});

//create one item
router.post('/', (req, res) => {
    res.send('create one item api route');
});

//update one item   
router.put('/:id', (req, res) => {
    res.send('update one item api route');
});

//delete one item   
router.delete('/:id', (req, res) => {
    res.send('delete one item api route');
});

module.exports = router;