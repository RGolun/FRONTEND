import drzewaModule from './services/drzewaModule'

import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/', (req, res) => res.send('Hello drzewa!'));

app.get('/api/drzewa', (req, res) => res.send(drzewaModule.getAll()));

app.post('/api/drzewa', (req, res) => {
    if (!drzewaModule.create(req.body))
        drzewaModule.update(req.body);
    res.sendStatus(200);
});

app.get('/api/drzewa/:gatunek', (req, res) => res.send(drzewaModule.findByGatunek(req.params.name)));

app.listen(4000, () => console.log('Api listening on port 4000'));