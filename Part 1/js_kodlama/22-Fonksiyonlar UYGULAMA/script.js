//1-Kendisine gönderilen kelimeyi belirtilen kez ekranda yaz .
function kelimeYazdir(kelime, adet) {
  for (let i = 0; i < adet; i++) console.log(kelime);
}

kelimeYazdir("merhaba", 2);

//2-Dikdörtgenin alan ve çevresini hesaplayan fonksiyon

function alanCevreHesapla(kisa, uzun) {
  let alan = kisa * uzun;
  let cevre = (kisa + uzun) * 2;

  return `alan:${alan} <-> cevre:${cevre} `;
}

let sonuc = alanCevreHesapla(7, 10);
console.log(sonuc);

//3-Yazı tura uygulamasını fonksiyon kullanarak.

function coin() {
  let random = Math.random();

  if (random < 0.5) {
    console.log("yazi");
  } else {
    console.log("tura");
  }
  console.log(random);
}

coin();

//4-Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yaz.

function tamBolen(number) {
  let numbers = [];
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      numbers.push(i);
    }
  }
  return numbers;
}

console.log(tamBolen(10));
console.log(tamBolen(35));
console.log(tamBolen(14));

//5-Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function total() {
  let answer = 0;

  for (let i = 0; i < arguments.length; i++) {
    answer += arguments[i];
  }

  return answer;
}

console.log(total(2, 3, 4, 5, 6));
