var endDate = new Date(2025, 0, 0, 0, 0, 0, 0).getTime();
// year, month-1, day, hours, minutes, seconds, milliseconds
var year, month, days, hours, minutes, seconds;
var timer = document.getElementById('countdownMoisrexTimer');
setInterval(function () {
    var nowMir = new Date().getTime(),
        pased = (endDate - nowMir) / 1000;
    year = parseInt(pased / (60 * 60 * 24 * 30 * 12));
    pased = pased % (60 * 60 * 24 * 30 * 12);
    month = parseInt(pased / (60 * 60 * 24 * 30));
    pased = pased % (60 * 60 * 24 * 30);
    days = parseInt(pased / (60 * 60 * 24));
    pased = pased % (60 * 60 * 24);
    hours = parseInt(pased / (60 * 60));
    pased = pased % (60 * 60);
    minutes = parseInt(pased / 60);
    seconds = parseInt(pased % 60);
    // if (nowMir < endDate) timer.innerHTML = year + ' سال و ' + month + ' ماه و ' + days + ' روز و ' + hours + ' ساعت و ' + minutes + ' دقیقه و ' + seconds + ' ثانیه';
    if (nowMir < endDate) timer.innerHTML =''+ days + ':' + hours + ':' + minutes + ':' + seconds + '';
    else timer.innerHTML = 'زمان نخفیف به پایان رسیده است.';
}, 1000);


$('#owl1').owlCarousel({
    loop: false,
    rtl:true,
    margin: 1,
    nav:true,
    autoWidth: true,
    lazyLoad:true,
    
});
$('#owl2').owlCarousel({
    loop: true,
    rtl:true,
    margin: 1,
    nav:true,
    autoWidth: true,
    lazyLoad:true,
    autoplay:true,
    autoplayTimeout:5500

});
$('#owl3').owlCarousel({
    loop: true,
    rtl:true,
    margin: 1,
    nav:true,
    autoWidth: true,
    lazyLoad:true,
    autoplay:true,
    autoplayTimeout:7000

});