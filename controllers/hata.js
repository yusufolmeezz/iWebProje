exports.getHata404=(req,res,next) => {
     res.render('s404', {
         sayfaBasligi:'Sayfa Bulunamıyor',
         yol:'unknown'
     });
 
 }