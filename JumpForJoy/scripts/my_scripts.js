$(document).ready(function () {
    hideCode();
    $("#main div").click(checkForCode);
    $("#main div").hover(function () {
        $(this).addClass("my_hover");
    }, function () {
        $(this).removeClass("my_hover")
    });
    function getRandom(num) {
        var my_num = Math.floor(Math.random() * num);
        return my_num;
    }
    function hideCode() {
        var numRand = getRandom(4);
        $("#main div").each(function (index, value) {
            if (numRand == index) {
                $(this).append("<span id='has_discount'></span>");
                return false;
            }
        });
    }
    function checkForCode() {
        var discount;
        if ($.contains(this, document.getElementById("has_discount"))) {
            var my_num = getRandom(100);
            discount = "<p>Your code is: CODE" + my_num + "</p>";
        } else {
            discount = "<p>Sorry, no discount this time!</p>";
        }
        $("#main div").each(function () {
            if ($.contains(this, document.getElementById("has_discount"))) {
                $(this).addClass("discount");
            } else {
                $(this).addClass("no_discount");
            }
        });
        $("#result").append(discount);
        $("#main div").unbind('click');
    }
});