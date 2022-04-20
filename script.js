/*
For a countdown timer its necesary:
-A deadline date.
-The current date.
-Its needed a substraction operation between both dates in terms of days, hours, minutes and seconds.

//1.Create a date wich will be assigned as the deadline.
 */

//1.
const deadline = new Date("1 Jan 2023");
/* The "new Date()" constructor allows a string as an argument and saves in "deadline" var the date given by the user.*/

function countdown(){
    let currentDate =  new Date();
    /*new Date is an instance's object of a given date by user.The "new" operator creates the instance as an object. If we miss the "new" operator, then Date() returns the current date as an string.*/

    var totalSecondsLeft = Math.floor((deadline - currentDate) / 1000);
    /*This linecode convert the total milisec. to all the seconds left until  deadline date'
    - "timeLeftNum = deadline - currentDate" returns the result in miliseconds. 
    - "timeLeftNum = new Date(deadline - currentDate)" returns a date in format utc*/

    var secondsLeft = Math.floor(totalSecondsLeft % 60);
    /*This linecode gives the module, it allow to countdown each 60 seconds*/

    var totalminutesLeft = Math.floor(totalSecondsLeft / 60);
    /*Here we convert all the seconds left until deadline to min*/
    var minutesLeft = Math.floor(totalminutesLeft % 60);
    /*Here we countdown min from 60 to 0.*/

    var totalHoursLeft = Math.floor(totalSecondsLeft / 3600);
    /*Here we convert all the seconds left until deadline to hours*/
    var hoursLeft = Math.floor(totalHoursLeft % 24);
    /*Here we use the modul to countdown from 24 to 0 hours.*/

    var daysLeft = Math.floor(totalSecondsLeft / (3600 * 24));
    
    
    document.getElementById("seconds").innerText = secondsLeft;
    document.getElementById("minutes").innerText = minutesLeft;
    document.getElementById("hours").innerText = hoursLeft;
    document.getElementById("days").innerText = daysLeft;
    
}

setInterval(countdown, 1000);
/*"setInterval" function repeats a function at every given time interval. First parameter is the function, second one is the interval the function will work.*/