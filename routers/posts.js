const express = require('express');
const router = express.Router();
const appData = require('../DatabasePost')
const DatabasePostController = require('../controllers/DatabasePostController')

// INDEX - Get all posts
router.get('/', DatabasePostController.index);

// SHOW - Get single post by ID
router.get('/:id', DatabasePostController.show);

// CREATE - Create a new post
router.post('/', DatabasePostController.post);

// UPDATE - Update post by ID (PUT per aggiornamento completo)
router.put('/:id', DatabasePostController.update);

// UPDATE - Partial update post by ID (PATCH per aggiornamento parziale)
router.patch('/:id', DatabasePostController.PartialUpdate);

// DELETE - Delete post by ID
router.delete('/:id', DatabasePostController.destroy);


module.exports = router