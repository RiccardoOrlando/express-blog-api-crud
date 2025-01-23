const appData = require('../DatabasePost')


const index = (req, res) => {
    res.send('Lista di tutti i posts');
}


const show = (req, res) => {
    const postId = req.params.id;
    if(isNaN(postId)){
        return res.sendStatus(400)
    }
    const postsSearch = appData.find(elm => elm.id === Number(postId))

    if(!postsSearch){
        return res.sendStatus(404)
    }
    res.send(`Dettagli del post ${postId}`);
}


const post = (req, res) => {
    const postId = req.params.id;
    // Qui andrebbe la logica per creare un nuovo post
    res.send('Nuovo post creato');
}

const update = (req, res) => {
    const postId = req.params.id;
    if(isNaN(postId)){
        return res.sendStatus(400)
    }
    const postsSearch = appData.find(elm => elm.id === Number(postId))

    if(!postsSearch){
        return res.sendStatus(404)
    }
    res.send(`Post ${postId} aggiornato completamente`);
}

const PartialUpdate = (req, res) => {
    const postId = req.params.id;
    if(isNaN(postId)){
        return res.sendStatus(400)
    }
    const postsSearch = appData.find(elm => elm.id === Number(postId))

    if(!postsSearch){
        return res.sendStatus(404)
    }
    res.send(`Post ${postId} aggiornato parzialmente`);
}

const destroy = (req, res) => {
    const postId = req.params.id;
    if(isNaN(postId)){
        return res.sendStatus(400)
    }
    const postsSearch = appData.find(elm => elm.id === Number(postId))

    if(!postsSearch){
        return res.sendStatus(404)
    }
    res.send(`Post ${postId} eliminato`);
}

module.exports = {index, show, post, update, PartialUpdate, destroy}