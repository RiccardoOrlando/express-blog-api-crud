const appData = require("../data/DatabasePost");

const index = (req, res) => {
  res.json(appData);
};

const show = (req, res) => {
  const postId = req.params.id;
  if (isNaN(postId)) {
    return res.sendStatus(400);
  }
  const postsSearch = appData.find((elm) => elm.id === Number(postId));

  if (!postsSearch) {
    return res.sendStatus(404);
  }
  res.json(`Dettagli del post ${postsSearch}`);
  console.log(postsSearch);
};

const post = (req, res) => {
  const postId = req.params.id;
  // Creiamo un nuovo id incrementando l'ultimo id presente
  const newId = appData[appData.length - 1].id + 1;
  // Creiamo un nuovo oggetto pizza
  const newPizza = {
    id: newId,
    name: req.body.name,
    image: req.body.image,
    ingredients: req.body.ingredients,
  };

  console.log(req.body)
  // Aggiungiamo la nuova pizza al menu
  appData.push(newPizza);
  // controlliamo
  console.log(appData);

  // Restituiamo lo status corretto e la pizza appena creata
  res.status(201);
  res.json(newPizza);
};

const update = (req, res) => {
  const postId = req.params.id;
  // recuperiamo l'id dall' URL e trasformiamolo in numero
  const id = parseInt(req.params.id);
  // cerchiamo il pizza tramite id
  const pizza = appData.find((pizza) => pizza.id === id);
  // Piccolo controllo
  if (!pizza) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "Pizza non trovata",
    });
  }
  // Aggiorniamo la pizza
  pizza.name = req.body.name;
  pizza.image = req.body.image;
  pizza.ingredients = req.body.ingredients;
  // Controlliamo il menu
  console.log(menu);
  // Restituiamo la pizza appena aggiornata
  res.json(pizza);
};

const PartialUpdate = (req, res) => {
  const postId = req.params.id;
  if (isNaN(postId)) {
    return res.sendStatus(400);
  }
  const postsSearch = appData.find((elm) => elm.id === Number(postId));

  if (!postsSearch) {
    return res.sendStatus(404);
  }
  res.json(`Post ${postId} aggiornato parzialmente`);
};

const destroy = (req, res) => {
  const postId = req.params.id;
  if (isNaN(postId)) {
    return res.sendStatus(400);
  }
  const postsSearch = appData.find((elm) => elm.id === Number(postId));

  if (!postsSearch) {
    return res.sendStatus(404);
  }

  const postIndex = appData.indexOf(postsSearch);
  appData.splice(postIndex, 1);
  console.log(appData);

  res.sendStatus(204);
};

module.exports = { index, show, post, update, PartialUpdate, destroy };
