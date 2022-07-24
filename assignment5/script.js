console.log("--------------");
console.log("-------A------");
console.log("--------------");
const lucasM = 78;
const lucasW = 1.69;
let lucasBMI = lucasM / lucasW ** 2;

const petterM = 92;
const petterW = 1.95;
let petterBMI = petterM / petterW ** 2;

let lucasHigherBMI = lucasBMI > petterBMI;

let summary = `The BMI of Petter is ${petterBMI}, The BMI of Lucas is ${lucasBMI}, Petter's BMI is higher than Lucas's BMI that is ${lucasHigherBMI}`;
console.log(summary);

console.log("--------------");
console.log("-------B------");
console.log("--------------");

const fTemp = 76;
const cTemp = 23;
let cToF = (cTemp * 9) / 5 + 32;
let fToC = ((fTemp - 32) * 5) / 9;

console.log(`${fTemp}°F is ${fToC}°C`);
console.log(`${cTemp}°C is ${cToF}°F`);

console.log("--------------");
console.log("-------C------");
console.log("--------------");

if (petterBMI < lucasBMI) {
  summary = `Lucas' BMI ${lucasBMI} is higher than Peter's ${petterBMI}`;
  console.log(summary);
} else {
  summary = `Peter's BMI ${petterBMI} is higher than Lucas' ${lucasBMI}`;
  console.log(summary);
}

console.log("--------------");
console.log("-------C------");
console.log("--------------");

let covertcTf = (cTemp) => {
  let celToF = (cTemp * 9) / 5 + 32;
  let summary = `${cTemp}°C is ${celToF}°F`;
  return summary;
};
console.log(covertcTf(100));
console.log(covertcTf(0));
console.log(covertcTf(10));
console.log(" ");
console.log("F to C");

const convertfTc = (fTemp) => {
  let fahrenToC = ((fTemp - 32) * 5) / 9;
  let summary = `${fTemp}°F is ${fahrenToC}°C`;
  return summary;
};
console.log(convertfTc(32));
console.log(convertfTc(10));
console.log(convertfTc(102));
