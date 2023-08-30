let numbers = [1, 2, 5, 44, 48, 22, 12, 10, 4, 8, 7, 15, 3, 25];

// //1-Sayilar listesindeki her bir elemanın karesini yazdırınız.
for(let number of numbers){
  console.log(number * number)
}

//2-Sayilar listesindeki hangi sayılar 5'in katıdır.
for(let i = 0; i<numbers.length; i++){
  if(numbers[i]%5 == 0){
    console.log(numbers[i]);
  }
}

//3-Sayilar listesindeki çift sayiların toplamı

let total = 0;
for (let i in numbers) {
  if (numbers[i] % 2 == 0) {
    total += numbers[i];
  }
}
console.log(total);

let products = ["iphone12", "samsung s22", "iphone 13", "samsung s23"];

//4-ürünler listesindeki tüm ürünleri büyük harf ile yazdırınız.
for(let product of products){
  console.log(product.toUpperCase());
}

//5-urunler listesinde samsung gecen kaç ürün vardr
let piece = 0;
for (let product of products) {
  if(product.includes("samsung")){
    piece++;
  }
}
console.log(piece)

let students = [
  { first_name: "yiğit", last_name: "bilgi", notes: [60, 70, 60] },
  { first_name: "ada", last_name: "bilgi", notes: [80, 70, 80] },
  { first_name: "cinar", last_name: "turan", notes: [10, 20, 60] },
];

// // ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

for (let student of students) {
  let note_total = 0;
  let average = 0;
  let piece = 0;

  for (let note of student.notes) {
    note_total += note;
    piece++;
  }
  average = note_total / piece;

  console.log(
    `${student.first_name} ${student.last_name} isimli ogrencinin not ortlamaası : ${average}.`
  );

  if (average > 50) {
    console.log("access!");
  } else {
    console.log("fail!");
  }
}

// tüm öğrencilerin not ortalaması kaçtır?
let ogrenci_ortalamalar = [];
for(let ogrenci of ogrenciler) {

  let not_toplam = 0;
  let ortalama = 0;
  let adet = 0;
  for(let not of ogrenci.notlar) {
      not_toplam += not;
      adet++;
  }
  ortalama = not_toplam / adet;
  ogrenci_ortalamalar.push(ortalama);
}

let not_toplam = 0;
for(ogr_ortalama of ogrenci_ortalamalar) {
  not_toplam += ogr_ortalama;
}

console.log("sinif ortalamasi: ", not_toplam / ogrenci_ortalamalar.length);
