const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Imposta la cartella dei file statici (CSS, immagini, JS)
app.use(express.static(path.join(__dirname, 'www')));

// API per restituire il contenuto del file JSON
app.get('/api/mante', (req, res) => {
    fs.readFile(path.join(__dirname, 'mante.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Errore nel caricamento del file');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Servire la pagina index.html come home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server in esecuzione su http://localhost:${port}`);
});
