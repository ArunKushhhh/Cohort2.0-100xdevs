//Create a terminal clock HH:MM:SS
const currentDate = new Date();

let yr = currentDate.getFullYear();
let mth = currentDate.getMonth() + 1;
let date = currentDate.getDate();

let hrs = currentDate.getHours();
let min = currentDate.getMinutes();
let sec = currentDate.getSeconds();

console.log(`${yr}:${mth}:${date}`);

console.log(`${hrs}:${min}:${sec}`);
