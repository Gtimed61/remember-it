//moment for day and date
var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(today);

$(document).ready(function () {

//save button
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    
    //save locally
    localStorage.setItem(time, text);
})

function timing() {
    var timeNow = moment().hour();


    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");

        } 
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } 
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

//get item from local storage
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12am .description").val(localStorage.getItem("12am"));
$("#13am .description").val(localStorage.getItem("13am"));
$("#14am .description").val(localStorage.getItem("14am"));
$("#15am .description").val(localStorage.getItem("15am"));
$("#16am .description").val(localStorage.getItem("16am"));

timing();
})







