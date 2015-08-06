// Related Question: http://stackoverflow.com/questions/31826293/sum-data-based-on-time-for-weekly-monthly-yearly-using-javascript
//
// I have a JSON js object which I am getting using AJAX. 
// the problem is I don't have much control on the backend, 
// so the data is coming in simple JS object.
//
// I have a JSON file as follows <insert horribly formatted json>
// the file_ts has different timestamp. my problem is that I 
// have to consolidate this data.
//
// If user select 1 Day then I have to get sum of all data hour wise. 
// If there are 4 values between 2 and 3 hr then I have to sum that data hour wise.
// then if weekly then weekly. I am trying to write a nodejs server with 
// express and mysql but its also not working from there.

//
// Test data
var test = [{  
    value: 23,
    file_date: "Wed Jan 01 2014 05:34:53 GMT+0530 (IST)"
  },{  
    value: 23,
    file_date: "Wed Jan 01 2014 09:34:53 GMT+0530 (IST)"
  },{  
    value: 23,
    file_date: "Wed Jan 01 2014 02:34:53 GMT+0530 (IST)"
  },{  
    value: 23,
    file_date: "Thu Jan 02 2014 06:34:53 GMT+0530 (IST)"
  },{  
    value: 23,
    file_date: "Thu Jan 02 2014 09:34:53 GMT+0530 (IST)"
  },{  
    value: 23,
    file_date: "Thu Jan 02 2014 04:34:53 GMT+0530 (IST)"
  }
];

// Start of Daily
var userInput = 1; // This is the date they typed in

// This function returns all records for a specific day (integer)
var getAllDayData = function(day){
  var response = [];

  for(var i=0;i<test.length;i++){
    var fileDate = new Date(test[i].file_date);
    if(fileDate.getDate() === day){ // getDate gets you day of month
      response.push(fileDate);
    }
  }

  return response;
};

var getTotalHoursFromDates = function(data){
  var totalHours = 0;
  for(var i=0;i<data.length;i++){
    totalHours += data[i].getHours();
  }
  return totalHours;
};

var getTotalHoursFromInput = function(day){
  var dayData = getAllDayData(day);
  var response = getTotalHoursFromDates(dayData);

  return response;
};

var dayTotal = getTotalHoursFromInput(userInput);
console.log(dayTotal);


// Start of Weekly
var week = [31,1,2,3,4,5,6]; // This is the days of the selected full week

var getAllWeekData = function(days){
  var response = [];

  for(var i=0;i<days.length;i++){
    var day = getAllDayData(days[i]);
    if(day[0] != null) { // Checks for undefined or null
      for(var y=0;y<day.length;y++){
        response.push(day[i]);
      }
    }
  }

  return response;
};

var getAllWeekDays = function(selectedDays){
  var allDays = getAllWeekData(selectedDays);
  var response = getTotalHoursFromDates(allDays);

  return response;
};

var weekTotal = getAllWeekDays(week);
console.log(weekTotal);

