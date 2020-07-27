

i18next.use(i18nextBrowserLanguageDetector).init({
  fallbackLng: 'ru',
  debug: true,
  resources: {
    en: {
      translation: {
        "Lang": "EN",
        "Log in": "Log in",
        "Sign up": "Sign up",
        "Show more": "Show more",
        "Apply": "Apply",
        "Search": "Search →",
        "Geography": "Geography",
        "Traffic source": "Traffic source",
        "Get a link": "Get a link",
        "Offer": "Offer",
        "Deductions": "Deductions",
        "Privacy Policy": "Privacy Policy",
        "Terms & Conditions": "Terms & Conditions",
        "Enter a search query": "Enter a search query",
        "This website uses cookies": "This website uses",
        "Accept": "Accept"
      }
    },
    ru: {
      translation: {
        "Lang": "RU",
        "Log in": "Вход",
        "Sign up": "Регистрация",
        "Show more": "Показать больше",
        "Apply": "Применить",
        "Search": "Поиск →",
        "Geography": "География",
        "Traffic source": "Источник трафика",
        "Get a link": "Получить ссылку",
        "Offer": "Оффер",
        "Deductions": "Отчисления",
        "Privacy Policy": "Политика Конфиденциальности",
        "Terms & Conditions": "Условия Пользования",
        "Enter a search query": "Введите поисковый запрос",
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

  document.querySelector('.black_white span').innerHTML = i18next.t('Lang');
  document.getElementById('log_in').innerHTML = i18next.t('Log in');
  document.querySelector('.pop_wp li:nth-child(1) a').innerHTML = i18next.t('Log in');
  document.getElementById('sign_up').innerHTML = i18next.t('Sign up');
  document.querySelector('.pop_wp li:nth-child(2) a').innerHTML = i18next.t('Sign up');
  document.getElementById('btGeography').innerHTML = i18next.t('Show more');
  document.getElementById('btTraffic').innerHTML = i18next.t('Show more');
  document.getElementById('bt_apply').innerHTML = i18next.t('Apply');
  document.getElementById('bl_traffic').querySelector('p').innerHTML = i18next.t('Traffic source');
  document.getElementById('bl_georaphy').querySelector('p').innerHTML = i18next.t('Geography');
  document.querySelector('.offer_search_btn').innerHTML = i18next.t('Search');
  document.querySelector('.title_descrip p').innerHTML = i18next.t('Offer');
  document.querySelector('.title_deduction p').innerHTML = i18next.t('Deductions');
  document.querySelector('.footer_bottom_list li:nth-child(1) a').innerHTML = i18next.t('Terms & Conditions');
  document.querySelector('.footer_bottom_list li:nth-child(2) a').innerHTML = i18next.t('Privacy Policy');
  document.getElementById('offers_search_input').placeholder = i18next.t('Enter a search query');
  var links = document.querySelectorAll('.text_of a');
  for (link of links) {
    link.innerHTML = i18next.t('Get a link');
  }
  document.querySelector('.popup_cookie p').innerHTML = i18next.t('This website uses cookies');
  document.querySelector('.popup_cookie button').innerHTML = i18next.t('Accept');

  if (i18next.language == 'ru') {
    history.replaceState({ lang: 'ru' }, '', 'ru');
    document.querySelector('.language a:nth-child(1) li').className = "grey";
    document.querySelector('.language a:nth-child(2) li').className = "";
    document.querySelector('.mob_lang a:nth-child(1)').className = "act_lang";
    document.querySelector('.mob_lang a:nth-child(2)').className = "";

  } else {
    history.replaceState({ lang: 'en' }, '', 'en');
    document.querySelector('.language a:nth-child(2) li').className = "grey";
    document.querySelector('.language a:nth-child(1) li').className = "";
    document.querySelector('.mob_lang a:nth-child(2)').className = "act_lang";
    document.querySelector('.mob_lang a:nth-child(1)').className = "";

  };
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
}
)




