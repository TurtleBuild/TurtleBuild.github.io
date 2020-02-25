$(function () {
  var $nav = $('#gnav');
  var offset = $nav.offset();
  var navHeight = $nav.innerHeight();
  var headerInner = $('#header .inner');

  $('a[href^="#"]').on('click', function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

});

$(function(){
    $('.js-modal-open').on('click',function(){
        $(this).next('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $(this).parent('.js-modal').fadeOut();
        return false;
    });
});