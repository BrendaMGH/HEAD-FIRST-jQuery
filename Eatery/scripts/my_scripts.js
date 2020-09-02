$(document).ready(function () {
    var v = false;
    var $fish = [];
    var $meat = [];
    $("button#vegOn").click(function () {
        if (v == false) {
            $fish = $(".fish").parent().parent().detach();
            $(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
            $(".meat").after("<li class='tofu'><em>Tofu</em></li>");
            $meat = $(".meat").detach();
            $(".portobello").parent().parent().addClass("veg_leaf");
            $(".tofu").parent().parent().addClass("veg_leaf");
            v = true;
        }
    });
    $("button#restoreMe").click(function () {
        if (v == true) {
            $(".portobello").parent().parent().removeClass("veg_leaf");
            $(".tofu").parent().parent().removeClass("veg_leaf");
            $(".menu_entrees li").first().before($fish);
            $(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");
            $(".tofu").each(function (index) {
                $(this).after($meat[index]);
            });
            $(".tofu").remove();
            v = false;
        }
    });
});