import Vue from "vue";
import VueRouter from 'vue-router'

import Home from "./pages/Home.vue";
import Instruments from "./pages/Instruments.vue";
import ReuniendoPruebas from "./pages/Reuniendo-pruebas.vue";
import NombreFantasma from "./pages/Nombre-fantasma.vue";
import PaginasRelacionadas from "./pages/Paginas-relacionadas";


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
    path: vuePath + "paginas-relacionadas",
    name: "paginas-relacionadas",
    component: PaginasRelacionadas
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;