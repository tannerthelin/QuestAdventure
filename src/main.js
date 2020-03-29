import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import store from "./store";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueResource);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
