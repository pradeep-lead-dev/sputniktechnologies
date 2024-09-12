(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)
/**
   * Header fixed top on scroll
   */
let selectHeader = select('#header')
if (selectHeader) {
  let headerOffset = selectHeader.offsetTop
  let nextElement = selectHeader.nextElementSibling
  const headerFixed = () => {
    if ((headerOffset - window.scrollY) <= 0) {
      selectHeader.classList.add('fixed-top')
      nextElement.classList.add('scrolled-offset')
    } else {
      selectHeader.classList.remove('fixed-top')
      nextElement.classList.remove('scrolled-offset')
    }
  }
  window.addEventListener('load', headerFixed)
  onscroll(document, headerFixed)
}
on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
//   on('click', '.scrollto', function(e) {
//     if (select(this.hash)) {
//       e.preventDefault()

//       let navbar = select('#navbar')
//       if (navbar.classList.contains('navbar-mobile')) {
//         navbar.classList.remove('navbar-mobile')
//         let navbarToggle = select('.mobile-nav-toggle')
//         navbarToggle.classList.toggle('bi-list')
//         navbarToggle.classList.toggle('bi-x')
//       }
//       scrollto(this.hash)
//     }
//   }, true)
//   var bubbleLifeTime = 20;
// var noOfBubbles = 100;

// var wrapper = document.querySelector('.wrapper');
// var bubbles = [];

// init();

// function init() {
//     var bubble;
//     for(var i = 0; i < noOfBubbles; i++) {
//       bubble = createBubble();
//       wrapper.appendChild(bubble);
//     }
// }

// function createBubble() {
//   var circleContainer = document.createElement('div');
//   circleContainer.classList.add('circle_container');
//   circleContainer.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";

//   var circle = createCircle();
//   circleContainer.appendChild(circle);

//   return circleContainer;
// }

// function createCircle() {
//   var circle = document.createElement('div');
//   circle.classList.add('circle');
//   circle.style.animationDelay = (Math.random() * bubbleLifeTime) + 's';

//   var side = (5 + Math.floor(Math.random() * 5)) + 'px';
//   circle.style.width = side;
//   circle.style.height = side;

//   return circle;
// }








  
    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    $(document).ready(function () {
        // Get the current URL path
        var currentPath = window.location.pathname.split("/").pop();

        // If the path is empty (e.g., the homepage), set it to 'index.html'
        if (currentPath === "") {
            currentPath = "index.html";
        }

        // Loop through the nav links and add 'active' class to the link that matches the current page
        $('.navbar-nav .nav-link').each(function () {
            var link = $(this).attr('href');

            if (link === currentPath) {
                $(this).addClass('active');
            }
        });
    });

})(jQuery);

