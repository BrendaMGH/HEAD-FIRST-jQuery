$(document).ready(function () {
  $("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
  });

  $("#type_select").buttonset();

  $("#slide_dist").slider({
    value: 0,
    step: 10,
    max: 500,
    min: 0,
    slide: function (event, ui) {
      $("#distance").val(ui.value);
    },
  });
  $("#slide_height").slider({
    value: 0,
    step: 1,
    max: 20,
    min: 0,
    slide: function (event, ui) {
      $("#height").val(ui.value);
    },
  });
  $("#slide_weight").slider({
    value: 0,
    step: 1,
    max: 5000,
    min: 10,
    slide: function (event, ui) {
      $("#weight").val(ui.value);
    },
  });
  $("#slide_lat").slider({
    value: 0,
    step: 0.00001,
    max: 90,
    min: -90,
    slide: function (event, ui) {
      $("#latitud").val(ui.value);
    },
  });
  $("#slide_long").slider({
    value: 0,
    step: 0.00001,
    max: 180,
    min: -180,
    slide: function (event, ui) {
      $("#longitud").val(ui.value);
    },
  });

  $("#red, #green, #blue").slider({
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });

  function refreshSwatch() {
    var red = $("#red").slider("value");
    var green = $("#green").slider("value");
    var blue = $("#blue").slider("value");
    var my_rgb = "rgb(" + red + "," + green + "," + blue + ")";
    $("div div#swatch").css("background-color", my_rgb);
    $("#red_val").val(red);
    $("#blue_val").val(blue);
    $("#green_val").val(green);
    $("#color_val").val(my_rgb);
  }

  $("button:submit").button();

  ////////////////////////////////////Server comunication////////////////////////////////////
  $('button:submit').click(function() {
		var data = $("#form :input").serializeArray();
		$.post($("#form").attr('action'), data, function(json){
			
			if (json.status == "fail") {
				alert(json.message);
			}
			if (json.status == "success") {
				alert(json.message);
				clearInputs();
			}
		}, "json");

  });
  
  $("button:submit").submit(function () {
    return false;
  });

  //Clear forms inputs
  function clearInputs() {
    $("#form :input").each(function () {
      $(this).val("");
    });
  }
});
