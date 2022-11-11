let day = document.getElementById("day");

let currentTime = new Date();
let currentDate = currentTime.toString();

let result = currentDate.slice(0,15)

day.innerText = result;