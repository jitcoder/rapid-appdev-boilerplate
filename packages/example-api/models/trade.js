const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tradeSchema = new Schema({
  symbol: {
    type: String
  },
  quantity: {
    type: Number
  }
});

const Trade = mongoose.model('trade', tradeSchema);

module.exports = Trade;