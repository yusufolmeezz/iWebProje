const express = require('express');

const router = express.Router();
const yetkiKontrol = require('../util/yetkiKontrol');
const duyuruController=require('../controllers/duyuru');

router.get('/duyuruekle', yetkiKontrol, duyuruController.getDuyuruEkle);
router.post('/duyuruekle',yetkiKontrol, duyuruController.postDuyuru);


exports.routes=router;
