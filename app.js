$(document).ready(function() {
  var result = "0";
  var chainPlaceHolder = "";
  var AC = "ac";
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var dot = ".";
  var operators = ["/", "*", "-", "+"];
  var finished = false;
  var usedDot = false;

  $("button").on("click", function() {
    if (this.id === AC) {
      result = 0;
      $("#result").html(result);
      chainPlaceHolder = "";
    } else if (numbers.indexOf(this.id) > -1) {
      if (finished) {
        chainPlaceHolder = "";
        finished = false;
      }
      chainPlaceHolder += this.id;
      if (chainPlaceHolder.split("").length > 14) {
        $("#result").html("Max Display Size Reached");
      } else {
        $("#result").html(chainPlaceHolder);
      }
    } else if (dot.indexOf(this.id) > -1) {
      if (chainPlaceHolder.slice(-1) !== "." && usedDot === false) {
        chainPlaceHolder += this.id;
        usedDot = true;
      }

      $("#result").html(chainPlaceHolder);
    } else if (operators.indexOf(this.id) > -1) {
      if (!isNaN(parseInt(chainPlaceHolder.slice(-1)))) {
        chainPlaceHolder += this.id;
        usedDot = false;
        finished = false;
      }

      $("#result").html(chainPlaceHolder);
    } else if (this.id === "equal") {
      result = eval(chainPlaceHolder);
      result = result.toString().length > 13 ? result.toFixed(5) : result;
      chainPlaceHolder = "" + result;

      $("#result").html(result);

      finished = true;
    }
  });
});
