$(document).ready(function(){   
    

    
    
    /* Main */
    
    
    
    $('.square-card').click(function(){
        if(!($(this).hasClass('active'))){
            $('.square-card').removeClass('active')
            $(this).addClass('active')
        }
    })
    
    
    $('.sort-button > a').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }else{
            $(this).addClass('active')
        }
    })


    $(window).on('scroll', function () {
        var total_scroll_height = document.body.scrollHeight
        var inside_header = ($(this).scrollTop() <= 328);
        var passed_header = ($(this).scrollTop() >= 328); //250  

        if (inside_header === true) {
            $('.text-slider').removeClass('scroll-text-slider');

        }
        else if(passed_header === true){
            $('.text-slider').addClass('scroll-text-slider');

        } 
    });
    
    $('.text-slider-menu').click(function(){
        if(!($(this).hasClass('active'))){
            $('.text-slider-menu').removeClass('active')
            $(this).addClass('active')
        }
    })

    
    $('.form-check-input').click(function(){
        if($(this).is(':checked')){
            $(this).parent().parent().parent().find('.addmenu-badge-box').css('display','none')
            $(this).parent().parent().find('.addmenu-badge-box').css('display','block')
            
            $(this).parent().parent().parent().find('.listmenu-badge-box').css('display','none')
            $(this).parent().parent().find('.listmenu-badge-box').css('display','flex')
            
            $(this).parent().parent().find('.selectmenu-num').addClass('color-black')
            $(this).parent().parent().find('.selectmenu-stepper').css('display','block')
        
        } else {
            $(this).parent().parent().find('.addmenu-badge-box').css('display','none')
            
            
            $(this).parent().parent().find('.listmenu-badge-box').css('display','none')
            
            
            $(this).parent().parent().find('.selectmenu-num').removeClass('color-black')
            $(this).parent().parent().find('.selectmenu-stepper').css('display','none')
        }
        
    })
    
    
    
    
    
    $('.form-check-input').click(function(){
        if($('.delivery-input-button').is(':checked')){
            $('.delivery-disabled').addClass('check-disabled')
            $('.delivery-disabled').find('.delivery-input-disabled').attr("disabled",true)
            $('.delivery-disabled').find('.delivery-input-disabled').prop("checked",false)
            
            $('.delivery-select').css('display','block')
        } else{
            $('.delivery-disabled').removeClass('check-disabled')
            $('.delivery-disabled').find('.delivery-input-disabled').attr("disabled",false)
            
            $('.delivery-select').css('display','none')
        }
    })
    
    
    
    $('.omission2').each(function(){
        var length = 90;
        $(this).each(function(){
            if($(this).text().length>=length){
                $(this).text($(this).text().substr(0,length)+'...')
            }
        })
    })
    
    
    
});