
var $page = $('html, body');

var maxCurrency = 1000;

let value = localStorage.getItem('zorka_cookie');
if (!value) {

  setTimeout("$('.popup_cookie').css('display', 'flex')", 1000);

}

$('.popup_cookie button').click(function () {
  $('.popup_cookie').css('display', 'none');
  localStorage.setItem('zorka_cookie', true);
})

function openWorld() {

  $('.world').click(function () {
    $('.language').css({ 'display': 'block' });
    $('.bl_w_world').css({ 'display': 'block' });

  })
  $('.language li a').click(function () {
    $('.language').css({ 'display': 'none' });
    $('.bl_w_world').css({ 'display': 'none' });

  });
  $('.bl_w_world').click(function () {
    $('.language').css({ 'display': 'none' });
    $('.bl_w_world').css({ 'display': 'none' });
  })


}
openWorld()


$.fn.exists = function () {
  return $(this).length;
}

if ($('.bl_100').exists()) {
  $(window).scroll(function () {
    // console.log(bl_map.offset().top, $(window).scrollTop())
    if (bl_map.offset().top < $(window).scrollTop() + 300) {
      $('#arb_num1').animate({ num: 100 /* - начало */ }, {
        duration: 5000,
        step: function (num) {
          this.innerHTML = (num + 0).toFixed(0) + '+ '
        }
      });
      $('#arb_num2').animate({ num: 10000 /* - начало */ }, {
        duration: 5000,
        step: function (num) {
          this.innerHTML = (num + 0).toFixed(0).substring(0, 2) + '' + (num + 0).toFixed(0).substring(2, 5) + '+  '
        }
      });
    }
  });
}
if ($('.arrow_menu').exists()) {

  // console.dir($('.arrow_menu._about_us a'))

  if ($('.arrow_menu._about_us a').hasClass("active_menu")) {


    $('.arrow_menu._about_us a').eq(0).css('margin', '13px 20px 0 515px');
    $('.arrow_menu._about_us a').eq(1).css('margin', '0');

  }


}

if ($('#arrows_network').exists()) {
  var animationData = { "v": "5.1.13", "fr": 30, "ip": 0, "op": 450, "w": 500, "h": 500, "nm": "arrow", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "arrow Outlines 3", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "n": ["0p667_1_0p333_0"], "t": 10, "s": [100], "e": [0] }, { "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "n": ["0p667_1_0p333_0"], "t": 30, "s": [0], "e": [0] }, { "t": 45 }], "ix": 11, "x": "var $bm_rt;\n$bm_rt = loopOut('cycle', 0);" }, "r": { "a": 0, "k": 0, "ix": 10, "x": "var $bm_rt;\n$bm_rt = transform.rotation;" }, "p": { "a": 0, "k": [250, 269.5, 0], "ix": 2 }, "a": { "a": 0, "k": [62.5, 62.5, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "x": "var $bm_rt;\n$bm_rt = transform.scale;" } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[34.688, -22.033], [-0.041, 2.713], [-34.688, -21.905], [-34.688, -2.582], [-0.041, 22.033], [34.688, -2.625]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [62.811, 68.756], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 2, "cix": 2, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 10, "op": 460, "st": 10, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "arrow Outlines 2", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "n": ["0p667_1_0p333_0"], "t": 5, "s": [100], "e": [0] }, { "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "n": ["0p667_1_0p333_0"], "t": 25, "s": [0], "e": [0] }, { "t": 40 }], "ix": 11, "x": "var $bm_rt;\n$bm_rt = loopOut('cycle', 0);" }, "r": { "a": 0, "k": 0, "ix": 10, "x": "var $bm_rt;\n$bm_rt = transform.rotation;" }, "p": { "a": 0, "k": [250, 239, 0], "ix": 2 }, "a": { "a": 0, "k": [62.5, 62.5, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "x": "var $bm_rt;\n$bm_rt = transform.scale;" } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[34.688, -22.033], [-0.041, 2.713], [-34.688, -21.905], [-34.688, -2.582], [-0.041, 22.033], [34.688, -2.625]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [62.811, 68.756], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 2, "cix": 2, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 5, "op": 455, "st": 5, "bm": 0 }, { "ddd": 0, "ind": 3, "ty": 4, "nm": "arrow Outlines", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "n": ["0p667_1_0p333_0"], "t": 0, "s": [100], "e": [0] }, { "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "n": ["0p667_1_0p333_0"], "t": 20, "s": [0], "e": [0] }, { "t": 35 }], "ix": 11, "x": "var $bm_rt;\n$bm_rt = loopOut('cycle', 0);" }, "r": { "a": 0, "k": 0, "ix": 10, "x": "var $bm_rt;\n$bm_rt = transform.rotation;" }, "p": { "a": 0, "k": [250, 209, 0], "ix": 2 }, "a": { "a": 0, "k": [62.5, 62.5, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "x": "var $bm_rt;\n$bm_rt = transform.scale;" } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[34.688, -22.033], [-0.041, 2.713], [-34.688, -21.905], [-34.688, -2.582], [-0.041, 22.033], [34.688, -2.625]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [62.811, 68.756], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 2, "cix": 2, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 450, "st": 0, "bm": 0 }], "markers": [] };
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('arrows_network'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData
  })
  var arrows_network_click = document.getElementById("arrows_network_click");

}

