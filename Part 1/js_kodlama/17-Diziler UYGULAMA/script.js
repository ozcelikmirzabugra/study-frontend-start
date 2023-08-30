//1-Elma, Armut, Muz, Cilek elemanlarına sahip bir dizi oluşturunuz.
let meyveler = ["elma", "armut", "muz", "cilek"];

//2-Dizi kaç elemanlıdır
console.log(meyveler);

//3-Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]);
console.log(meyveler[meyveler.length - 1]);

//4-Elma dizinin bir elemanı mıdır?
console.log(meyveler.includes("elma"));

//5-Kiraz meyvesini listenin sonuna ekleyelim
meyveler.push("kiraz");
console.log(meyveler);

//6-Dizinin son iki elemanını siliniz.
meyveler.splice(meyveler.length - 2, 2);
console.log(meyveler);

//7-

let ogr1 = ["Yigit", "Bilgi", 2010, [70, 60, 80]];
let ogr2 = ["Ada", "Bilgi", 2012, [80, 80, 90]];
let ogr3 = ["Ahmet", "Turan", 2009, [60, 60, 70]];

let ogrenciler = [ogr1, ogr2, ogr3];

let yas1 = new Date().getFullYear() - ogrenciler[0][2];
console.log(yas1);

let yas2 = new Date().getFullYear() - ogrenciler[1][2];
console.log(yas2);

let yas3 = new Date().getFullYear() - ogrenciler[2][2];
console.log(yas3);

let not1 =
  (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
console.log(not1);

let not2 =
  (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
console.log(not2);

let not3 =
  (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;
console.log(not3);
