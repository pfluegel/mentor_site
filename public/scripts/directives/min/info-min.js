!function(){function t(t){return{templateUrl:"templates/directives/info.html",replace:!0,restrict:"E",scope:{},link:function(t,s,o){$(".top img").css({transform:"translateX(-50px)"}).css({opacity:0}),$(".mid img").css({transform:"translateX(50px)"}).css({opacity:0}),$(".bot img").css({transform:"translateX(-50px)"}).css({opacity:0}),$(window).scroll(function(){var t=$(this).scrollTop(),s=$(window).height();t>$(".top").offset().top-s/1.2&&$(".top img").css({transform:"translateX(0)"}).css({opacity:1}),t>$(".mid").offset().top-s/1.2&&$(".mid img").css({transform:"translateX(0)"}).css({opacity:1}),t>$(".bot").offset().top-s/1.2&&$(".bot img").css({transform:"translateX(0)"}).css({opacity:1})})}}}angular.module("mentorSite").directive("info",t)}();