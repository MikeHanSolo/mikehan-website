$(function () {
  $(document).scroll(function () {
    var $nav = $("#main-nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
