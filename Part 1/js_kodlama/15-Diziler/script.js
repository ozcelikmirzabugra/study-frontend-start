// let urun1 = "iphone12";
// let urun2 = "iphone13";
// let urun3 = "iphone13 pro";

let urunler = ["iphone 12", "iphone 13", "iphone13 pro"];
let fiyatlar = [9000, 12000, 20000];
let renkler = ["gold", "siyah", "beyaz"];

let urun1 = ["iphone 12", 9000, "gold"];
let urun2 = [];
urun2[0] = "iphone 13";
urun2[1] = 12000;
urun2[2] = "siyah";
let urun3 = ["iphone 13 pro", 20000, ["siyah", "mavi", "beyaz"]];

console.log(urun3[2]);
console.log(typeof urun3[2]);

console.log(urunler[0]);
console.log(urunler[1]);
console.log(urunler[2]);

console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);

let kursAdi = "Komple Uygulamalı Web";

console.log(kursAdi[5]);
