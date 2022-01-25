// This is showing the current date, displayed at the top
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// Timeblock function - Colored time blocks with the number of hours
function timeBlock() {
    var hour = moment().hours();
//Time block loop
    $(".time-block").each(function() {
        //This checks for current, future, or past hours/times
        var currentHour = parseInt($(this).attr("id"));
        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// Save button
var saveBtn = $(".saveBtn");

// Save button, when clicked
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var data = $(this).siblings(".data").val();
// Save to local storage
    localStorage.setItem(time, data);
});

// Save event data to local storage, even when the page is refreshed
function saveInput() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currData = localStorage.getItem(currentHour);

        if(currData !== null) {
            $(this).siblings(".data").val(currData);
        }
    });
}
//Call to the functions
timeBlock();
saveInput();
