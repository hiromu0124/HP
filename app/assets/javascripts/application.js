// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require_tree .
//= require jquery
//= require jquery_ujs
$(function() {
  var pathname= location.pathname;
  if(pathname=="/"){
  $(".header_main_top").css({
    'background-color': '#6EA81A',
  });
  $(".header_main_top_link").css({
    'color': 'white',
  });
  }else if(pathname=="/company"){
    $(".header_main_CompanyInformation").css({
      'background-color': '#6EA81A',
    });
    $(".header_main_CompanyInformation_link").css({
      'color': 'white',
    });
  }else if(pathname=="/employment"){
    $(".header_main_EmploymentInformation").css({
      'background-color': '#6EA81A',
    });
    $(".header_main_EmploymentInformation_link").css({
      'color': 'white',
    });
  }else if(pathname=="/contactus"){
    $(".header_main_ContactUs").css({
      'background-color': '#6EA81A',
      'color': 'white',
    });
    $(".header_main_ContactUs_link").css({
      'color': 'white',
    });
  }
});
$(function() {
  var offset = $('.header_main').offset();

  $(window).scroll(function () {
      if ($(window).scrollTop() > offset.top) {
          $('.header_main').addClass('fixed');
          
      } else {
          $('.header_main').removeClass('fixed');
      }
  });
});