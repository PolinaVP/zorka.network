

let offersData;

function loadAllOffers() {
  let out = fetch('/offers.php')
    .then(res => res.json())
    .then(out => {
      let offers = out.offers;
      offers.sort((a, b) => b.epc - a.epc);
      offersData = offers;
      content(offers);
      getFilters(offers);
    });
};

loadAllOffers();



function onSearch() {
  $('.left_search input').val("");
  $('.left_search input').prop('checked', false);
  let data = $('#offers_search_input').val();
  let url = '/offers.php?q=' + data;
  if (data) {
    let out = fetch(url)
      .then(res => res.json())
      .then(out => {
        let offers = out.offers;
        offers.sort((a, b) => b.epc - a.epc);
        content(offers);
      });
  } else { loadAllOffers() };
};





function content(offers) {
  document.getElementById('results').innerHTML = '';
  for (let i = 0; i < offers.length; i++) {
    let offers_logo;
    if (offers[i].logo_source) {
      offers_logo = 'http://my.zorkanetwork.com/logos/' + offers[i].logo_source;
    } else {
      offers_logo = 'img/icon.jpg';
    }


    let payment = offers[i].payments;

    payment.reverse().sort((a) => {
      if (a.revenue != 0) { return -1 };
    })

    let tr = document.createElement('tr');

    tr.innerHTML = `
       <td class="offer_descrip">
            <div class="img_box">
            <img src =${offers_logo} alt=${offers_logo}></img>
            </div>
            <div class="text_of">
                <p>${offers[i].title}</p>
                      <a href=${offers[i].preview_url}>Получить ссылку</a>
                  </div>
            
        </td>
        <td class="offer_deduction"><p>${payment[0].revenue} ${payment[0].currency}</p>
          
            <p class="t-normal">${payment[0].title}</p></td>
          
        <td class="offer_cr">
                        <p>${offers[i].cr}%</p>
                </td>
        <td class="offer_epc">
                        <p>${offers[i].epc}</p>
                </td>`
    document.getElementById('results').append(tr);

  }

};

function getFilters(offers) {

  let fixed_geo = ['RU', 'KZ', 'UA', 'US', 'DE', 'GB'];
  let countries = [];
  let sources = [];
  for (let i = 0; i < offers.length; i++) {
    if (offers[i].countries) {
      for (let country of offers[i].countries) {
        if (!countries.includes(country) && !fixed_geo.includes(country)) {
          countries.push(country);
        }
      }
    };

    if (offers[i].sources) {
      for (let source of offers[i].sources) {
        if (!sources.includes(source.title)) {
          if (source.allowed == 1) {
            sources.push(source.title);
          }
        }
      }
    }
  };

  let filters = [];
  countries.sort();
  sources.sort();
  filters.countries = countries;
  filters.sources = sources;


  document.getElementById('formGeography').querySelector('.check_wp').innerHTML = '';

  for (let i = 0; i < countries.length; i++) {

    let label = document.createElement('label');

    label.innerHTML = `
    
    <input class="checkbox" type="checkbox" name="checkbox-test">
    <span class="checkbox-custom"></span>
    <span class="option_value">${countries[i]}</span>

    `

    document.getElementById('formGeography').querySelector('.check_wp').append(label);
  };

  document.getElementById('traffic').innerHTML = '';

  for (let i = 0; i < 6; i++) {

    let label = document.createElement('label');

    label.innerHTML = `
    
    <input class="checkbox" type="checkbox" name="checkbox-test">
    <span class="checkbox-custom"></span>
    <span class="option_value">${sources[i]}</span>

    `

    document.getElementById('traffic').append(label);
  };

  document.getElementById('formTraffic').querySelector('.check_wp').innerHTML = '';

  for (let i = 6; i < sources.length; i++) {

    let label = document.createElement('label');

    label.innerHTML = `
    
    <input class="checkbox" type="checkbox" name="checkbox-test">
    <span class="checkbox-custom"></span>
    <span class="option_value">${sources[i]}</span>

    `

    document.getElementById('formTraffic').querySelector('.check_wp').append(label);
  };


  return filters;
};

var elems = [
  {
    field: 'geo',
    data: document.getElementById('bl_georaphy')
  },
  {
    field: 'traffic',
    data: document.getElementById('bl_traffic')
  },
];

class Filter {
  constructor(arr) {
    this.elems = arr;
    this.to_send = [];
    let that = this;
    this.init = function () {
      that.to_send = [];
      this.elems.forEach(function (item, idx, arr) {
        that.to_send[idx] = {};
        that.to_send[idx].field = item.field;
        let checked_elems = item.data.querySelectorAll('.filter');
        that.to_send[idx].values = [];
        checked_elems.forEach(function (it, i, a) {
          that.to_send[idx].values.push(it.textContent);
        });
      });

      let filters = this.to_send;
      let countries = [];
      let sources = [];

      if (filters[0].values.length >= 1) {
        countries = filters[0].values;
      };
      if (filters[1].values.length >= 1) {
        sources = filters[1].values;
      };

      let filterByCountry = [];
      let filterBySources = [];

      for (let offer of offersData) {
        if (countries.length >= 1) {
          for (let country of countries) {
            if (offer.countries) {
              if (offer.countries.includes(country)) {
                filterByCountry.push(offer);
              }
            }
          }
        } else {
          filterByCountry = offersData;
        }
      }
      for (let offer of filterByCountry) {
        if (sources.length >= 1) {
          for (let source of sources) {
            if (offer.sources) {
              for (let title of offer.sources) {
                if (source == title.title) {
                  filterBySources.push(offer);
                }
              }
            }
          }
        } else {
          filterBySources = filterByCountry;
        }
      }

      content(filterBySources);
    };
  }


};





let filter = new Filter(elems);   