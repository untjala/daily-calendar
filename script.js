//Function to display colors based on the hour of the day, tracked through Moment.
function showColors() {
    //Moment pulls the users current hour.
    var hour = moment().hours();
    $(".time-block").each(function () {
        //Color changes based on the parameters set in the if/else statements.
        var rowTime = parseInt($(this).attr("id"));
        if (rowTime < hour) {
            $(this).addClass("past");
            //Based on set parameters, colors (set through css) will change.
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
//Calls the function.
showColors();

//Save button click event 
$(".saveBtn").on("click", function () {
    //Variables to set the hour and user input in local storage
    var input = $(this).siblings(".event").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, input);
}) 
//Stores text and time in local storage. Pulls from event class inside the textarea html
$("#9 .event").val(localStorage.getItem("9"));
$("#10 .event").val(localStorage.getItem("10"));
$("#11.event").val(localStorage.getItem("11"));
$("#12 .event").val(localStorage.getItem("12"));
$("#13 .event").val(localStorage.getItem("13"));
$("#14 .event").val(localStorage.getItem("14"));
$("#15 .event").val(localStorage.getItem("15"));
$("#16 .event").val(localStorage.getItem("16"));
$("#17 .event").val(localStorage.getItem("17"));
$("#18 .event").val(localStorage.getItem("18"));