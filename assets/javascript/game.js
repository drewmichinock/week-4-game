$(document).ready(function() {

    // after webpage has loaded
    function randomNumber(min, max) {

        // generate random number
        return Math.floor(Math.random() * (max - min)) + min;

    }

    // between 19 and 120 and display in Random Number
    $("#random-number").html(randomNumber(19, 120));

    // random number for gems
    function randomValue(min, max) {

        // both lowest and highest number in range can be selected
        min = Math.ceil(min);

        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    $("#gem-ruby").attr("value", randomValue(1, 12))
    $("#gem-amber").attr("value", randomValue(1, 12))
    $("#gem-emerald").attr("value", randomValue(1, 12))
    $("#gem-sapphire").attr("value", randomValue(1, 12))


});