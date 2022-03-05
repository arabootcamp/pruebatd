import Vue from "vue";

Vue.filter('filterFirstUpperCase', str => str.slice(0, 1).toUpperCase() + str.slice(1, str.length))

Vue.filter('filterUpperCaseTitle', title => title.split(' ').map(el => el[0].toUpperCase() + el.slice(1, el.length)).join(' '))

Vue.filter('filterNumFormat', num => new Intl.NumberFormat('cl').format(num))

Vue.filter('filterPriceFormat', price => new Intl.NumberFormat('cl', {
  style: 'currency',
  currency: 'CLP'
}).format(price))

//9587952200 => 20-05-2000
Vue.filter('filterDateFormatA', timestamp =>  new Intl.DateTimeFormat('cl').format(new Date(timestamp * 1000)))

//2020-07-20T00:00:00.000Z => 20/07/2020
Vue.filter('filterDateFormatB', iso8601 => new Intl.DateTimeFormat('es').format(new Date(iso8601)))