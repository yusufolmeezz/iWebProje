const express = require('express');
const path=require('path');

const router=express.Router();

const duyuruController=require('../controllers/duyuru');
const yetkiKontrol = require('../util/yetkiKontrol');

router.get('/', duyuruController.getDuyurular);
router.post('/duyuru-sil',yetkiKontrol, duyuruController.postSilId);
router.get('/duyuru-detay/:urunId', duyuruController.getDuyuru);


module.exports=router;