let ogr1_ad = "Ada";
let ogr1_soyad = "Bilgi";
let ogr_1_dogum = 2012;
let ogr_1_m1 = 70;
let ogr_1_m2 = 70;
let ogr_1_m3 = 80;

let ort1 = (ogr_1_m1 + ogr_1_m2 + ogr_1_m3) / 3;
console.log(ort1);

let basari1 = ort1 >= 50;
console.log(basari1);

let nowYear = new Date().getFullYear();
let yas1 = nowYear - ogr_1_dogum;
console.log(yas1);

let ogr2_ad = "Yigit";
let ogr2_soyad = "Bilgi";
let ogr_2_dogum = 2010;
let ogr_2_m1 = 40;
let ogr_2_m2 = 40;
let ogr_2_m3 = 50;

let ort2 = (ogr_2_m1 + ogr_2_m2 + ogr_2_m3) / 3;
console.log(ort2);

let basari2 = ort2 >= 50;
console.log(basari2);

let yas2 = nowYear - ogr_2_dogum;
console.log(yas2);
