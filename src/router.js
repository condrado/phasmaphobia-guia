import Vue from "vue";
import VueRouter from 'vue-router'

import Home from "./pages/home.vue";
import Tools from "./pages/tools.vue";
import ReuniendoPruebas from "./pages/reuniendo-pruebas.vue";
import NombreFantasma from "./pages/nombre-fantasma.vue";
import WebsRelacionadas from "./pages/webs-relacionadas.vue";
import EquipmentVan from "./pages/equipment-van.vue";
import EquipmentStarter from "./pages/equipment-starter.vue";

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
    name: "tools",
    component: Tools
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
    path: vuePath + "equipment-starter?:equipmentSt",
    name: "equipment-starter",
    props: true,
    component: EquipmentStarter
  },
  {
    path: vuePath + "equipment-van?:equipmentSt",
    name: "equipment-van",
    props: true,
    component: EquipmentVan
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