$('.slideAboutHeaderPic').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
})
$(document).on('click', '.contact', function(){
	if($('.about-header').css('display') === 'block'){
		$('.about-header').css('display', 'none');
	}else{
		$('.about-header').css('display', 'block');
	}
})