const express = require('express')
const app = express()
const port = 3000

const postsRouter = require('./routers/posts')

app.use(`/bacheca`, postsRouter)

app.use(express.static('public'))


app.get('/bacheca', (req, res) => {
  res.json([
    {
      id: 1,
      titolo: "Le migliori spiagge italiane",
      contenuto: "Scopri quali sono le spiagge più belle da visitare in Italia nel 2025. Dalle acque cristalline della Sardegna alle scogliere mozzafiato della Costiera Amalfitana.",
      immagine: "http://localhost:3000/img/ciambellone.jpeg",
      tags: ["viaggi", "mare", "estate", "Italia"]
    },
    {
      id: 2,
      titolo: "5 ricette facili per una cena veloce",
      contenuto: "Hai poco tempo per cucinare? Ecco 5 ricette semplici e veloci che conquisteranno tutti a tavola.",
      immagine: "http://localhost:3000/img/cracker_barbabietola",
      tags: ["cucina", "ricette", "veloce", "cibo"]
    },
    {
      id: 3,
      titolo: "Come iniziare a fare yoga",
      contenuto: "Una guida pratica per chi vuole iniziare a praticare yoga da casa, con esercizi base e consigli utili.",
      immagine: "http://localhost:3000/img/pane_fritto_dolce.jpeg",
      tags: ["yoga", "benessere", "fitness", "salute"]
    },
    {
      id: 4,
      titolo: "Tecnologie emergenti nel 2025",
      contenuto: "Esploriamo le nuove tecnologie che stanno cambiando il mondo: intelligenza artificiale, blockchain e molto altro.",
      immagine: "http://localhost:3000/img/torta_paesana.jpeg",
      tags: ["tecnologia", "innovazione", "AI"]
    }
  ]);
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})