
const Kullanici = require("../models/kullanici");
const bcrypt = require('bcryptjs');

exports.getGiris = (req, res, next) => {
        console.log(req.session);
        res.render("giris", {
          sayfaBasligi: "Yetkili Giriş Paneli",
          yol: "/giris",
        });
    
};


exports.postGiris = (req, res, next) => {
    const eposta = req.body.eposta;
    const sifre = req.body.sifre;

    Kullanici.findOne({eposta:eposta})
    .then(kullanici => {
      if(!kullanici) {
        
        return res.redirect('/giris');
      }

      bcrypt
      .compare(sifre, kullanici.sifre)
      .then(sifreKontrol => {
        if(sifreKontrol) {
          req.session.oturum_acildi=true;
          req.session.kullanici=kullanici;
          return req.session.save(bilgi => {
             res.redirect('/');
          })
        }
        return res.render('giris');

      })
      .catch(err => {
        console.log(err);
        res.redirect('/giris');
      })


    })
    .catch(err => {
      
      console.log(err);
      res.redirect('/giris');
    })
};

exports.getCikis = (req, res, next) => {
   
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    })
        
};


exports.getKayit = (req, res, next) => {
  
         res.render("kayit", {
           sayfaBasligi: "Yetkili KAyıt Paneli",
           yol: "/kayit",
         
         });
     
 };

 exports.postKayit = (req, res, next) => {

    const eposta = req.body.eposta;
    const sifre = req.body.sifre;

    Kullanici.findOne({eposta:eposta})
    .then(kullaniciBilgi => {
      if(kullaniciBilgi) {
        return res.redirect('/kayit');
      }
      return bcrypt
      .hash(sifre,10)
      .then(hashedSifre => {
        const kullanici = new Kullanici( {
          eposta:eposta,
          sifre:hashedSifre
        });
        return kullanici.save();
      })
      .then(sonuc => {
        res.redirect('/giris'); 
      })
    })
    .catch(err => {
      console.log(err);
    })

};
  