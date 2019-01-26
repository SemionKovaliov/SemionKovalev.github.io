$(document).ready(function(){
    $('#head_menu').removeClass('fixed');
    $('#head_menu_block').removeClass('menu_shadow');
    $(window).scroll(function(){
        if($(this).scrollTop()>10) {
            $('#head_menu').addClass('fixed').fadeIn('fast');
            $('#head_menu_block').addClass('menu_shadow').fadeIn('fast');
        } else {
            $('#head_menu').removeClass('fixed').fadeIn('fast');
            $('#head_menu_block').removeClass('menu_shadow').fadeIn('fast');
        }
    })
    
});

$(document).ready(function(){
    
    $('#open_left_menu').click(function(){
        if(!$('#head_menu_block').hasClass('animate_side')){
            $('#head_menu_block').addClass('animate_side');
            $('.side_menu').css("left", "0px");
        }
    })
    $('#clouse_left_menu').click(function(){
        if($('#head_menu_block').hasClass('animate_side')){
            $('#head_menu_block').removeClass('animate_side');
            $('.side_menu').css("left", "-999px");
        }
    })
});

$(document).ready(function(){
    
    $('#open_left_menu2').click(function(){
        if(!$('#head_menu_block').hasClass('animate_side')){
            $('#head_menu_block').addClass('animate_side');
            $('.side_menu').css("left", "0px");
        }
    })
    $('#clouse_left_menu2').click(function(){
        if($('#head_menu_block').hasClass('animate_side')){
            $('#head_menu_block').removeClass('animate_side');
            $('.side_menu').css("left", "-999px");
        }
    })
});

setTimeout(function(){
$(document).ready(function(){
    if($(this)){
        $('.main_info_text_h2').css('opacity', '1');
        $('.main_info_text_h2').css('top', '0');
     }
})
},500); 

setTimeout(function(){
$(document).ready(function(){
    if($(this)){
        $('.main_info_text_p').css('opacity', '1');
        $('.main_info_text_p').css('top', '0');
     }
})
},700);

setTimeout(function(){
$(document).ready(function(){
    if($(this)){
        $('.main_info_text_button').css('opacity', '1');
        $('.main_info_text_button').css('top', '0');
     }
})
},900);

setTimeout(function(){
$(document).ready(function(){
    if($(this)){
        $('.main_info_text_iphone').css('margin-top', '0');
     }
})
},1100);

$(window).scroll(function(){
    if($(this).scrollTop() > 600){
        $('.about_app').css('opacity', '1');
        $('.about_app').css('top', '0');
     }
});

$(window).scroll(function(){
    if($(this).scrollTop() > 1200){
        $('.protection_img').css('margin-left', '-500px');
     }
});

$(window).scroll(function(){
    if($(this).scrollTop() > 1600){
        $('.everywhere_map').css('margin-left', '0');
     }
});
        
$(window).scroll(function(){
    if($(this).scrollTop() > 2100){
        $('.landing').css('opacity', '1');
     }
});

$(document).ready(function(){
  $('.slidewrapper').slick({
    autoplay: true,
    prevArrow: '.prev_slide',
    nextArrow: '.next_slide',
  });
});



$(document).ready(function(){ 
   $('#checkbox').on('click', function(){ 
       
       if($("#checkbox").prop("checked") == true){
      $('#individual_plan').css('color', '#8c8f94'); 
      $('#company_plan').css('color', '#333');
           

      $('#info_plans_1').css('opacity', '0');
      setTimeout(function(){
          $('#info_plans_1').css('opacity', '1'); 
      },310);

    } else {
        $('#individual_plan').css('color', '#333'); 
      $('#company_plan').css('color', '#8c8f94');
        
    $('#info_plans_1').css('opacity', '0');
      setTimeout(function(){
          $('#info_plans_1').css('opacity', '1'); 
      },310);

    }
    })
})

