// function hi(msg) {    //msg message yani içine istediğimiz mesaji yazabiliriz.
//   console.log(msg);
// }

// hi("mirzzzzzzzz");
// hi("miaaaaaaaaaaaaaauuuu");
// console.log("hi");

function ageCalculate(birthYear) {
  console.log(new Date().getFullYear() - birthYear);
}

ageMirz = ageCalculate(1987);
ageSude = ageCalculate(1972);

console.log(ageMirz, ageSude);

function retiredYear(birthYear, name) {
  let age = ageCalculate(birthYear);
  let remainYear = 65 - age;

  if (remainYear > 0) {
    console.log(`${name}emekli olmanıza ${remainYear} yıl kaldı`);
  } else {
    console.log("zaten emekli oldunuz.");
  }
}

retiredYear(1980, "Mirzvlien");