if ($('.bl_map').exists()) {
  var bl_map = $('.bl_map');
  var pointsMap = document.querySelectorAll('.cell');
  // document.addEventListener("DOMContentLoaded", function(event) {
  // console.log('pointsMap', pointsMap);
  pointsMap.forEach(function (item, i, arr) {
    setTimeout(function () {
      item.classList.add('_animation');
      if (i) {
        // arr[i-1].classList.remove('_animation');
      }

    }, (i + 1) * 500);
  });
  setInterval(function () {
    pointsMap.forEach(function (item, i, arr) {
      arr[i].classList.remove('_animation');
    });
    pointsMap.forEach(function (item, i, arr) {
      setTimeout(function () {
        item.classList.add('_animation');
        if (i) {
          // arr[i-1].classList.remove('_animation');
        }

      }, (i + 1) * 500);
    });
  }, pointsMap.length * 500);

}


if ($('#bl_traffic').exists()) {


  var bl_traffic = document.getElementById("bl_traffic");

  bl_traffic.addEventListener('click', function (event) {
    var target = event.target;

    while (target != bl_traffic) {
      if (target.tagName == 'SPAN') {
        target.parentNode.lastElementChild.classList.toggle('filter');
      }
      break;
    }
    target = target.parentNode;

  });
  var bl_georaphy = document.getElementById("bl_georaphy");

  bl_georaphy.addEventListener('click', function (event) {
    var target = event.target;

    while (target != bl_georaphy) {
      if (target.tagName == 'SPAN') {
        target.parentNode.lastElementChild.classList.toggle('filter');
      }
      break;
    }
    target = target.parentNode;
    // console.log(target)

  });
}



