

i18next.use(i18nextBrowserLanguageDetector).init({
  fallbackLng: 'ru',
  debug: true,
  resources: {
    en: {
      translation: {
        "Lang": "EN",
        "Log in": "Log in",
        "Sign up": "Sign up",
        "Our offers": "Our Offers",
        "Our rewards": "Our Awards",
        "Your trusted affiliate network": "Your trusted<br> affiliate network",
        "Become our affiliate and start earning": "Become our affiliate<br> and start earning",
        "Show all offers": "Show all offers",
        "Only direct offers": "Only direct offers",
        "Weekly payouts": "Weekly<br> payouts",
        "Real-time optimization": "Real-time optimization",
        "Access to MMP": "Access to MMP",
        "for integrated partners": "AppsFlyer, Adjust, Kochava,<br> Branch - for integrated<br> partners",
        "Smartlink technology": "Smartlink technology",
        "Focus on getting traffic while smartlinks increase conversion": "Focus on getting<br> traffic while smartlinks<br> increase conversion",
        "reliable affiliate network": "Zorka.Network is a reliable affiliate network, where the interests of partners always come first.",
        "Contact us": "Contact us",
        "Ilya Kononovich": "Ilya Kononovich",
        "Privacy Policy": "Privacy Policy",
        "Terms & Conditions": "Terms & Conditions",
        "Name": "Name",
        "Company": "Company/Team",
        "Email": "Email",
        "How did you discover us?": "How did you discover us?",
        "Recommendation": "Recommendation",
        "Media sources": "Media sources",
        "Web Search": "Web Search",
        "Social networks": "Social networks",
        "Conference": "Conference",
        "Your message": "Your message",
        "I have read and agree to the": "I have read and agree to the",
        "Or": "Or",
        "Send": "Send",
        "Terms and Conditions": "Terms & Conditions",
        "Thank you": "Thank you!",
        "You'll hear from us soon": "Soon we'll<br>get in touch with you",
        "Oops!": "Oops!<br> Something went wrong",
        "No internet connection": "Internet connection problem<br>Please check your Internet connection and try again",
        "This website uses cookies": "This website uses",
        "Accept": "Accept"

      }
    },
    ru: {
      translation: {
        "Lang": "RU",
        "Log in": "Вход",
        "Sign up": "Регистрация",
        "Our offers": "Наши Офферы",
        "Our rewards": "Наши Награды",
        "Your trusted affiliate network": "Твоя надежная<br> партнерская сеть",
        "Become our affiliate and start earning": "Стань партнером<br> и начни зарабатывать",
        "Show all offers": "Смотреть Офферы",
        "Only direct offers": "Только прямые офферы",
        "Weekly payouts": "Выплаты<br> еженедельно",
        "Real-time optimization": "Real-time оптимизация",
        "Access to MMP": "Доступ к MMP",
        "for integrated partners": "AppsFlyer, Adjust, Kochava,<br> Branch - для интегрированных<br>партнеров",
        "Smartlink technology": "Smartlink-технология",
        "Focus on getting traffic while smartlinks increase conversion": "Сфокусируйтесь на добыче<br>трафика, пока смартлинки<br>увеличивают конверсию",
        "reliable affiliate network": "Zorka.Network является надежной сетью, которая превыше всего ставит интересы своих партнеров.",
        "Contact us": "Напиши Нам",
        "Ilya Kononovich": "Илья Кононович",
        "Privacy Policy": "Политика Конфиденциальности",
        "Terms & Conditions": "Условия Пользования",
        "Name": "Имя",
        "Company": "Компания/Команда",
        "Email": "Email",
        "How did you discover us?": "Откуда вы узнали о нас?",
        "Recommendation": "Рекомендации",
        "Media sources": "СМИ",
        "Web Search": "Поиск в интернете",
        "Social networks": "Социальные сети",
        "Conference": "Конференции",
        "Your message": "Опишите, пожалуйста, задачу проекта, KPI и др.",
        "I have read and agree to the": "Я принимаю условия",
        "Or": "Или",
        "Send": "Отправить",
        "Terms and Conditions": "пользовательского соглашения",
        "Thank you": "Спасибо!",
        "You'll hear from us soon": "Мы скоро<br> с вами свяжемся",
        "Oops!": "Упс!<br> Что-то пошло не так",
        "No internet connection": "Отсутствует интернет-соединение<br>проверьте подключение к сети<br> и повторите попытку",
        "This website uses cookies": "Наш сайт использует",
        "Accept": "Я понимаю"
      }
    }
  }

}, function (err, t) {
  // init set content
  updateContent();

});

