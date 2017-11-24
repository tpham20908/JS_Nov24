/*
Create the following functions:
1. showDate() function returns the current date the format mm/dd/yyyy
2. showTme() function returns the current time in the format hh:mm:ss am/pm
3. calculateDays() function returns the number of days from current date and next year's January
*/

/** create showDate() function
* returns the current date the format mm/dd/yyyy
* @param {any} dateObj
*/
function showDate(dateObj) {
	// extract date, month and year from dateObj
	var theDate = dateObj.getDate();
	var theMonth = dateObj.getMonth() + 1;
	var theYear = dateObj.getFullYear();

	var result = theMonth + "/" + theDate + "/" + theYear;
	return result;
}

/**
 * showTme() function returns the current time in the format hh:mm:ss am/pm
 * @param {any} dateObj
 */
function showTime(dateObj) {
    // extract hour, minutes and seconds from the dateObj
    var thisHour = dateObj.getHours();
    var thisMinute = dateObj.getMinutes();
    var thisSecond = dateObj.getSeconds();

    // add leading zero to thisMinute, thisSecond if they are less than 10
    // thisHour = (thisHour < 10) ? ("0" + thisHour) : ("" + thisHour);
    thisMinute = (thisMinute < 10) ? ("0" + thisMinute) : ("" + thisMinute);
    thisSecond = (thisSecond < 10) ? ("0" + thisSecond) : ("" + thisSecond);
    

    // convert thisHour from 24-hour format to 12-format by 
    // if thisHour < 12 set the variable ampm to am, otherwise to pm
    var ampm = (thisHour < 12) ? "am" : "pm";
    // if thisHour greater than 12
    thisHour = (thisHour > 12) ? (thisHour - 12) : thisHour;
    // if thisHour equals zero, then change it to 12
    thisHour = (thisHour == 0) ? 12 : thisHour;

    return thisHour + ":" + thisMinute + ":" + thisSecond + " " + ampm;
}   // end function showTime

/**
 * calculateDays() function returns the number of days from current date and next year's January
 * @param {any} currentDate
 */
function calculateDays(currentDate) {
    // create a date object for January 1st next year
    var nextYear = currentDate.getFullYear() + 1;

    // create a variable for the Jan 1st
    var newYear = new Date();

    // set newYear to nextYear
    newYear.setFullYear(nextYear);
    newYear.setMonth(0);
    newYear.setDate(1);
    newYear.setHours(0);
    newYear.setMinutes(0);
    newYear.setSeconds(0);

    // calculate the difference between current till Jan 1st next year
    var numberOfDays = (newYear - currentDate) / (1000 * 60 * 60 * 24);

    return numberOfDays;

}   // end function calculateDays