if ($('.responsive').exists()) {
  $('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });
}

//-------popup cookie--------


if ($('.pop_up_cookie').exists()) {
  if (document.body.clientWidth >= 1023) {
    $('.close_cookie').click(function () {
      $('.pop_up_cookie').css('display', 'none');
      $.request('onSetCookieInfo');
    })
  }
}


if ($('.gambing_wp').exists()) {
  if (document.body.clientWidth >= 1023) {
    window.onload = function () {

      setTimeout(openGambing, 5000);


      function openGambing() {
        console.log('dfggfdgfdg')
        $('.gambing_wp').css('display', 'block');
      }
      $('.close_cookie_g').click(function () {
        $('.gambing_wp').css('display', 'none');
        $.request('onSetGambling');
      })
      function timeToEvent(eventDate) {
        var now = new Date();
        var output = '';
        // количество дней до события
        var daystoED = Math.floor(Math.round(eventDate - now) / 86400000);
        daystoED = (daystoED < 1) ? "0" + daystoED : daystoED;
        // количество часов до события
        var hourstoED = 24 - now.getHours() - 1;
        hourstoED = (hourstoED < 10) ? "0" + hourstoED : hourstoED;
        // количество минут до события
        var minutestoED = 60 - now.getMinutes() - 1;
        minutestoED = (minutestoED < 10) ? "0" + minutestoED : minutestoED;
        // количество секунд до события
        var secondstoED = 60 - now.getSeconds() - 1;
        secondstoED = (secondstoED < 10) ? "0" + secondstoED : secondstoED;
        //сообщение
        //  output = daystoED+" дн. "+hourstoED+" час. "+minutestoED+" мин. "+secondstoED+" сек.";
        output = [String(daystoED), String(hourstoED), String(minutestoED), String(secondstoED)];
        return output;
      }
      // }

      // текущая дата
      var now = new Date();
      // дата предстоящего события (год, месяц, число)
      var eventDate = new Date(2018, 4, 16);
      var span = document.getElementById('timetoevent');
      var wrap = document.querySelector('.time-wp');
      var div = document.getElementById('event-mess');
      // если событие еще не наступило
      if (now < eventDate) {
        // div.firstChild.nodeValue = text;
        window.setInterval(function () {
          var temp = timeToEvent(eventDate);
          wrap.innerHTML = `<div class="time_item">
                        <div class="time-title">дней</div>
                        <div class="time">
                            <p>${temp[0][0]}</p>
                        </div>
                        <div class="time">
                            <p>${temp[0][1]}</p>
                        </div>
                    </div>
                    <span>:</span>
                    <div class="time_item">
                        <div class="time-title">часов</div>
                        <div class="time">
                            <p>${temp[1][0]}</p>
                        </div>
                        <div class="time">
                            <p>${temp[1][1]}</p>
                        </div>
                    </div>
                    <span>:</span>
                    <div class="time_item">
                        <div class="time-title">минут</div>
                        <div class="time">
                            <p>${temp[2][0]}</p>
                        </div>
                        <div class="time">
                            <p>${temp[2][1]}</p>
                        </div>
                    </div>
                    <span>:</span>
                    <div class="time_item">
                        <div class="time-title">секунд</div>
                        <div class="time">
                            <p>${temp[3][0]}</p>
                        </div>
                        <div class="time">
                            <p>${temp[3][1]}</p>
                        </div>
                    </div>`;
        }, 1000);
      }
    }
  }

}


//--------scroll-----------------------



if ($('.get_tabs').exists()) {

  $(window).scroll(function () {

    if ($(window).scrollTop() > 1540 && !($('#container2 svg').exists())) {

      var bar = new ProgressBar.Circle(container2, {
        color: '#fff',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#ffffff', width: 4 },
        to: { color: '#ffffff', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value + '%');
          }

        }

      });
      bar.text.style.fontFamily = '"MontserratBold"';
      bar.text.style.fontSize = '50px';

      bar.animate(1.0);  // Number from 0.0 to 1.

    }

  })


  if (document.body.clientWidth >= 1023) {


    var windowHeight = $(window).height();
    var tabAnimateHeight = $('#tab_animate').height();
    var blGetHeight = $('.bl_get').height();
    var sceneHeight = $('#scene').height();
    var blServicesHeight = $('.bl_services').height();

    var tabImgHeight = $('.tab_img').height();
    $('.tab_img').css({
      top: 50
    });

    $(window).on('scroll', function () {

      var scrolled = $(this).scrollTop();
      var posElem = $('.bl_get').offset().top;


      if ((posElem - scrolled) <= 0 && (posElem - scrolled) > -((blGetHeight / 3) * 2)) {

        $('#tab_animate').removeAttr('style');
        $('#tab_animate').css({
          position: 'fixed',
          // top: ((windowHeight-tabAnimateHeight)/2)+-(posElem-scrolled)+50
          top: (((windowHeight - tabAnimateHeight) / 2) + 50)
        });
        $('.tab_img').removeAttr('style');
        $('.tab_img').css({
          // top: 60+(windowHeight-tabImgHeight)+-(posElem-scrolled)
          position: 'fixed',
          bottom: -50
        });
      }

      if ((posElem - scrolled) > 0) {

        $('#tab_animate').removeAttr('style');
        $('#tab_animate').css({
          top: 170
        });
        $('.tab_img').removeAttr('style');
        $('.tab_img').css({
          top: 70 + (windowHeight - tabImgHeight)
        });
      }

      if (scrolled > (sceneHeight + sceneHeight + blGetHeight) - (windowHeight)) {

        $('#tab_animate').removeAttr('style');
        $('#tab_animate').css({
          bottom: 150
        });

        $('.tab_img').removeAttr('style');
        $('.tab_img').css({
          bottom: -50
        });
      }

    });

  }

}



//----------------------------------


