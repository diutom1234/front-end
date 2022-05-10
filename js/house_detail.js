$(document).on('click', '.contact', function(){
	if($('.houseDetail-header').css('display') === 'block'){
		$('.houseDetail-header').css('display', 'none');
	}else{
		$('.houseDetail-header').css('display', 'block');
	}
})
$(document).on('click', '.btn-firstFloor', function(){
	$('.img-firstFloor').show();
	$('.img-secondFloor').hide();
	$(this).removeClass('btn-secondary').addClass('btn-info');
	$(this).next().removeClass('btn-info').addClass('btn-secondary');
})
$(document).on('click', '.btn-secondFloor', function(){
	$('.img-firstFloor').hide();
	$('.img-secondFloor').show();
	$(this).removeClass('btn-secondary').addClass('btn-info');
	$(this).prev().removeClass('btn-info').addClass('btn-secondary');
})