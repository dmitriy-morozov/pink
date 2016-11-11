$(function() { 
	if ($(window).width() < 699) {

		$(".price__item").removeClass("slider--no-js");
		$(".slider2").removeClass("slider--no-js");


		var slider = $('.slider2'),
    sliderContent = slider.html(),                      // Содержимое слайдера
    slideWidth = $('.slider-box2').outerWidth(),
             // Ширина слайдера
    slideCount = $('.slider2 .price__item').length-1,               // Количество слайдов
    prev = $('.slider-box2 .prev'),                      // Кнопка "назад"
    next = $('.slider-box2 .next'), 
    slideNum = 1,                                       // Номер текущего слайда
    index =0,
    clickBullets=0,
    sliderInterval = 3500,                              // Интервал смены слайдов
    animateTime = 1000,                                 // Время смены слайдов
    course = 1,   
                                          // Направление движения слайдера (1 или -1)
                                          margin = - slideWidth; 

                                 // Первоначальное смещение слайдов

  for (var i=0; i<slideCount; i++)                      // Цикл добавляет буллеты в блок .bullets
  {
    html=$('.bullets2').html() + '<li></li>';          // К текущему содержимому прибавляется один буллет
    $('.bullets2').html(html);                         // и добавляется в код
}
  var  bullets = $('.slider-box2 .bullets2 li')          // Переменная хранит набор буллитов


  $('.slider-box2 .bullets2 li:first').addClass('active');  
  $('.slider2 .price__item:last').clone().prependTo('.slider2');   // Копия последнего слайда помещается в начало.
  $('.slider2 .price__item').eq(2).clone().appendTo('.slider2');   // Копия первого слайда помещается в конец.  
  $('.slider2').css('margin-left', -slideWidth);         // Контейнер .slider сдвигается влево на ширину одного слайда.

  function nextSlide(){                                 // Запускается функция animation(), выполняющая смену слайдов.
  	interval = window.setInterval(animate, sliderInterval);
  }

  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth  && course==1){     // Если слайдер дошел до конца
      slider.css({'marginLeft':-slideWidth});           // то блок .slider возвращается в начальное положение
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  // Если слайдер находится в начале и нажата кнопка "назад"
      slider.css({'marginLeft':-slideWidth*slideCount});// то блок .slider перемещается в конечное положение
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              // Если условия выше не сработали,
      margin = margin - slideWidth*(course);            // значение margin устанавливается для показа следующего слайда
  }
    slider.animate({'marginLeft':margin},animateTime);  // Блок .slider смещается влево на 1 слайд.

    if (clickBullets==0){                               // Если слайдер сменился не через выбор буллета
    bulletsActive();                                // Вызов функции, изменяющей активный буллет
  }else{                                              // Если слайдер выбран с помощью буллета
    slideNum=index+1;                               // Номер выбранного слайда
}
}

function bulletsActive(){
    if (course==1 && slideNum!=slideCount){        // Если слайды скользят влево и текущий слайд не последний
    slideNum++;                                     // Редактирунтся номер текущего слайда
      $('.bullets2 .active').removeClass('active').next('li').addClass('active'); // Изменить активный буллет
  }else if (course==1 && slideNum==slideCount){       // Если слайды скользят влево и текущий слайд последний
    slideNum=1;                                     // Номер текущего слайда
    $('.bullets2 li').removeClass('active').eq(0).addClass('active'); // Активным отмечается первый буллет
    return false;
  }else if (course==-1  && slideNum!=1){              // Если слайды скользят вправо и текущий слайд не последни
    slideNum--;                                     // Редактирунтся номер текущего слайда
      $('.bullets2 .active').removeClass('active').prev('li').addClass('active'); // Изменить активный буллет  
      return false;  
  }else if (course==-1  && slideNum==1){              // Если слайды скользят вправо и текущий слайд последни
    slideNum=slideCount;                            // Номер текущего слайда
    $('.bullets2 li').removeClass('active').eq(slideCount-1).addClass('active'); // Активным отмечается последний буллет
}
}

  function sliderStop(){                                // Функция преостанавливающая работу слайдера      
  	window.clearInterval(interval);
  }

  prev.click(function() {                               // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = -1;                                        // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
});
  next.click(function() {                               // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = 1;                                         // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
});
  bullets.click(function() {                            // Нажат один из буллетов
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация  
  sliderStop();                                       // Таймер на показ очередного слайда выключается
  index = bullets.index(this);                        // Номер нажатого буллета
  if (course==1){                                     // Если слайды скользят влево
    margin=-slideWidth*index;                       // значение margin устанавливается для показа следующего слайда
  }else if (course==-1){                              // Если слайды скользят вправо
  	margin=-slideWidth*index-2*slideWidth;
  }
  $('.bullets2 li').removeClass('active').eq(index).addClass('active');  // Выбранному буллету добавляется сласс .active
  clickBullets=1;                                     // Флаг информирующий о том, что слайд выбран именно буллетом
  animate();
  clickBullets=0;
});

  slider.add(next).add(prev).hover(function() {         // Если курсор мыши в пределах слайдера
    sliderStop();                                       // Вызывается функция sliderStop() для приостановки работы слайдера
  }, nextSlide);                                        // Когда курсор уходит со слайдера, анимация возобновляется.

  nextSlide();  
  
  var width3= $('.slider-box2').outerWidth(); 
  $('.price__item').width(width3);  
  
}       


$(window).resize(function(){
	var width3= $('.slider-box2').outerWidth(); 
	$('.price__item').width(width3);  
});

                              // Вызов функции nextSlide()
                          });




