/*
For a countdown timer its necesary:
-A deadline date.
-The current date.
-Its needed a substraction operation between both dates in terms of days, hours, minutes and seconds.

//1.Create a date wich will be assigned as the deadline.
 */

//1.
const deadline = new Date("19 Feb 2023");
/* The "new Date()" constructor allows a string as an argument.*/

function countdown(){
    let currentDate =  new Date();
    /*new Date is an instance's object of a given date. "new" operator creates
    the instance as an object. If we miss the "new" operator, then Date() returns the current date as an string.*/

    var timeLeftNum = new Date(deadline - currentDate);
    document.getElementById("seconds").innerHTML = timeLeftNum.getSeconds();
    document.getElementById("minutes").innerHTML = timeLeftNum.getMinutes();
    document.getElementById("hours").innerHTML = timeLeftNum.getHours();
    document.getElementById("days").innerHTML = timeLeftNum.getUTCDay();
    console.log(currentDate.toLocaleTimeString());
}

setInterval(countdown, 1000);
/*"setInterval" function repeats a function at every given time interval. First parameter is the function, second one is the interval the function will work.*/