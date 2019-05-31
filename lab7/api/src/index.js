import drewnoModule from './services/drewnoModule'

import express from 'express';
import bodyParser from 'body-parser'

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/', (req, res) => res.send('Hello drewno!'));

app.get('/api/drewno', (req, res) => res.send(drewnoModule.getAll()));

app.post('/api/drewno', (req, res) => {
    drewnoModule.create(req.body);
    res.sendStatus(200);
});

app.get('/api/drewno/:name', (req, res) => res.send(drewnoModule.findByName(req.params.name)));

app.listen(4000, () => console.log('Api listening on port 4000'));