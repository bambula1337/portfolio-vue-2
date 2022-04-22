import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueSmoothScroll from 'vue2-smooth-scroll';
import AOS from 'aos';
import "aos/dist/aos.css";

Vue.use(VueSmoothScroll, {
  duration: 1000,
  updateHistory: false,
  offset: -90,
});

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
