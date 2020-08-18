
(function () {
  'use strict';
  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          var data = new FormData(this);
          fetch('send.php', {
            method: 'post',
            body: data
          })
            .then(res => {
              if (res.ok) {
                formTaskSuccess();
              } else { formTaskError() }

            });
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

(function () {
  document.getElementsByTagName('video')[0].addEventListener("ended", function () {
    $('video').css({ 'display': 'none' });
    $('.page-header').css({ 'height': '750px' });
    $('.header').css({ 'display': 'block' });
  })
})();

(function () {
  document.getElementsByTagName('video')[0].addEventListener("canplay", function () {
    $('.header').css({ 'display': 'none' });
  })
})();

let value = localStorage.getItem('zorka_cookie');
if (!value) {
  if (document.body.clientWidth >= 768) {
    setTimeout("$('.popup_cookie').css('display', 'flex')", 10000);
  } else {
    setTimeout("$('.popup_cookie').css('display', 'flex')", 1000);
  }
}

$('.popup_cookie button').click(function () {
  $('.popup_cookie').css('display', 'none');
  localStorage.setItem('zorka_cookie', true);
})



$('.window').click(function () {
  $('.window, .thankYou, .popup').css('display', 'none');
})



$('.exit').click(function () {
  $('.popup__checkbox').removeAttr("checked");
  $('.window').css('display', 'none');
  $('.popup').css('display', 'none');
  $('.thankYou').css('display', 'none');
  $('.error-message').css('display', 'none');
  $('.window1').css('display', 'none');
})

$('.contact').click(function () {
  $('.window').css('display', 'block');
  $('.popup').css('display', 'block');
})

$('.lang .fa').click(function () {
  $('.submenu').css({ 'display': 'block' });
  $('.bl_w_world').css({ 'display': 'block' });
})

$('.submenu').click(function () {
  $('.submenu').css({ 'display': 'none' });
  $('.bl_w_world').css({ 'display': 'none' });

});


$('.bl_w_world').click(function () {
  $('.submenu').css({ 'display': 'none' });
  $('.bl_w_world').css({ 'display': 'none' });
})



function formTaskSuccess() {
  $('.popup').css('display', 'none');
  $('.window1').css('display', 'block');
  $('.thankYou').css('display', 'flex');
}

$('.window1').click(function () {
  $('.window').css('display', 'none');
  $('.window1').css('display', 'none');
  $('.thankYou').css('display', 'none');
  $('.error-message').css('display', 'none');

})

function formTaskError() {
  $('.window').css('display', 'none');
  $('.popup').css('display', 'none');
  $('.window1').css('display', 'block');
  $('.error-message').css('display', 'flex');
}













