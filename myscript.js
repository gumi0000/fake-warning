function play_se(){
	var warning = new Audio('Warning-Siren01-4L.mp3');
	var voice = new Audio('warning_text.mp3');
	warning.play();
	voice.play();
	navigator.vibrate([200, 100, 200, 100, 200, 100, 200]);
}

$(function(){


	history.pushState(null, null, null);
	$(window).on('popstate', function(e){
		if(!e.orijinalEvent.state){
			play_se();
			history.pushState(null, null, null);
			return;
		}
	})

	$('.modal').modal({dismissible: false});
	$('#alert').modal('open');
	$('#close').click(function(){
		$('#alert').modal('close');
		play_se();
	})

	var device = navigator.userAgent.match(/Android|iPhone|iPad/);
	if(device == null){
		device = '端末';
	}
	$('#device').text(device);

	var time = 200;
	setInterval(function(){
		time--;
		$('#timer').text(time);
	}, 1000);
	
});
