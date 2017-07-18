$('#on_off').click(function(){
	if ($('#on_off').hasClass('on_off')){
		$('#on_off').removeClass('on_off');
		$('#on_off').addClass('on_off_cheked');
		$('#radio_off').removeClass('radio_text_off');
		$('#radio_on').addClass('radio_text_on_checked');
		$('#radio_off').addClass('radio_text_off')
	}
	else {
		$('#on_off').removeClass('on_off_cheked');
		$('#on_off').addClass('on_off');
		$('#radio_on').removeClass('radio_text_on');
		$('#radio_off').addClass('radio_text_off_checked');
		$('#radio_on').addClass('radio_text_on');
	}
	
});

if ($('#on_off').hasClass('on_off_cheked')){
	$('#radio_off').removeClass('radio_text_off_checked');
	$('#radio_off').addClass('radio_text_off');
}
else {
	$('#radio_on').removeClass('radio_text_on_checked');
	$('#radio_on').addClass('radio_text_on');
	$('#radio_off').removeClass('radio_text_off');
	$('#radio_off').addClass('radio_text_off_checked');
	}
	
if ($('#on_off').hasClass('on_off')){
	$('#radio_off').addClass('radio_text_off_checked');
	$('#radio_on').addClass('radio_text_on');
}
else if ($('#on_off').hasClass('on_off_cheked')){
	$('#radio_off').addClass('radio_text_off');
	$('#radio_on').addClass('radio_text_on_checked');
	}

	$('input').removeAttribute('placeholder');
	
if (('.login_screen').hasClass('no')){
	$('.social_wrapper').css('display', 'block');
	}
else{
	$('.social_wrapper').addClass('no');
	}
	
	
	
	
var lw = $('.last_wins_bg_1').width();	
var l_h = $('.last_wins').width();
var s_g = $('.small_g').width();
var m_g = $('.medium_g').width();
var b_g = $('.big_g').width();
var diam = $('.diamond_img').width();
var diam = $('.diamond_img').height();
var main = $('.main_content').width();	
	
function size(e,k){
	var s = $(window).width();
	if (s < 1920 && s > 1152){
		var w = e;
		var r = (1920 - s) / k;
		var w = w - r;
		var w = parseInt(w);
		var w = w.toString() + 'px';
		return w;
		};
};
		
var win = size(lw,65);
var sm = size(s_g,65);
var mm = size(m_g,65);		
var bm = size(b_g,65);	
var mc = size(main,25);	

		
$('.last_wins_bg_1').css('width', win).css('height', win);
$('.last_wins_bg_2').css('width', win).css('height', win);
$('.last_wins_bg_3').css('width', win).css('height', win);
$('.big_g').css('width', bm).css('height', bm);
$('.small_g').css('width',sm).css('height',sm);
$('.small_g_temporary').css('width',sm).css('height',sm);
$('.medium_g').css('width',mm).css('height',mm);
$('.medium_g_temporary').css('width',mm).css('height',mm);
$('.main_content').css('width',mc);

$('#small_g_1').hover(function() {
  $('#game_price_small_1').animate({
    width: '+=10',
  }, 300, function() {
  }),
  $('#game_price_small_1').animate({
    width: '70',
  }, 300, function() {
  });
});

$('#small_g_1').hover(function() {
  $('#game_price_small_1').animate({
    right: '+=20'
  }, 300, function() {
  }), function(){
  $('#game_price_small_1').animate({
    right: '-=20'
  }, 300, function() {
  });	  
  });
  
});