if ($('#accordion').exists()) {


  var accordion = document.getElementById("accordion");

  accordion.addEventListener('click', function (event) {
    var target = event.target;

    while (target != accordion) {

      // console.log(target.classList);
      if (target.classList[1] == '_active_serv') {

        if (target.nextElementSibling.classList.contains("open")) {
          target.nextElementSibling.classList.remove("open");
          target.classList.remove("_active_serv");

        }
        break;
      }
      if (target.classList[0] == 'bt_accordion') {
        delClass();
        target.nextElementSibling.classList.add("open");
        target.classList.add("_active_serv");
        // target.scrollIntoView(top);
      }

      target = target.parentNode;
    }
  });

  function delClass() {

    var temp = document.getElementsByClassName("open");

    var temp2 = document.getElementsByClassName("_active_serv");
    // console.log(temp2.child('i'));


    for (var i = 0; i < temp.length; i++) {
      temp[i].classList.remove("open");
      temp2[i].classList.remove("_active_serv");
    }

  }
}




// var clientWidth = document.body.clientWidth;
//   if (clientWidth > 991){

//--------------------------анимация табом 2го блока------------------

if (document.body.clientWidth >= 1024) {
  if ($('#get1').exists()) {

    var bl = document.getElementById('bl');
    bl.onwheel = function (e) {

      var delta = e.deltaY || e.detail || e.wheelDelta;
      if (delta > 0) {

        $(window).on('scroll', function () {

          if (($(window).scrollTop() >= 2300) && (!$('._animate_tab1').exists())) {
            $('.get_tabs').addClass('top');
            $('.get_tabs').addClass('_animate_tab1');
            $('#num').animate({ num: 0.35 - 5/* - начало */ }, {
              duration: 5000,
              step: function (num) {
                this.innerHTML = (num + 5).toFixed(2) + ' $'
              }
            });
            $('#num2').animate({ num: 15000/* - начало */ }, {
              duration: 5000,
              step: function (num) {
                this.innerHTML = (num + 0).toFixed(0).substring(0, 2) + (num + 0).toFixed(0).substring(2, 5) + ' +'
              }
            });
            $('#num3').animate({ num: 20000 /* - начало */ }, {
              duration: 5000,
              step: function (num) {
                this.innerHTML = (num + 0).toFixed(0).substring(0, 2) + (num + 0).toFixed(0).substring(2, 5) + ' +'
              }
            });

          }
          if (($(window).scrollTop()) >= 3000 && (!$('._animate_tab2').exists())) {
            $('.get_tabs').addClass('_animate_tab2');
            setTimeout(function () {
              $('.line1_wp').animate({ width: 27 });

            }, 0);
            setTimeout(function () {
              $('.line2_wp').animate({ width: 194 });
            }, 900);
            setTimeout(function () {
              $('.dot').eq(1).css({ 'display': 'block' });

            }, 1200);
            setTimeout(function () {
              $('.line3_wp').animate({ width: 129 });

            }, 2000);
            setTimeout(function () {
              $('.dot').eq(2).css({ 'display': 'block' });

            }, 2200);
            setTimeout(function () {
              $('.dot').eq(0).css({ 'display': 'block' });
            }, 3200);

          }
        })
      }

      if (delta < 0) {

        $(window).on('scroll', function () {

          // -------if top ---------

          if (($(window).scrollTop() < 3300) && ($('.top').exists())) {
            if (($(window).scrollTop() < 1600) && ($('._animate_tab1').exists())) {
              $('.get_tabs').removeClass('_animate_tab1');
            }
            if (($(window).scrollTop()) < 2500 && ($('._animate_tab2').exists())) {
              $('.get_tabs').removeClass('_animate_tab2');

            }
          }

          //-------if bottom ---------

          if (($(window).scrollTop() < 3300) && (!$('.top').exists())) {


            if (($(window).scrollTop()) < 3300 && (!$('._animate_tab2').exists()) && ($(window).scrollTop()) > 2480) {

              $('.get_tabs').addClass('_animate_tab1');
              $('.get_tabs').addClass('_animate_tab2');

              setTimeout(function () {
                $('.line1_wp').animate({ width: 27 });
              }, 0);
              setTimeout(function () {
                $('.line2_wp').animate({ width: 194 });
              }, 900);
              setTimeout(function () {
                $('.dot').eq(1).css({ 'display': 'block' });
              }, 1200);
              setTimeout(function () {
                $('.line3_wp').animate({ width: 129 });
              }, 2000);
              setTimeout(function () {
                $('.dot').eq(2).css({ 'display': 'block' });
              }, 2200);
              setTimeout(function () {
                $('.dot').eq(0).css({ 'display': 'block' });
              }, 3200);


            }
            if (($(window).scrollTop() < 2480) && ($('._animate_tab2').exists())) {

              $('.get_tabs').removeClass('_animate_tab2');
              $('#num').animate({ num: 0.35 /* - начало */ }, {
                duration: 5000,
                step: function (num) {
                  this.innerHTML = (num + 0).toFixed(2) + ' $'
                }
              });
              $('#num2').animate({ num: 15000/* - начало */ }, {
                duration: 5000,
                step: function (num) {
                  this.innerHTML = (num + 0).toFixed(0).substring(0, 2) + (num + 0).toFixed(0).substring(2, 5) + ' +'
                }
              });
              $('#num3').animate({ num: 20000 /* - начало */ }, {
                duration: 5000,
                step: function (num) {
                  this.innerHTML = (num + 0).toFixed(0).substring(0, 2) + (num + 0).toFixed(0).substring(2, 5) + ' +'
                }
              });

            }
            if (($(window).scrollTop() < 1880) && ($('._animate_tab1').exists())) {

              $('.get_tabs').removeClass('_animate_tab1');
            }

          }

        })

      }
    }

  }
}





