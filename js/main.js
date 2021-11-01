(function(){
  let $nav               = $('.full-navigation-menu'),
      $navItem           = $('.full-navigation-menu ul li'),
      $subnavCloseButton = $('.full-navigation-submenu-close-button');


  function updateScrollProgress() {
    let scrollProgress = document.getElementById('progress'),
        pos            = document.documentElement.scrollTop,
        calcHeight     = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrollValue    = Math.round( pos * 100 / calcHeight );

    scrollProgress.style.background = `conic-gradient(#C30744 ${scrollValue}%, transparent ${scrollValue}%)`;
  }

  $( window ).scroll(function() {
    var $this = $(this),
        $siteHeader = $('.site-header');
    if ($this.scrollTop() > 0) {
       $siteHeader.addClass('is-sticky');
    } else {
       $siteHeader.removeClass('is-sticky');
    }

    updateScrollProgress();
  });

  $('.open-full-menu-button').on('click', function(e) {
    e.preventDefault();
    $nav.toggleClass('open');
  });

  $('.full-navigation-menu-close-button').on('click', function(e) {
    e.preventDefault();
    $nav.removeClass('open');
    $navItem.removeClass('open');
    $subnavCloseButton.fadeOut();
  });

  $('.full-navigation-menu ul li span').on('click', function() {
    $(this).parent('li').siblings('li').removeClass('open');
    $(this).parent('li').addClass('open');
    $subnavCloseButton.fadeIn();
  });

  $subnavCloseButton.on('click', function(e) {
    e.preventDefault();
    $(this).fadeOut();
    $navItem.removeClass('open');
  });

  $('.contact-button').on('click', function(e) {
    e.preventDefault();
  });

})();