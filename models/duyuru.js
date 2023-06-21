const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const duyuruSchema = new Schema({
  duyuru_baslik: {
    type: String,
    required: true,
  },
  duyuru_icerik: {
    type: String,
    required: true,
  },
  duyuru_tarih: { 
    type: Date,
    required: true,
  }
});

module.exports=mongoose.model('Duyuru', duyuruSchema);