$('.topOffer').click(function () {
  $('.bl_window, #successTask, #formTop, #formTask').css('display', 'none');
})
$('.bl_window').click(function () {
  $('.bl_window, #successTask, #formTop, #formTask').css('display', 'none');
})
$('.exit').on('click', function () {
  $('.popup__checkbox').removeAttr("checked");
  $('.bl_window, #successTask, #formTop, #formTask').css('display', 'none');
})
$('.btTask').click(function () {
  $('.bl_window').css('display', 'block');
  $('#formTask').css('display', 'block');
  $('.error_tx').removeClass('visible');
  $('select, input, textarea').removeClass('error_val').val('');
  $('body').addClass('hidden-scroll');
})

if ($('.exit').exists()) {
  $('.exit').click(function () {
    $('.popup__checkbox').removeAttr("checked");
    $('.bl_window').css('display', 'none');
    $('#formTask').css('display', 'none');
    $('#formMeet').css('display', 'none');
    $('#formMap').css({ 'z-index': '-200', 'opacity': '0' });
    $('#successMeet').css('display', 'none');
    $('#successTask').css('display', 'none');
    $('body').removeClass('hidden-scroll');
  })
  $('.bl_window').click(function () {
    $('.popup__checkbox').removeAttr("checked");
    $('.bl_window').css('display', 'none');
    $('#formTask').css('display', 'none');
    $('#formMeet').css('display', 'none');
    $('#formMap').css({ 'z-index': '-200', 'opacity': '0' });
    $('#successMeet').css('display', 'none');
    $('body').removeClass('hidden-scroll');
    $('#successTask').css('display', 'none');
  })
}

if ($('.btMeet').exists()) {
  $('.btMeet').click(function () {
    $('.bl_window').css('display', 'block');
    $('#formMeet').css('display', 'block');
    $('select, input, textarea').removeClass('error_val').val('');
    $('.error_tx').removeClass('visible');
    $('body').addClass('hidden-scroll');
  })

  // валидация форм



}
if ($('.btMap').exists()) {
  $('.btMap').click(function () {
    $('.bl_window').css('display', 'block');
    $('#formMap').css({ 'z-index': '200', 'opacity': '1' });
  });

  $('.bl_window').click(function () {
    $('.bl_window').css('display', 'none');
    $('#formMap').css({ 'z-index': '-200', 'opacity': '0' });
  })


  function initMap() {
    var uluru = { lat: 53.902159, lng: 27.549699 };
    var map = new google.maps.Map(document.getElementById('formMap_wp'), {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
      // icon: { url:"../images"}
    });
  }

  initMap();

}


