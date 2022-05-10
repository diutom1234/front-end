$(document).on('click','.home', function(){
	$('.dropdown-menu-pages').slideUp();
	$('.properties_list').slideUp();
	$('.properties_list_title').siblings().slideUp();
	$('.dropdown-menu-blog').slideUp();
	if($('.dropdown-menu-home').css('display') === "none"){
		$('.dropdown-menu-home').slideDown();
	}else{
		$('.dropdown-menu-home').slideUp();
	}
})
$(document).on('click','.pages', function(){
	$('.dropdown-menu-home').slideUp();
	$('.dropdown-menu-blog').slideUp();
	$('.properties_list').slideUp();
	$('.properties_list_title').siblings().slideUp();
	if($('.dropdown-menu-pages').css('display') === "none"){
		$('.dropdown-menu-pages').slideDown();
	}else{
		$('.dropdown-menu-pages').slideUp();
	}
})
$(document).on('click','.blog', function(){
	$('.dropdown-menu-home').slideUp();
	$('.dropdown-menu-pages').slideUp();
	$('.properties_list').slideUp();
	$('.properties_list_title').siblings().slideUp();
	if($('.dropdown-menu-blog').css('display') === "none"){
		$('.dropdown-menu-blog').slideDown();
	}else{
		$('.dropdown-menu-blog').slideUp();
	}
})
$(document).on('click','.properties', function(){
	$('.dropdown-menu').slideUp();
	if($(window).width() < 768){
		if($('.properties_list').css('display') === "none"){
			$('.properties_list').slideDown();
		}else{
			$('.properties_list').slideUp();
			$('.properties_list_title').siblings().slideUp();
		}
	}else{
		if($('.properties_list').css('display') !== "none"){
			$('.properties_list').slideUp();
			$('.properties_list_title').siblings().slideUp();
		}else{
			$('.properties_list').slideDown();
			$('.properties_list_title').siblings().slideDown();
		}
	}
})
$(document).on('click','.scrollTop', function(){
	document.documentElement.scrollTop = 0;
})
$(document).on('click','.properties_list_title', function(){
	if($(this).siblings().css('display') === "none"){
		$('.properties_list_title').siblings().slideUp();
		$(this).siblings().slideDown();
	}else{
		$('.properties_list_title').siblings().slideUp();
	}
})
$(document).on('click', '.header-register', function(){
	$('.register-box').show();
	$('.homeBook').css('display', 'block');
})
$(document).on('click', '.homeBook', function(){
	$('.register-box').hide();
})
$(document).on('click','.register-box', function(e){
	e.stopPropagation();
})
$(document).on('click', '.bars', function(){
	if($('.header-list').css('display') === "none"){
		$('.header-list').slideDown();
	}else{
		$('.header-list').slideUp();
	}
	$('.properties_list').slideUp();
	$('.properties_list_title').siblings().slideUp();
})
$(document).on('click','.header-search', function(){
	if($(this).find('.fas').hasClass('fa-search')){
		$(this).find('.fas').removeClass('fa-search').addClass('fa-times');
		$('.search-box').slideDown();
	}else if($(this).find('.fas').hasClass('fa-times')){
		$(this).find('.fas').removeClass('fa-times').addClass('fa-search');
		$('.search-box').slideUp();
	}
})
$(document).on('click', '.contact', function(){
	$('.dropdown-menu-home').slideUp();
	$('.dropdown-menu-pages').slideUp();
	$('.dropdown-menu-blog').slideUp();
	$('.properties_list').slideUp();
	$('.properties_list_title').siblings().slideUp();
	if($('.ggmap').css('display') === 'none'){
		$('.ggmap').css('display', 'block');
	}else{
		$('.ggmap').css('display', 'none');
	}
})
$(document).on('click','.header-list', function(){
	$('.homeBook').css('display', 'block');
})
$(document).on('click','.homeBook', function(){
	$('.homeBook').css('display', 'none');
	$('.properties_list').slideUp();
	$('.dropdown-menu').slideUp();
	if($(window).width() < 768){
		$('.header-list').slideUp();
	}
})