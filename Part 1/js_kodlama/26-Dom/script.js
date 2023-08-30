var isim = "Ahmet";
function yazdir() {
  var isim = "Ayse";
  var yas = 20;
  console.log("function scope:", isim, yas);
}

if (true) {
  let isim = "Zeynep";
  console.log(isim);
}

console.log(isim);
yazdir();
//fonksiyonlar kendi scope alanlarını oluştururlar
//block içerisinde yeni bir scope oluşmaz(let, const).
