// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var currentTime = moment().format("MMMM Do YYYY")
var containerEl = $(".container")
console.log("hello!");
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
function showColors() {
    var hour = moment().hours();
    $(".time-block").each(function () {
        var rowTime = parseInt($(this).attr("id"));
        if (rowTime < hour) {
            $(this).addClass("past");
        } else if (rowTime === hour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};
showColors();

// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
