
$(function(){
	
	//nav
	/*
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 78) {
			$('#nav').addClass('fixed');
		   } else {
			   $('#nav').removeClass('fixed');
		   }
	});*/
	//lnb
	$('#container .content').css('min-height',$(window).height() - 132); // - header(132)
	$('#container .lnb .nav').css('max-height',$(window).height() - 380); // 250 ( lnb top ) + 130 ( header ) + 130
	
	//top_btn
	$('<div class="top_btn"><a href="#">▲</a></div>').appendTo('#container');
    $('.top_btn').click(function() {
        $('html, body').stop().animate({
           scrollTop: 0
        }, 1000);
    });
	
    $('#container .lnb .nav ul li a').click(function(){
		
		$(this).parent().addClass('on').siblings('li').removeClass('on');
		$($(this).attr('href')).addClass('on');
    });
    
    var $menu     = $('#container .lnb .nav ul li.link'),
	    $contents = $('h2'),
	    $doc      = $('html, body');
	
	$(function () {
	
	    $menu.on('click','a', function(e){
	        var $target = $(this).parent(),
	            idx     = $target.index(),
	            section = $contents.eq(idx),
	            offsetTop = section.offset().top;
	        $doc.stop()
	                .animate({
	                    scrollTop :offsetTop
	                }, 800);
	        return false;
	    });
	});
	
	$(window).scroll(function(){
	var scltop = $(window).scrollTop();
		$.each($contents, function(idx, item){
	        var $target   = $contents.eq(idx),
	            i         = $target.index(),
	            targetTop = $target.offset().top;
	
	        if (targetTop <= scltop) {
	            $menu.removeClass('on');
	            $menu.eq(idx).addClass('on');
	        }
	        if (!(130 <= scltop)) {
	            $menu.removeClass('on');
	        }
	    });
	});
	
});
