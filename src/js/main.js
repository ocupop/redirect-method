  // Initialize tooltip
  $('[data-toggle="tooltip"]').tooltip({
    placement: 'auto right'
  });

  // Initialize Sticky side menu
  $('.sidenav').stickit({
    screenMinWidth: 992,
    top: 40
  });

  // Add listener for hash changes
  window.addEventListener("hashchange", function(e) {
    activateTab(window.location.hash);
  });

  // Add listner for click to go back top
  $('#top').on('click', function() {
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


function scrollTo(value) {
  $('html, body').animate({scrollTop: value}, "slow");
}

function activateTab(hash) {
  var target = $(hash).offset().top;

  $('#pilot-presentation .sidenav a').each(function(){
    var href = $(this).attr('href');
    if(href == hash){
      target = $('#pilot-presentation').offset().top;
      $(this).tab('show');
    }
  });

  scrollTo(target);
}

function activatePlayers() {
  $('.player').each(function() {
    var videos = $(this).attr('data-videos') ? $(this).attr('data-videos').split(',') : false,
        list = $(this).attr('data-list') ? $(this).attr('data-list') : false;
    $(this).youtube_video({
      playlist: list,
      channel: false,
      user: false,
      videos: videos,
      max_results: 8,
      shuffle: false,
      pagination: true,
      continuous: true,
      first_video: 0,
      show_playlist: 'auto',
      playlist_type: 'horizontal',
      show_channel_in_playlist:true,
      show_channel_in_title: true,
      width: false,
      show_annotations: false,
      now_playing_text: 'Now Playing',
      load_more_text: 'Load More',
      autoplay: false,
      force_hd: false,
      hide_youtube_logo: false,
      play_control: true,
      time_indicator: 'full',
      volume_control: true,
      share_control: true,
      fwd_bck_control: true,
      youtube_link_control: true,
      fullscreen_control: true,
      playlist_toggle_control:true,
      volume: 0,
      show_controls_on_load: true,
      show_controls_on_pause: true,
      show_controls_on_play: false,
      player_vars: {},
      colors: {
        controls_bg:      'rgba(0,0,0,.75)',
        buttons:          'rgba(255,255,255,.5)',
        buttons_hover:    'rgba(255,255,255,1)',
        buttons_active:   'rgba(255,255,255,1)',
        time_text:        '#FFFFFF',
        bar_bg:           'rgba(255,255,255,.5)',
        buffer:           'rgba(255,255,255,.25)',
        fill:             '#FFFFFF',
        video_title:      '#FFFFFF',
        video_channel:    '#f37046',
        playlist_overlay: 'rgba(0,0,0,.75)',
        playlist_title:   '#FFFFFF',
        playlist_channel: '#f37046',
        scrollbar:        '#FFFFFF',
        scrollbar_bg:     'rgba(255,255,255,.25)',
      },
       
      on_load: function() {},
      on_done_loading: function() {},
      on_state_change: function() {},
      on_seek: function() {},
      on_volume: function() {},
      on_time_update: function() {},   
    });
  });
}


$(document).on('ready', function() {

  $('body').scrollspy({ target: '#sidebar' })

  // Activate tab with hash
  if(window.location.hash) {
    activateTab(window.location.hash);
  }

  // Initialize custom youtube player
  activatePlayers();

  // Position mosaic images
  $('.mosaic-wrapper img').each(function() {
    $(this).css({
      'top' : $(this).attr('data-vert'),
      'left' : $(this).attr('data-horz'),
      'z-index' : $(this).attr('data-order')
    });
  });

  $('.subnav-trigger').on('click', function(){
    $('.left-column').toggleClass('open');
  });

  $('#pilot-presentation .sidenav a, .next').on('click', function (e) {
    activateTab($(this).attr('href'));
    $('.left-column').removeClass('open');
  });


  $('.scroll-animate').each(function() {
    $(this).find('img').css({opacity: 0});
    new Waypoint.Inview({
      element: $(this)[0],
      enter: function(direction) {
        // window.console.log('Enter triggered with direction ' + direction);
      },
      entered: function(direction) {
        // window.console.log('Entered triggered with direction ' + direction);
        $(this.element).find('img').addClass('animate');
      },
      exit: function(direction) {
        // window.console.log('Exit triggered with direction ' + direction);
      },
      exited: function(direction) {
        // window.console.log('Exited triggered with direction ' + direction);
        $(this.element).find('img').removeClass('animate');
      }
    })
  });
});


