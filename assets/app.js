// header
$( document ).ready(function() {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop()
        if(scroll > 50){
            $('#header nav').addClass('header-scrolled');
        }else{
            $('#header nav').removeClass('header-scrolled')
        }
    });
})

$('.menu-icon').click(function(){
    $(this).toggleClass('active')
    $('.menu-list').toggleClass('display-menu');

})

// banner slider
var swiper = new Swiper(".bannerSwiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


// menu
$(document).ready(function() {
    // Set the default filter to "all"
    var filter = "all";
  
    // Handle clicks on the filter buttons
    $("[data-filter]").on("click", function() {
      filter = $(this).attr("data-filter");
  
      // Remove the "active" class from all filter buttons
      $("[data-filter]").removeClass("active");
  
      // Add the "active" class to the selected filter button
      $(this).addClass("active");
  
      // Filter the items
      filterItems();
    });
  
    // Filter the items on page load
    filterItems();
  
    function filterItems() {
      // Show all items if the filter is set to "all"
      if (filter === "all") {
        $(".filter-item").show();
      } else {
        // Otherwise, hide all items and show only the matching ones
        $(".filter-item").hide();
        $(".filter-item[data-filter='" + filter + "']").show();
      }
    }
  });

//date and time picker
$(document).ready(function() {
    $('#datepicker').datepicker({
      format: 'mm/dd/yyyy',
      autoclose: true,
      orientation: "auto"
    });
  });
$(document).ready(function() {
    $('#timepicker').timepicker({
        minuteStep: 1,
        showSeconds: false,
        showMeridian: true
      });
  });

// testimonial slider
var swiper = new Swiper(".testmonialSwiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
});