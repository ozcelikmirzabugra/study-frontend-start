let simdi = new Date(); // simdiki tarih - saat bilgisi

//Get Methods
sonuc = simdi;
sonuc = simdi.getDate();
sonuc = simdi.getDay();
sonuc = simdi.getFullYear();

//Set Methods             set method'da degistirir, get method'da yazdirir.
simdi.setFullYear(2025);

let birthDate = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - birthDate.getFullYear();


console.log(birthDate);
console.log(sonuc);
console.log(typeof sonuc);
