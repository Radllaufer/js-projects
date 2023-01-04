// Todays weather forecast in several unit's
let Kelvin = 293;
let Celsius = Kelvin - 273;
let Fahrenheit = Math.floor(Celsius * (9 / 5) + 32);
let Newton = Math.floor(Celsius * (33 / 100));

console.log("Today's weather forecast by dr. W. Kelvin");
console.log(`The temperature is ${Kelvin} degrees Kelvin`);
console.log(`Or ${Celsius} degrees Celsius for the Europeans`);
console.log(`That's ${Fahrenheit} degrees Fahrenheit for y'all 'Mericans out there`);
console.log(`And ${Newton} degrees Newton for the scientists`);