function updateContent() {
  document.getElementById('registration_button').innerHTML = i18next.t('Sign up');
  document.getElementById('enter_button').innerHTML = i18next.t('Log in');
  document.querySelector('.lang').firstElementChild.innerHTML = i18next.t('Lang');
  document.getElementById('enter').innerHTML = i18next.t('Log in');
  document.getElementById('registration').innerHTML = i18next.t('Sign up');
  document.querySelector('.header').firstElementChild.innerHTML = i18next.t('Your trusted affiliate network');
  document.querySelector('.page-header').lastElementChild.innerHTML = i18next.t('Become our affiliate and start earning');
  document.querySelector('.showOffMob').innerHTML = i18next.t('Show all offers');
  document.getElementById('show_all_offers').innerHTML = i18next.t('Show all offers');
  document.querySelector('.why-point-list').firstElementChild.querySelector('h3').innerHTML = i18next.t('Only direct offers');
  document.querySelector('.why-point-list').lastElementChild.querySelector('h3').innerHTML = i18next.t('Smartlink technology');
  document.querySelector('.why-point-list').lastElementChild.querySelector('p').innerHTML = i18next.t('Focus on getting traffic while smartlinks increase conversion');
  document.querySelector('.optimization h3').innerHTML = i18next.t('Real-time optimization');
  document.querySelector('.optimization h4').innerHTML = i18next.t('Access to MMP');
  document.querySelector('.optimization p').innerHTML = i18next.t('for integrated partners');
  document.querySelector('.why-point-list .second-point h3').innerHTML = i18next.t('Weekly payouts');
  document.getElementById('ourOffers').innerHTML = i18next.t('Our offers');
  document.getElementById('ourRewards').innerHTML = i18next.t('Our rewards');
  document.querySelector('.result').firstElementChild.innerHTML = i18next.t('reliable affiliate network');
  document.getElementById('send_contacts_network').innerHTML = i18next.t('Contact us');
  document.querySelector('.contact_mob').innerHTML = i18next.t('Contact us');
  document.getElementById('director').innerHTML = i18next.t('Ilya Kononovich');
  document.querySelector('footer ul li:nth-child(1) a').innerHTML = i18next.t('Terms & Conditions');
  document.querySelector('footer ul').lastElementChild.querySelector('a').innerHTML = i18next.t('Privacy Policy');
  document.querySelector('.option_value_popup p').innerHTML = i18next.t('I have read and agree to the');
  document.querySelector('.option_value_popup a').innerHTML = i18next.t('Terms and Conditions');
  document.querySelector('.or').innerHTML = i18next.t('Or');
  document.getElementById('send_order_popup').innerHTML = i18next.t('Send');
  document.querySelector('#task_source option:nth-child(1)').innerHTML = i18next.t('How did you discover us?');
  document.querySelector('#task_source option:nth-child(2)').innerHTML = i18next.t('Recommendation');
  document.querySelector('#task_source option:nth-child(3)').innerHTML = i18next.t('Media sources');
  document.querySelector('#task_source option:nth-child(4)').innerHTML = i18next.t('Web Search');
  document.querySelector('#task_source option:nth-child(5)').innerHTML = i18next.t('Social networks');
  document.querySelector('#task_source option:nth-child(6)').innerHTML = i18next.t('Conference');
  document.getElementById('task_name').placeholder = i18next.t('Name');
  document.getElementById('task_company').placeholder = i18next.t('Company');
  document.getElementById('task_email').placeholder = i18next.t('Email');
  document.getElementById('task_msg').placeholder = i18next.t('Your message');
  document.querySelector('.thankYou h2').innerHTML = i18next.t('Thank you');
  document.querySelector('.thankYou p').innerHTML = i18next.t("You'll hear from us soon");
  document.querySelector('.error-message h2').innerHTML = i18next.t('Oops!');
  document.querySelector('.error-message p').innerHTML = i18next.t('No internet connection');
  document.querySelector('.popup_cookie p').innerHTML = i18next.t('This website uses cookies');
  document.querySelector('.popup_cookie button').innerHTML = i18next.t('Accept');


  if (i18next.language == 'ru') {
    $('.ru').css('display', 'none');
    $('.en').css('display', 'block');

  } else {
    $('.en').css('display', 'none');
    $('.ru').css('display', 'block');
  };
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
}
)

let linkEls = document.querySelectorAll('.change_language');

function changelng(data) {
  if (data == null)
    return;

  i18next.changeLanguage(data);
}

function clickHandler(event) {
  var lang = event.target.getAttribute('href').split('/').pop(),
    data = lang || null;

  changelng(data);
  history.pushState(data, event.target.textContent, data);

  return event.preventDefault();
}

for (var i = 0, l = linkEls.length; i < l; i++) {
  linkEls[i].addEventListener('click', clickHandler, true);
}
window.addEventListener('popstate', function (event) {
  console.log('popstate fired!');

  changelng(event.state);
});

