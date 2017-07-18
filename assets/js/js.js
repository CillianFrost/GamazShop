$(document).ready(function(){

// LEFT SIDEBAR MENU TOGGLE

$('.menu_btn').click(function(){
	$('.left_modal_menu').toggle();
	$('.bg_modal').toggle();
	$('.all_wrapper').css('padding-left','100px');
});

$('.bg_modal').click(function(){
	$('.left_modal_menu').toggle();
	$('.bg_modal').toggle();
	$('.all_wrapper').css('padding-left','0');
});

$('.menu_logo').click(function(){
	$('.left_modal_menu').toggle();
	$('.bg_modal').toggle();
	$('.all_wrapper').css('padding-left','0');
});

$('.arrow').click(function(){
	$('.left_modal_menu').toggle();
	$('.bg_modal').toggle();
	$('.all_wrapper').css('padding-left','0');
});

// LEFT SIDEBAR LINKS ICONS

// LEFT SIDEBAR CHECKBOX TUMBLERS

$('#check_sec').click(function(){
	if ($('#check_sec').hasClass('sec_radio')){
		$('#check_sec').removeClass('sec_radio');
		$('#check_sec').addClass('sec_radio_cheked');
	}
	else {
		$('#check_sec').removeClass('sec_radio_cheked');
		$('#check_sec').addClass('sec_radio');
	}
});

$('#on_off').click(function(){
	if ($('#on_off').hasClass('on_off')){
		$('#on_off').removeClass('on_off').addClass('on_off_cheked');
	}
	else {
		$('#on_off').removeClass('on_off_cheked').addClass('on_off');
	}
	
});

$('#on_off').click(function(){
	$('.side_bar_off').toggleClass('radio_text_on');
	$('.side_bar_on').toggleClass('radio_text_on');
	$('.last_wins').toggle();
});

// LOGINNED HEADER

$('#social_in').click(function(){
	$('#login_screen').hide();
	$('#social_wrapper').show();
	$('#header_social').hide();
	$('#loggined_header').show();
	$('.left_modal_menu_sign_in').hide();
	$('.nav_list_2').css('display', 'flex');
});

$('.loggined_view_menu_logout').click(function(){
	$('.loggined_header').toggle('display');
	$('.header_social').toggle('display');
	$('.nav_list_2').hide();
	$('.left_modal_menu_sign_in').css('display','flex');
});

// LOGINNED HOVER MENU

$('.third_loggined_numbers').hover(function(){
	$('.loggined_balance').toggle();
});

$('.loggined_dots_wrapper').click(function(){
	$('#loggined_view').toggle();
});

// PLACEHOLDER TEXT

$('input').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder'))
           .attr('placeholder','');
}).blur(function(){
    $(this).attr('placeholder',$(this).data('placeholder'));
});

// SEARCH FIELD

$('#search').focus(function(){
	$('.bg_modal_search').toggle();
	$('.mb_game_wrapper').show();
	$('#search').css('border', '1px white solid').css('color', 'black').css('font-weight', 'bold');
});
	
$('#search').blur(function(){
	$('.mb_game_wrapper').hide();
	$('#search').css('border', '1px #e9e9e9 solid').css('color', '8e8e8e').css('font-weight', 'normal');
	$('.bg_modal_search').toggle();
  $('body').css('overflow','visible');
});
	
$('.bg_modal_search').click(function(){
	$(this).toggle();
});	

// LOGIN SCREEN

$('#login_header').click(function(){
	$('#header_social').hide();
	$('#login_screen').css('display', 'flex');
});

$(document).mouseup(function (e) {
    var container = $('#login_screen');
    if (container.has(e.target).length === 0){
        container.hide();
				$('#header_social').show();
    }
});

// REGISTER SCREEN

$('#register_header').click(function(){
	$('#header_social').hide();
	$('#register').show();
});

$(document).mouseup(function(e){
	var container = $('#register');
	if (container.has(e.target).length === 0){
			container.hide();
			$('#header_social').show();
	}
});

// BUY GAME TABS

$('.buy_game_key_wrapper').click(function(){
	$('.buy_game_des_wrapper').hide();
	$('.k_i_wrapper').show();
	$('.buy_game_description_wrapper').removeClass('buy_game_border_black');
	$(this).addClass('buy_game_border_black');
});

$('.buy_game_description_wrapper').click(function(){
	$('.k_i_wrapper').hide();
	$('.buy_game_des_wrapper').show();
	$('.buy_game_key_wrapper').removeClass('buy_game_border_black');
	$(this).addClass('buy_game_border_black');
});

// MAIN CONTENT

// LAST WINS

});

//// RESPONSIVE
	
// FUNCTION TO CHANGE SIZE TO NEW WINDOW SIZE	
	
function size(element_size_input){
	var window_resolution = $(window).width();
	if (window_resolution < 1900 && window_resolution > 1132){
		var origin_window_difference = (100 - (window_resolution * 100 / 1900)) * 0.01;
		var new_size = element_size_input - element_size_input * origin_window_difference;
		var new_size_int = parseInt(new_size);
		var new_size_str = new_size_int.toString() + 'px';
		return new_size_str;
		};
};

function shop_resize(){

	// NEW SIZES
			
	var last_winners_output = size(115);
	var small_game_output = size(294);
	var medium_game_output = size(395);		
	var big_game_output = size(595);	
	var main_content_output = size(1194);	
	var buy_game_bg_width_output = size(1920);
	var buy_game_bg_height_output = size(1080);
	var buy_game_bg_section_output = size(762);
	//var last_wins_block_height_output = size(200);
	var last_wins_diamond_width_output = size(67);
	var last_wins_diamond_height_output = size(54);
		
	// NEW SIZES TO ELEMENTS ON NEW WINDOW
		
	$('.last_wins_bg').css('width', last_winners_output).css('height', last_winners_output);
	$('.big_g').css('width', big_game_output).css('height', big_game_output);
	$('.small_g').css('width',small_game_output).css('height',small_game_output);
	$('.small_g_temporary').css('width',small_game_output).css('height',small_game_output);
	$('.medium_g').css('width',medium_game_output).css('height',medium_game_output);
	$('.medium_g_temporary').css('width',medium_game_output).css('height',medium_game_output);
	$('.main_content').css('width',main_content_output);
	$('.buy_game_bg').css('width',buy_game_bg_width_output).css('height',buy_game_bg_height_output);
	$('.buy_game_bg_section').css('height',buy_game_bg_section_output);
//	$('.last_wins').css('height',last_wins_block_height_output);
	$('.diamond_img').css('width',last_wins_diamond_width_output);
	$('.diamond_img').css('height',last_wins_diamond_height_output);
}

// FIRST RESIZE

$(document).ready(function(){
	shop_resize();
});

// RESIZE

$(window).resize(function(){
	shop_resize();
});

// BROWSER FULL SCREEN RESIZE

$(window).on('resize', function(){
    if(screen.width === window.innerWidth){
        shop_resize();
    }
});
