let sayi = 20;
if (sayi > 10 && sayi < 50) {
  console.log("sayi 10-50 arasindadir.");
} else {
  console.log("sayi 10-50 arasinda degil.");
}

if (sayi > 0) {
  if (sayi % 2 == 1) {
    console.log("sayi pozitif ve tek bir sayidir.");
  }
} else {
  console.log("sayi pozitif ve tek bir sayi degildir.");
}

let x = 1;
let y = 2;
let z = 3;

if (x > y && x > z) {
  if (y > z) {
    console.log("x>y>z");
  } else {
    console.log("x>z>y");
  }
} else if (y > z && y > x) {
  if (x > z) {
    console.log("y>x>z");
  } else {
    console.log("y>z>x");
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log("z>x>y");
  } else {
    console.log("z>y>x");
  }
}

let m1 = 50;
let m2 = 30;
let fnl = 70;

let ort = (m1 * 0.3 + m2 * 0.3 + fnl * 0.4) / 3;

if (ort > 50 || fnl > 70) {
  console.log("Gecti.");
} else {
  console.log("Kaldi.");
}
