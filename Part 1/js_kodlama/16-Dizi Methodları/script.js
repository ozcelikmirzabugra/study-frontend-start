let ogrenciler = ["çınar", "yigit", "ada"];

sonuc = ogrenciler.length;

//array to string

sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" "); //araya boşluk koymak, istediğin şeyi koyabilirsin.

//eleman silme
sonuc = ogrenciler.pop(); //son eleman silinir
sonuc = ogrenciler.shift(); //ilk eleman silinir

//eleman ekleme
// sonuc = ogrenciler.push("mirza"); //sonuna eleman ekler

let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "renault"];
let markalar3 = ["mercedes"];

// sonuc = markalar1.concat(markalar2).concat(markalar3);
sonuc = markalar1.splice(0, 1, "bmw", "audi");  //mazda silinir bmw ve audi eklenir

console.log(sonuc);
console.log(markalar1);