function screenWidth() {
  var clientWidth = document.body.clientWidth;
  if (clientWidth >= 1025) {
    $(window).scroll(function () {


      if ($(window).scrollTop() >= 790) {
        $('.header_white').css('display', 'block');
      }
      if ($(window).scrollTop() <= 790) {
        $('.header_white').css('display', 'none');
      }
    });
  }
  if (clientWidth < 1025) {
    $('.header_white').css('display', 'block');
    $('.header_rouge').css('display', 'none');
    $(".map").attr("src", "https://zorka.mobi/themes/zorka/assets/images/map17.png");
  }
}


screenWidth();

var popup_menu_click = true;

$('.menu_button').click(function () {
  if (popup_menu_click) {
    $('.menu_button').addClass('is-active');
    $('.menu_button').css('right', '0px');
    $('.full_black').css('display', 'block');
    // $('.img_logo_bw').css('background','#ffffff');
    $('.pop_up_menu').css('display', 'block');
    document.body.style.overflow = 'hidden';

    popup_menu_click = false;
  } else {
    $('.menu_button').removeClass('is-active');
    $('.pop_up_menu').css('display', 'none');
    $('.menu_button').removeAttr('style');
    $('.full_black').css('display', 'none');
    // $('.img_logo_bw').css({'background':'url(images/logo1.svg) no-repeat', 'background-size' : 'cover'});
    popup_menu_click = true;
    document.body.style.overflow = 'scroll';


  }

});


if ($('#carousel-example-generic').exists()) {
  $("#carousel-example-generic").carousel({
    swipe: 30,// percent-per-second, default is 50. Pass false to disable swipe
    interval: 10000
  });
}



function animateShow() {
  var clientWidth = document.body.clientWidth;
  if (clientWidth > 991) {



    $.fn.exists = function () {
      return $(this).length;
    }
    if ($('#particles-js').exists()) {

      particlesJS("particles-js", {
        "particles": {
          "number": { "value": 63, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#fca7c5" },
          "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" },
            "polygon": { "nb_sides": 4 },
            "image": { "src": "img/github.svg", "width": 100, "height": 100 }
          },
          "opacity": {
            "value": 0.14204657549380909,
            "random": false,
            "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
          },
          "size": {
            "value": 4.008530152163807,
            "random": true,
            "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
          },
          "line_linked": {
            "enable": true,
            "distance": 157.82952832645452,
            "color": "#fca7c5",
            "opacity": 0.4,
            "width": 1.4430708547789706
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": { "enable": false, "mode": "repulse" },
            "onclick": { "enable": false, "mode": "push" },
            "resize": true
          },
          "modes": {
            "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
            "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
            "repulse": { "distance": 200, "duration": 0.4 },
            "push": { "particles_nb": 4 },
            "remove": { "particles_nb": 2 }
          }
        },
        "retina_detect": true
      });
      var count_particles, stats, update;
      stats = new Stats;
      stats.setMode(0);
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';
      document.body.appendChild(stats.domElement);
      count_particles = document.querySelector('.js-count-particles');
      update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
          count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);


    }


    //--------------------animation(scale)----

    var $document = $(document),
      $window = $(window),
      $html = $document.find('html'),
      $body = $html.find('body'),
      why_animate = $body.find('.why_animate'),
      support_animate = $body.find('.support_animate'),
      bl_about = $body.find('.bl_about'),
      bl_about2 = $body.find('.bl_about2'),
      list_expe = $body.find('.list_expe'),
      firm_animate = $body.find('.bl_firm'),
      bl_100 = $body.find('.bl_100');





    if ($('.bl_expe').exists()) {
      $window
        .on('scroll.animateExpe', function () {

          if (list_expe.offset().top < $window.scrollTop() + window.innerHeight - 150) {
            list_expe.addClass('_animate');
            setTimeout(function () {
              list_expe.addClass('_animated');
            }, 5000);
            $window.off('scroll.animateExpe');
          }
        });


    }

    if ($('.why_animate').exists()) {
      $window
        .on('scroll.animateWhy', function () {

          if (why_animate.offset().top < $window.scrollTop() + window.innerHeight - 150) {
            why_animate.addClass('_animate');
            setTimeout(function () {
              why_animate.addClass('_animated');
            }, 8000);
            $window.off('scroll.animateWhy');
          }
        });
    }

    if ($('.support_animate').exists()) {
      $window
        .on('scroll.animateSupport', function () {

          if (support_animate.offset().top < $window.scrollTop() + window.innerHeight - 150) {
            support_animate.addClass('_animate');
            setTimeout(function () {
              support_animate.addClass('_animated');
            }, 3500);
            $window.off('scroll.animateSupport');
          }
        });
    }

    if ($('.bl_about').exists()) {
      $window
        .on('scroll.animateAbout', function () {

          if (bl_about.offset().top < $window.scrollTop() + window.innerHeight - 150) {
            bl_about.addClass('_animate');
            setTimeout(function () {
              bl_about.addClass('_animated');
            }, 3500);
            $window.off('scroll.animateAbout');
          }
        });

    }

    if ($('.bl_about2').exists()) {
      $window
        .on('scroll.animateAbout2', function () {

          if (bl_about2.offset().top < $window.scrollTop() + window.innerHeight - 150) {
            bl_about2.addClass('_animate');
            setTimeout(function () {
              bl_about2.addClass('_animated');
            }, 3500);
            $window.off('scroll.animateAbout2');
          }
        });
    }


    if ($('.bl_firm').exists()) {
      $window
        .on('scroll.animateFirm', function () {

          if (firm_animate.offset().top < $window.scrollTop() + window.innerHeight - 150) {
            firm_animate.addClass('_animate');
            setTimeout(function () {
              firm_animate.addClass('_animated');
            }, 5000);
            $window.off('scroll.animateFirm');
          }
        });
    }


  }
}

