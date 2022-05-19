$(function(){
	
	var notepad = $('.notepads');
	
	$(window).scroll(function(){
		
		if($(this).scrollTop() > 300){
			notepad.addClass('animate');
		} else {
			notepad.removeClass('animate');
		}
		
		if($(this).scrollTop() > 100) { 
			 $('.change_img').attr('src','images/home.svg');
		  }else {
			 $('.change_img').attr('src','images/Pencil.svg');
		   }
		
	});
	var is_svg_load = function(){
		return ($('embed').length > 0);
	};
	
        $('embed').each(function(){
            var src = $(this).attr('src');
            $(this).attr('src', src.replace('.svg', '.png'));
        });
   
	
});


