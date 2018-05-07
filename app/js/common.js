$(function() {
	/*Плавный скролл до якоря */
	$("a[href^='#js']").click(function() {
		var _href = $(this).attr('href');
		$('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
		return false;
	});
	/*аккордеон*/
	var btn = document.querySelectorAll('.btn-link');
	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', function(){
			foo(btn);
		});
	}
	function foo(btn) {
		setTimeout(function() {
			for(var i = 0; i < btn.length; i++){
				if(btn[i].getAttribute('aria-expanded') == 'true'){
					btn[i].nextElementSibling.classList.add("rotate");
				}
				else{
					btn[i].nextElementSibling.classList.remove("rotate");
				}
			}
		}, 50);
	}
	/*show*/
	/*map*/
    // Создает обработчик события window.onLoad
    YMaps.jQuery(function () {
        // Создает экземпляр карты и привязывает его к созданному контейнеру
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
            
        // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
				map.setCenter(new YMaps.GeoPoint(37.64, 55.76), 4);
		});
		document.querySelector('.map-overlay').addEventListener('click', function(){
			this.style.display = 'none';
		});
});
