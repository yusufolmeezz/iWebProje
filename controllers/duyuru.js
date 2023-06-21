const Duyuru = require("../models/duyuru");


exports.getDuyurular = (req, res, next) => {
  Duyuru.find()
    .then((duyurular) => {
      res.render("index", {
        sayfaBasligi: "Duyuru Listemiz",
        duyurular: duyurular,
        yönetici: false

      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getDuyuru = (req, res, next) => {
  const duyuruId = req.params.duyuruId;

  Duyuru.findById(duyuruId)
    .then((duyuru) => {
      res.render("duyuruekle", {
        sayfaBasligi: "Ürün Bilgisi",
        duyuru: duyuru,
        yol: "/"

      });
    })
    .catch((err) => { });
};

exports.getDuyuruEkle = (req, res, next) => {
  res.render("duyuruekle", {
    sayfaBasligi: "",
    baslikGoster: 2,
    yol: "/duyuruekle"

  });
};


exports.postDuyuru = (req, res, next) => {
  const duyuru_baslik = req.body.duyuru_baslik;
  const duyuru_icerik = req.body.duyuru_icerik;
  const duyuru_tarih = req.body.duyuru_tarih;

  const duyuru = new Duyuru({
    duyuru_baslik: duyuru_baslik,
    duyuru_icerik: duyuru_icerik,
    duyuru_tarih: duyuru_tarih
  });
  duyuru
    .save()
    .then(result => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};



exports.postSilId = (req, res, next) => {
  const duyuruId = req.body.duyuruId;
  Duyuru.findByIdAndRemove(duyuruId)
    .then((result) => {
      console.log("Duyuru Silindi");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};


