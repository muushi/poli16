var day_text = " päivää ";
var hour_text = " tuntia ";
var minute_text = " minuuttia ";
var seconds_text = " sekuntia ";


function localize(lang) {
  var opts = {pathPrefix: "static/localization", language: lang};
  /*switch(lang){
    case "fi":
      day_text = " päivää ";
      hour_text = " tuntia ";
      minute_text = " minuuttia ";
      seconds_text = " sekuntia ";
      $(".navbar-nav li > a").css("font-size", "300%");
      break;
    case "en":
      day_text = " days ";
      hour_text = " hours ";
      minute_text = " minutes ";
      seconds_text = " seconds ";
      $(".navbar-nav li > a").css("font-size", "200%");
      break;
    default:
      day_text = " dagar ";
      hour_text = " timmar ";
      minute_text = " minuter ";
      seconds_text = " sekunder ";
      $(".navbar-nav li > a").css("font-size", "300%");
      break;
  }*/
  $("[data-localize]").localize("site", opts);
};

$(document).ready(function() {
  var opts = {pathPrefix: "static/localization", skipLanguage: /^en/};
  $("[data-localize]").localize("site", opts);
/*var end = new Date('11/9/2016 5:00 PM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {
    clearInterval(timer);
    $('#countdown').text('');

    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);
  $('#countdown').text(days + day_text + hours + hour_text + minutes + minute_text + seconds + seconds_text);
}

timer = setInterval(showRemaining, 1000);*/
});
