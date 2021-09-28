import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from 'moment';
import crypto from 'crypto-js';
import vuetify from "./plugins/vuetify";
import VueApexCharts from 'vue-apexcharts'

Vue.prototype.moment = moment
Vue.prototype.crypto = crypto
Vue.component('apexchart', VueApexCharts);

Vue.config.productionTip = false;

Vue.filter('percent', function (value) {
  if (typeof value !== "number") {
      return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
  });
  return formatter.format(value);
});

Vue.filter('decimal', function (value) {
  if (typeof value !== "number") {
      return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
  });
  return formatter.format(value);
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
