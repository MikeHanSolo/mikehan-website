$(document).ready(function () {
  // Vars
  var $mainNav = $("#main-nav");
  var $mainNavLinks = $("#main-nav > ul > li > a");
  var $sections = $($("section").get().reverse());
  // Dictionary of section ids and corresponding navbar links
  var sectionsToNavLinksMap = {};

  $sections.each(function () {
    var id = $(this).attr("id");
    sectionsToNavLinksMap[id] = $mainNavLinks.filter("[href=\\#" + id + "]");
  });

  var $contactForm = $("#contact-form");
  var $contactSubmitBtn = $("#btn-contact-submit");

  function highlightNavLink($sectionList, scrollPosition, navHeight) {
    $sectionList.each(function () {
      // Get current section
      var $currSection = $(this);
      // Top position of current section
      var sectionTop = $currSection.offset().top;

      // Check if user has scrolled past top of the section
      if (scrollPosition >= sectionTop - navHeight) {
        var sectionId = $currSection.attr("id");
        // Get nav link for the current section
        var $navLink = sectionsToNavLinksMap[sectionId];
        // console.log(sectionsToNavLinksMap[sectionId]);

        if (!$navLink.hasClass("current")) {
          // Remove current class from all other nav links
          $mainNavLinks.removeClass("current");
          $navLink.addClass("current");
        }
        return false;
      }
    });
  }

  $(document).scroll(function () {
    // Vertical position of scrollbar
    var scrollPos = $(window).scrollTop();

    // Toggle solid navbar on scroll
    $mainNav.toggleClass("scrolled", scrollPos > $mainNav.height());

    // Highlight current section in navbar
    highlightNavLink($sections, scrollPos, $mainNav.outerHeight());
  });

  // Smooth scrolling to each anchor
  $('a[href^="#"]').click(function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop:
          $($(this).attr("href")).offset().top - $mainNav.outerHeight(),
      },
      800
    );
  });

  // Trigger contact form PHP on button submit
  $contactForm.submit(function (e) {
    e.preventDefault();
    var postData = $contactForm.serialize();
    $contactSubmitBtn.val("Sending...").prop("disabled", true);

    $.post("private/contactform.php", postData, function (res) {
      try {
        var response = JSON.parse(res);
      } catch (e) {
        $contactSubmitBtn.val("Error");
        alert("Server error. Please email hey@mikehan.io directly.");
      }
      if (response.success) {
        $contactSubmitBtn.val("Sent!");
        $("#contact-form").trigger("reset");
      } else {
        $contactSubmitBtn.val("Error");
      }
      alert(response.message);
      grecaptcha.reset();
    });
  });
});

// Remove contact form submit disabled if ReCAPTCHA completed
// Global scope needed for ReCAPTCHA data-callback
function enableSubmitBtn() {
  $("#btn-contact-submit").val("Submit").prop("disabled", false);
}
