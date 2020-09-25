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
  document.getElementById('header_main_CompanyInformation_link').addEventListener('mouseover', () => {
  
    　　header_main_CompanyInformation_link.style.color = '#6EA81A';
      
    }, false);
    header_main_CompanyInformation_link.addEventListener('mouseleave', () => {
      
      　　header_main_CompanyInformation_link.style.color = '#747474';
      
    }, false);

    document.getElementById('header_main_EmploymentInformation_link').addEventListener('mouseover', () => {
  
      　　header_main_EmploymentInformation_link.style.color = '#6EA81A';
        
      }, false);
      header_main_EmploymentInformation_link.addEventListener('mouseleave', () => {
        
        　  header_main_EmploymentInformation_link.style.color = '#747474';
        
      }, false);
  
  
    document.getElementById('header_main_ContactUs_link').addEventListener('mouseover', () => {
  
      　　header_main_ContactUs_link.style.color = '#6EA81A';
        
      }, false);
      header_main_ContactUs_link.addEventListener('mouseleave', () => {
        
        　　header_main_ContactUs_link.style.color = '#747474';
        
      }, false);

    
  }else if(pathname=="/company"){
    $(".header_main_CompanyInformation").css({
      'background-color': '#6EA81A',
    });
    $(".header_main_CompanyInformation_link").css({
      'color': 'white',
    });
    document.getElementById('header_main_top_link').addEventListener('mouseover', () => {
  
      　　header_main_top_link.style.color = '#6EA81A';
        
      }, false);
      header_main_top_link.addEventListener('mouseleave', () => {
        
        　　header_main_top_link.style.color = '#747474';
        
      }, false);
  
    document.getElementById('header_main_EmploymentInformation_link').addEventListener('mouseover', () => {
  
      　　header_main_EmploymentInformation_link.style.color = '#6EA81A';
        
      }, false);
      header_main_EmploymentInformation_link.addEventListener('mouseleave', () => {
        
        　  header_main_EmploymentInformation_link.style.color = '#747474';
        
      }, false);
  
  
    document.getElementById('header_main_ContactUs_link').addEventListener('mouseover', () => {
  
      　　header_main_ContactUs_link.style.color = '#6EA81A';
        
      }, false);
      header_main_ContactUs_link.addEventListener('mouseleave', () => {
        
        　　header_main_ContactUs_link.style.color = '#747474';
        
      }, false);
  }else if(pathname=="/employment"){
    $(".header_main_EmploymentInformation").css({
      'background-color': '#6EA81A',
    });
    $(".header_main_EmploymentInformation_link").css({
      'color': 'white',
    });
    document.getElementById('header_main_top_link').addEventListener('mouseover', () => {
  
      　　header_main_top_link.style.color = '#6EA81A';
        
      }, false);
      header_main_top_link.addEventListener('mouseleave', () => {
        
        　　header_main_top_link.style.color = '#747474';
        
      }, false);
  
      document.getElementById('header_main_CompanyInformation_link').addEventListener('mouseover', () => {
  
        　　header_main_CompanyInformation_link.style.color = '#6EA81A';
          
        }, false);
        header_main_CompanyInformation_link.addEventListener('mouseleave', () => {
          
          　　header_main_CompanyInformation_link.style.color = '#747474';
          
        }, false);
  
    document.getElementById('header_main_ContactUs_link').addEventListener('mouseover', () => {
  
      　　header_main_ContactUs_link.style.color = '#6EA81A';
        
      }, false);
      header_main_ContactUs_link.addEventListener('mouseleave', () => {
        
        　　header_main_ContactUs_link.style.color = '#747474';
        
      }, false);
  }else if(pathname=="/contactus"){
    $(".header_main_ContactUs").css({
      'background-color': '#6EA81A',
      'color': 'white',
    });
    $(".header_main_ContactUs_link").css({
      'color': 'white',
    });
    document.getElementById('header_main_top_link').addEventListener('mouseover', () => {
  
      　　header_main_top_link.style.color = '#6EA81A';
        
      }, false);
      header_main_top_link.addEventListener('mouseleave', () => {
        
        　　header_main_top_link.style.color = '#747474';
        
      }, false);
  
      document.getElementById('header_main_CompanyInformation_link').addEventListener('mouseover', () => {
  
        　　header_main_CompanyInformation_link.style.color = '#6EA81A';
          
        }, false);
        header_main_CompanyInformation_link.addEventListener('mouseleave', () => {
          
          　　header_main_CompanyInformation_link.style.color = '#747474';
          
        }, false);
  
        document.getElementById('header_main_EmploymentInformation_link').addEventListener('mouseover', () => {
  
          　　header_main_EmploymentInformation_link.style.color = '#6EA81A';
            
          }, false);
          header_main_EmploymentInformation_link.addEventListener('mouseleave', () => {
            
            　  header_main_EmploymentInformation_link.style.color = '#747474';
            
          }, false);
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
function showElementAnimation1() {

  var element = document.getElementsByClassName('details');
  if(!element) return; // 要素がなかったら処理をキャンセル
  
  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show1');
    } else if(scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('is-show1');
    }
  }
}
showElementAnimation1();
window.addEventListener('scroll', showElementAnimation1);
function showElementAnimation2() {

  var element = document.getElementsByClassName('details_middle');
  if(!element) return; // 要素がなかったら処理をキャンセル
  
  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show2');
    } else if(scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('is-show2');
    }
  }
}
showElementAnimation2();
window.addEventListener('scroll', showElementAnimation2);
function showElementAnimation3() {

  var element = document.getElementsByClassName('details_bottom');
  if(!element) return; // 要素がなかったら処理をキャンセル
  
  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show3');
    } else if(scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('is-show3');
    }
  }
}
showElementAnimation3();
window.addEventListener('scroll', showElementAnimation3);
$(function(){
  $("ul", ).hover(function(){
    if($(".header_main_CompanyInformation_sub:first").is(":hidden")){
      $(".header_main_CompanyInformation_sub").slideDown('fast');
    } else{
      $(".header_main_CompanyInformation_sub").hide();
      
      
    }
  });
});