let count = 0;

$("#btn1").click (function () {
    count++
    $('h2').text(count);
});

$("#btn2").click (function () {
    count--
    $('h2').text(count);
});