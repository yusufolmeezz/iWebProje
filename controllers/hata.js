exports.getHata404=(req,res,next) => {
    // res.status(404).send("Sayfa Bulunamıyor");
     //res.status(404).sendFile(path.join(rootDir,'views','sayfa404.html'));
     res.render('sayfa404', {
         sayfaBasligi:'Sayfa Bulunamıyor',
         yol:'unknown'
     });
 
 }