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
});

// Remove contact form submit disabled if CAPTCHA completed
function enableSubmitBtn() {
  document.getElementById("contact-submit").disabled = false;
}
