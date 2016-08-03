$(function() {
  $('#top').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).on('ready', function(){
  $('[data-toggle="tooltip"]').tooltip()
  $('.subnav-trigger').on('click', function(){
    $('.left-column').toggleClass('open');
  });
  // scroll user back up to top of pilot presentation and show next slide
  $('.next').on('click', function(){
    var active_tab = $(this).attr('href');
    var target_scroll = $('#pilot-presentation').offset();
    $('html, body').animate({scrollTop: target_scroll.top}, "slow");
    window.console.log(active_tab);
    $('.sidenav a[href="'+ active_tab +'"]').tab('show')
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    if($('.left-column').hasClass('open')){
      $('.left-column').removeClass('open');
    }
  })
});
