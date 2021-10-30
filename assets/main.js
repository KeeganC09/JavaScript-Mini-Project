$(document).ready(function () {
    $("#part2").hide();
    $("#next").click(function () {
        $("#part1").hide();
        $("#part2").show();
    })
    $("#previous").click(function () {
        $("#part2").hide();
        $("#part1").show();
    })
});