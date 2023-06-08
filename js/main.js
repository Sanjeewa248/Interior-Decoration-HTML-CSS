(function ($) {
	"use strict";

	// Spinner
	var spinner = function () {
		setTimeout(function () {
			if ($("#spinner").length > 0) {
				$("#spinner").removeClass("show");
			}
		}, 1);
	};
	spinner();

	// Initiate the wowjs
	new WOW().init();

	// Sticky Navbar
	$(window).scroll(function () {
		if ($(this).scrollTop() > 45) {
			$(".nav-bar").addClass("sticky-top");
		} else {
			$(".nav-bar").removeClass("sticky-top");
		}
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$(".back-to-top").fadeIn("slow");
		} else {
			$(".back-to-top").fadeOut("slow");
		}
	});
	$(".back-to-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
		return false;
	});

	// Header carousel
	$(".header-carousel").owlCarousel({
		autoplay: true,
		smartSpeed: 1500,
		items: 1,
		dots: true,
		loop: true,
		nav: true,
		navText: [
			'<i class="bi bi-chevron-left"></i>',
			'<i class="bi bi-chevron-right"></i>',
		],
	});

	// Testimonials carousel
	$(".testimonial-carousel").owlCarousel({
		autoplay: true,
		smartSpeed: 1000,
		margin: 24,
		dots: false,
		loop: true,
		nav: true,
		navText: [
			'<i class="bi bi-arrow-left"></i>',
			'<i class="bi bi-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			992: {
				items: 2,
			},
		},
	});
})(jQuery);

// Smooth scroll to the About section when the About button is clicked
document
	.getElementById("about-link")
	.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent default link behavior

		// Scroll to the About section smoothly
		document.getElementById("about-section").scrollIntoView({
			behavior: "smooth",
		});
	});

// Highlight the About button when the user scrolls to the About section
window.addEventListener("scroll", function () {
	var aboutSection = document.getElementById("about-section");
	var aboutLink = document.getElementById("about-link");

	var rect = aboutSection.getBoundingClientRect();
	if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
		// The About section is in the viewport
		aboutLink.classList.add("active");
	} else {
		// The About section is not in the viewport
		aboutLink.classList.remove("active");
	}
});

function scrollToSection(sectionId) {
	document.querySelector(sectionId).scrollIntoView({
		behavior: "smooth",
	});
}
