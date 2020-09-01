$(document).ready(function () {
  // Vars
  var windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  var $mainNav = $("#main-nav");
  var $mainNavLinks = $("#main-nav > ul > li > a");
  var $scrollIndicator = $("#scroll-indicator");
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

        if (!$navLink.hasClass("current")) {
          // Remove current class from all other nav links
          $mainNavLinks.removeClass("current");
          $navLink.addClass("current");
        }
        return false;
      }
    });
  }

  function isElementInView(element, fraction = 1) {
    var bounding = $(element)[0].getBoundingClientRect();

    return bounding.top >= 0 && bounding.bottom * fraction <= windowHeight
      ? true
      : false;
  }

  function applyFnChildren(fn, delayTime = 600) {
    return function (parent) {
      var childElements = $(parent).children();

      $(childElements).each(function (index) {
        var that = this;
        var t = setTimeout(function () {
          fn(that);
        }, delayTime * index);
      });
    };
  }

  function revealElement(element) {
    $(element).removeClass("hidden").addClass("reveal");
  }

  function hideElement(element) {
    $(element).removeClass("reveal").addClass("hidden");
  }

  var revealChildrenSlow = applyFnChildren(revealElement, 900);
  var revealChildrenFast = applyFnChildren(revealElement, 300);
  var hideChildren = applyFnChildren(hideElement, 0);

  // Set initial constants and state
  var lastScrollTop = 0;
  [
    "#about-intro",
    ".functions",
    ".industries",
    "#skills > .container > .skills-list",
    ".experiences-list",
    "#contact > .container",
  ].forEach(hideChildren);

  [
    "#skills > .container > .section-title",
    "#experiences > .container > .section-title",
  ].forEach(hideElement);

  $(document).scroll(function () {
    // Vertical position of scrollbar
    var scrollPos = $(window).scrollTop();
    var scrollDirDown = true;

    if (scrollPos < lastScrollTop) {
      scrollDirDown = false;
    } else {
      scrollDirDown = true;
    }
    lastScrollTop = scrollPos <= 0 ? 0 : scrollPos;

    // Toggle solid navbar on scroll
    $mainNav.toggleClass("scrolled", scrollPos > $mainNav.height());

    // Highlight current section in navbar
    highlightNavLink($sections, scrollPos, $mainNav.outerHeight());
    highlightNavLink($sections, scrollPos, $mainNav.outerHeight());

    // Hide scroll arrow after scroll
    if (scrollPos >= 250) {
      $scrollIndicator.fadeOut();
    } else {
      $scrollIndicator.fadeIn();
    }

    // Transition from Intro to About section with scroll
    var $headerBackground = $("#particles-js");
    var $headerHome = $("#header-home");
    var $headerContent = $("#header-content");
    var headerHeight = $headerHome.outerHeight();
    var $aboutIntro = $("#about-intro");
    var $aboutSection = $("#about");
    var calcTop =
      scrollPos < 300
        ? headerHeight * 0.5 - scrollPos / 2
        : headerHeight * 0.5 - 150;

    $headerContent.css({ top: calcTop });

    if (scrollPos > 100 && scrollDirDown) {
      $headerContent.fadeOut(800);
    } else if (scrollPos < 500 && !scrollDirDown) {
      $headerContent.fadeIn(800);
    }

    if (scrollPos < 300) {
      $headerHome.css({
        "background-color": "#264653",
        transition: "background-color 800ms linear",
      });
      $headerBackground.css({
        position: "fixed",
        "z-index": "1",
      });
      $aboutIntro.css({
        "background-color": "#264653",
      });
      $aboutSection.css({
        "background-color": "#264653",
      });

      hideChildren("#about-intro");
    } else {
      $headerHome.css({
        "background-color": "#2a9d8f",
        transition: "background-color 800ms linear",
      });
      $headerBackground.css({
        position: "relative",
        "z-index": "-1",
      });
      $aboutIntro.css({
        "background-color": "#2a9d8f",
        transition: "background-color 800ms linear",
      });
      $aboutSection.css({
        "background-color": "#2a9d8f",
        transition: "background-color 800ms linear",
      });

      // Fade in sections once triggers are scrolled
      isElementInView("#about-intro", 0.7)
        ? revealChildrenSlow("#about-intro")
        : null;

      isElementInView(".functions > .specials-content > div:first-child")
        ? [".functions", ".industries"].forEach(revealChildrenSlow)
        : null;

      isElementInView("#skills > .container > h2:first-child")
        ? [
            "#skills > .container",
            "#skills > .container > .skills-list",
          ].forEach(revealChildrenFast)
        : null;

      isElementInView("#skills > .container > h2:first-child")
        ? [
            "#skills > .container",
            "#skills > .container > .skills-list",
          ].forEach(revealChildrenFast)
        : null;

      isElementInView("#experiences > .container > h2:first-child")
        ? [
            "#experiences > .container",
            "#experiences > .container > .experiences-list",
          ].forEach(revealChildrenSlow)
        : null;

      isElementInView("#contact > .container > h2:first-child")
        ? revealChildrenSlow("#contact > .container")
        : null;
    }
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

  // Hide responsive menu after click
  $("#ham-menu-links > li > a").click(function (e) {
    console.log("click-triggerdd");
    $(".toggle").click();
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
