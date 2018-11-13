
var date = new Date(2018, 10, 29, 00, 30);
var now = new Date();
var diff = date.getTime() - now.getTime();

var clock = $('.clock').FlipClock(Math.abs(diff/1000),{
    clockFace: 'DailyCounter',
    countdown: true
});  

$('.carousel').carousel()