$('.bt_successTask, #bt_successMeet').on('click', function () {
  $(this).addClass('btnFormValidate');
});



// var sendBtn  = document.getElementById('bt_successMeet');
var flag = true



$('select').on('click', function () {
  var valselect = $(this).val();
  if (!$(this).val()) {
    $(this).addClass('error_val');
  }
  if ($('.btnFormValidate').exists()) {
    var form = $(this).parent();
    if (!(form.find('.error_val').length)) {
      $(form.find('.error_tx')).removeClass('visible');
    } else {
      $(form.find('.error_tx')).addClass('visible');
    }
  }

});

$('select').on('change', function () {
  var valselect = $(this).val();
  if ($(this).val()) {
    $(this).removeClass('error_val');
  } else {
    $(this).addClass('error_val');
  }
  if ($('.btnFormValidate').exists()) {
    var form = $(this).parent();
    if (!(form.find('.error_val').length)) {
      $(form.find('.error_tx')).removeClass('visible');
    } else {
      $(form.find('.error_tx')).addClass('visible');
    }
  }
});



$('.exit_grey, .bl_window, .exit').on('click', function () {
  $('.popup__checkbox').removeAttr("checked");
  $('.bt_successTask').removeClass('btnFormValidate');
  $('#bt_successMeet').removeClass('btnFormValidate');
  $('select, input, textarea').removeClass('error_val').val('');
  $('.error_tx').removeClass('visible');
})







animateShow();



(function () {
  var hash = window.location.search.slice(1);
  // console.log(hash);
  if (hash.split('&').length > 1) {
    hash = hash.split('&')[0];


  }
  var el = document.getElementById(hash);

  function scrollToElement(theElement) {
    var selectedPosX = 0;
    var selectedPosY = 0;
    while (theElement != null) {
      selectedPosX += theElement.offsetLeft;
      selectedPosY += theElement.offsetTop;
      theElement = theElement.offsetParent;
    }
    window.scrollTo(selectedPosX, selectedPosY - 110);
  }


  if (el) {
    scrollToElement(el);
  }
})();




/* слайдер цен */
if ($('.offer_table').exists()) {


  $('#btTraffic').click(function () {
    $('#formTraffic, .bg_check').css({ 'display': 'block' });
  })
  $('#btGeography').click(function () {
    $('#formGeography, .bg_check').css({ 'display': 'block' });

  })
  $('.bg_check, .header_base, .exit').click(function () {
    $('#formTraffic, #formGeography, .bg_check, #formTop').css({ 'display': 'none' });

  })
  $('.circle_of').click(function () {
    $('#formTop, .bl_window').css({ 'display': 'block' });

  })
}


function head_line_close() {
  $('#cookiesText').css('display', 'none');
  $('.bl_title').css('padding', '140px 0 30px')
  $.request('onSetCookie');
}

if ($('#cookiesText').css('display') === "block") {
  $('.bl_title').css('padding', '173px 0 30px');
}