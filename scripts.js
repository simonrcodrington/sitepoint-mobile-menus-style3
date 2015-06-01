/*Script functionality*/
$(document).ready(function() {

  //GLOBALS
  var nav_menu = $('.nav-menu');

  //main menu toggle
  $('.nav-menu-toggle').on('click', function() {
    nav_menu.toggleClass('active');
    nav_menu.parent('.nav-menu-wrap').toggleClass('active');
  });

  //sub menu toggle 
  $('.sub-menu-toggle').on('click', function() {
    var sub_menu = $(this).siblings('.sub-menu');
    sub_menu.toggleClass('active');
    set_sub_menu_toggles();
    set_sub_menu_height();
  });

  //sets all sub-menus to be as long as the main nav menu
  function set_sub_menu_height() {
    var menu_height = nav_menu.outerHeight();
    var sub_menus = $('.sub-menu');
    $.each(sub_menus, function() {
      $(this).outerHeight(menu_height);
    });
  }

  //close sub menu
  $('.sub-menu > .close').on('click', function() {
    $(this).parent('.sub-menu').toggleClass('active');
  });

  //Close the menu if selecting close item or background 
  $('.nav-menu-background, .nav-menu > .close').on('click', function() {
    $('.nav-menu, .nav-menu-wrap').removeClass('active');
  });

  //SUB MENU TOGGLE HEIGHT
  //set the height of the sub-menu toggle perfectly
  function set_sub_menu_toggles() {
    var sub_menu_toggles = $('.sub-menu-toggle');
    $.each(sub_menu_toggles, function() {
      $(this).outerHeight($(this).siblings('a').outerHeight());
      $(this).css('line-height', $(this).siblings('a').outerHeight() + 'px');
    });
  }
  set_sub_menu_toggles();

});