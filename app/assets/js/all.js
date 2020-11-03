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
  // slidesPerView: 4,
  breakpoints: {
    414: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var mySwiper = new Swiper('.hotelsDetails__swiper', {
  // autoplay: true,
  speed: 1000,
  spaceBetween: 5,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var mySwiper = new Swiper('.details__swiper', {
  // autoplay: true,
  speed: 1000,
  spaceBetween: 1,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(document).ready(function () {
  // details page modal
  $('#detailsModalBtn').click(function() {
    $('#detailsModal').removeClass('d-none')
    $('#detailsModal').addClass('fixed-bottom modalMenu--fromBottom')
  });
  $('#detailsModalCancle').click(function() {
    $('#detailsModal').addClass('d-none')
    $('#detailsModal').removeClass('fixed-bottom modalMenu--fromBottom')
  });

  // reserve page
  $('#reserveDropdownBtn').click(function() {
    $('#reserveDropdown').toggleClass('animated')
    $('.reserve__price').toggleClass('d-none')
    $('.reserve__dropdownBtn__icon').toggleClass('animated')
  });

  // modal
  if ($(window).width() > 767){
    $('#resultModal').removeClass('modal')
  }
  if ($(window).width() <= 767) { // mobile
    $('#resultModal').modal('hide')
    $('#resultModal').addClass('modal fade')
    // btn-modal
    $('#resultModalBtnn').click(function() {
      $('#resultModal').modal('show')
    });
    $('#filterDropdownBtn').click(function() {
      $('.result__filter__dropdown').toggleClass('d-flex shadow-sm')
    });
  }
  
  // date range picker
  var dates = new Date();
  var beginTimeStore = dates.getFullYear()+'-'+(dates.getMonth()+1)+'-'+dates.getDate(); // 獲取當前日期
  var endTimeStore = '';
  $('input[name="js-datePicker"]').daterangepicker({
    minDate: beginTimeStore, // 設置最小選擇日期
    autoApply: true, // 關掉確認欄位及選好日期立即關掉畫面
    // opens: "left",
    autoUpdateInput: false,
    locale: {
      format: 'YYYY-MM-DD',
      cancelLabel: 'Clear',
      daysOfWeek:["S","M","T","W","T","F","S"], // 也可以改成中文
      monthNames: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    }
  }, function(start, end, label) {
    beginTimeStore = start;
    endTimeStore = end;
    if(!this.startDate){
      this.element.val('');
    }else{
      this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
    }
  });
  // input欄位原始值
  $('input[name="js-datePicker"]').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  });

  $('input[name="js-datePicker"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });
});
