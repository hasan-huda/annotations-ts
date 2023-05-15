const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const carMakers2: string[] = []; //declare when empty array

const dates = [new Date(), new Date()];

const carsByMake: string[][] =[];

//Help with inference when extracting values

const car1 = carMakers[0];

//prevent incompatible values
//carMakers.push(100);

//Flexible types
const importantDates = [new Date(), '2030-10-10'];
const importantDates2: (Date | string)[] = [];