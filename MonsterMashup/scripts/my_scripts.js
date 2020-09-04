$(document).ready(function () {
    var clix = [0, 0, 0, 0];
    var int1, int2, int3;

    goLightning();
    window.onblur = stopLightning;
    window.onfocus = goLightning;

    $("#head").click(function () {
        moveMe(0, this);
    });
    $("#eyes").click(function () {
        moveMe(1, this);
    });
    $("#nose").click(function () {
        moveMe(2, this);
    });
    $("#mouth").click(function () {
        moveMe(3, this);
    });

    $("#btnRandom").click(randomize);

    $("#btnReset").click(reset);

    // Functions
    function getRandom(num) {
        var my_random_num = Math.floor(Math.random() * num);
        return my_random_num;
    }
    function randomize() {
        var target_position;
        var move_to; 
        $(".face").each(function (index) {
            target_position = getRandom(10);
            clix[index] = target_position;
            move_to = target_position * 367;
            $(this).animate({ left: "-" + move_to + "px" }, 500);
        });
    };

    function reset() {
        $(".face").each(function (index) {
            clix[index] = 0;
            $(this).animate({left: "0px"},500);
        })
    }

    function moveMe(index, element) {
        if (clix[index] < 9) {
            clix[index]++;
            $(element).animate({ left: "-=367px" }, 500);
        } else {
            clix[index] = 0;
            $(element).animate({ left: "0px" }, 500);
        }
    }

    function goLightning() {
        int1 = setInterval(lightning_one, 4000);
        int2 = setInterval(lightning_two, 5000);
        int3 = setInterval(lightning_three, 7000);
    }
    function stopLightning() {
        window.clearInterval(int1);
        window.clearInterval(int2);
        window.clearInterval(int3);
    }

    function lightning_one(t) {
        $("#lightning1").fadeIn(250).fadeOut(250);
    };
    function lightning_two(t) {
        $("#lightning2").fadeIn(250).fadeOut(250);
    };
    function lightning_three(t) {
        $("#lightning3").fadeIn(250).fadeOut(250);
    };
});

