$(document).ready(function () {
    $("#part2").hide();
    $("#next").click(function () {
        $("#part1").hide();
        $("#part2").show();
    })
});