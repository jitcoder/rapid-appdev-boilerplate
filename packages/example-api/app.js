const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/trades', { useMongoClient: true });
mongoose.Promise = global.Promise;

const Trade = require('./models/trade');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  Trade.find((e, r) => {
    res.send(r);
  });
});

app.get('/:id', (req, res) => {
  Trade.findById(req.params.id, (e, r) => {
    res.send(r);
  });
});

app.post('/', (req, res) => {
  Trade.create(req.body, (e, r) => {
    if (!e) {
      res.send('ok');
    } else {
      res.sendStatus(500);
      res.send(e);
    }
  });
});

app.put('/:id', (req, res) => {
  Trade.updateOne({ _id: req.params.id }, req.body, (e, r) => {
    if (!e) {
      res.send('ok');
    } else {
      res.sendStatus(500);
      res.send(e);
    }
  })
});

app.delete('/:id', (req, res) => {
  Trade.deleteOne({ id: req.params.id }, (e, r) => {
    if (!e) {
      res.send('ok');
    } else {
      res.sendStatus(500);
      res.send(e);
    }
  })
});


app.listen(process.env.PORT || 3000);
