/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.experience-card, .education-card, .certification-card, .skill-icon');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }

    // Add typing effect to role title
    function typeEffect() {
        const text = document.querySelector('.typing-effect');
        if (text) {
            const content = text.textContent;
            text.textContent = '';
            let i = 0;
            
            function type() {
                if (i < content.length) {
                    text.textContent += content.charAt(i);
                    i++;
                    setTimeout(type, 100);
                }
            }
            
            setTimeout(type, 1000);
        }
    }

    // Add parallax effect to background
    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();
        $('.resume-section').each(function(index) {
            const speed = 0.5;
            const offset = $(this).offset().top;
            const yPos = -(scrolled - offset) * speed;
            $(this).css('transform', 'translateY(' + yPos + 'px)');
        });
    });

    // Add smooth hover effects for skill icons
    $('.skill-icon').hover(
        function() {
            $(this).find('i, img').addClass('animate-bounce');
        },
        function() {
            $(this).find('i, img').removeClass('animate-bounce');
        }
    );

    // Initialize animations when DOM is ready
    $(document).ready(function() {
        animateOnScroll();
        typeEffect();
        
        // Add stagger animation to experience cards
        $('.experience-card').each(function(index) {
            $(this).css('animation-delay', (index * 0.2) + 's');
        });
    });

    // Add floating animation to profile image
    setInterval(function() {
        $('.profile-image').css('animation', 'float 3s ease-in-out infinite');
    }, 100);

})(jQuery); // End of use strict

// Add floating keyframe animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    .animate-bounce {
        animation: bounce 0.5s ease;
    }
    
    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);
