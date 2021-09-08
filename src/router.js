import Vue from "vue";
import VueRouter from 'vue-router'

import Home from "./pages/home.vue";
import Instruments from "./pages/instruments.vue";
import ReuniendoPruebas from "./pages/reuniendo-pruebas.vue";
import NombreFantasma from "./pages/nombre-fantasma.vue";
import WebsRelacionadas from "./pages/webs-relacionadas.vue";

Vue.use(VueRouter)

let vuePath = '/'

if (process.env.NODE_ENV === 'development') {
  vuePath = '/'
}

const routes = [
  {
    path: vuePath,
    name: "home",
    component: Home
  },
  {
    path: vuePath + "instrumentos",
    name: "instruments",
    component: Instruments
  },
  {
    path: vuePath + "reuniendo-pruebas",
    name: "reuniendo-pruebas",
    component: ReuniendoPruebas
  },
  {
    path: vuePath + "nombre-fantasma",
    name: "nombre-fantasma",
    component: NombreFantasma
  },
  {
    path: vuePath + "webs-relacionadas",
    name: "webs-relacionadas",
    component: WebsRelacionadas
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;