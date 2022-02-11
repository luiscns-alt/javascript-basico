console.log(new Date());

var myDate = new Date("2022-02-11");
console.log(myDate);

var myDateN = new Date(2022, 01, 11);
console.log(myDateN);

console.log(myDate.getMilliseconds());
console.log(myDate.getSeconds());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
console.log(myDate.getDate());
console.log(myDate.getMonth());
// console.log(myDate.getYears());
console.log(myDate.getFullYear());
console.log(myDate.getDay());

console.log(myDate.setMonth(8));
console.log("===========================");
console.log((a = myDate.getTime()));
console.log(new Date(a));
console.log(myDate.toJSON());
