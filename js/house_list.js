$(document).on('click','.advanced', function(){
	if($('.headerForm-list').css('display') === "none"){
		$('.headerForm-list').slideDown();
		$(this).find('.fas').removeClass('fa-plus').addClass('fa-minus');
	}else{
		$('.headerForm-list').slideUp();
		$(this).find('.fas').removeClass('fa-minus').addClass('fa-plus');
	}
})