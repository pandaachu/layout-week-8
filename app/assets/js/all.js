// Swiper
var mySwiper = new Swiper('.heroBanner__swiper', {
  autoplay: true,
  speed: 1000,
  spaceBetween: 100,
  loop: true,
   // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var mySwiper = new Swiper('.choices__swiper', {
  autoplay: true,
  speed: 1000,
  // spaceBetween: 100,
  loop: true,
   // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 4,
  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
  // }
});


// date range picker
$(document).ready(function(){
  $('input[name="js-datePicker"]').daterangepicker({
    autoApply: true,
    // opens: "left",
    autoUpdateInput: false,
    locale: {
      cancelLabel: 'Clear',
      daysOfWeek:["S","M","T","W","T","F","S"], // 也可以改成中文
      monthNames: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    },
  });
  $('input[name="js-datePicker"]').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  });

  $('input[name="js-datePicker"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });
});

