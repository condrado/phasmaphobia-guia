<template>
  <div class="m-menu" v-click-outside="handleFocusOut">
    <button type="button" class="m-menu__btn open" v-on:click="openMenu" v-bind:class="{ show: isClose }">
      <i class="menu"></i>
    </button>
    <button type="button" class="m-menu__btn close" v-on:click="closeMenu" v-bind:class="{ show: isOpen }">
      <i class="close"></i>
    </button>
    <div class="m-menu__container" v-bind:class="{ show: isOpen }">
      <ul v-on:click="closeMenu">
        <li>
          <router-link class="link" :to="{path: urlHome}" >Guía fantasmas</router-link>
        </li>
        <li>
          <router-link class="link" :to="{path: urlInstrumentos}">Instrumentos</router-link>
        </li>
        <li>
          <router-link class="link" :to="{path: urlReuniendoPruebas}">Reuniendo pruebas</router-link>
        </li>
        <li>
          <router-link class="link" :to="{path: urlNombreFantasma}">Nombre fantasma</router-link>
        </li>
        <li>
          <router-link class="link" :to="{path: urlPaginasRelacionadas}">Paginas relacionadas</router-link>
          <!-- <a class="link" href="https://kineticgames.co.uk/" target="_blank">Web oficial</a> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

const path = process.env.NODE_ENV === 'development' ? '/' : '/phasmaphobia/'

export default {
  name: 'Menu',
  props: {
    tableData: Object
  },
  data() {
    return {
      isOpen: false,
      isClose: true,
      isClickOpen: false,
      urlPath: process.env.NODE_ENV === 'development' ? '/' : '/phasmaphobia/',
      urlHome: path,
      urlInstrumentos: path + 'instrumentos',
      urlReuniendoPruebas: path + 'reuniendo-pruebas',
      urlNombreFantasma: path + 'nombre-fantasma',
      urlPaginasRelacionadas: path + 'paginas-relacionadas'
    }
  },
  methods: {
    openMenu () {
      this.isOpen = true
      this.isClose = false
    },
    closeMenu () {
      this.isOpen = false
      this.isClose = true
    },
    handleFocusOut () {
      this.closeMenu()
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">
.m-menu {
  position: fixed;
  z-index: 3;
  right: 0;
  top: 0;

  &__btn {
    border: 0;
    background-color: transparent;
    color: #fff;
    font-size: 26px;
    width: 57px;
    height: 50px;
    padding: 0;
    position: absolute;
    z-index: 3;
    left: -57px;
    top: 0;
    display: none;

    &.show {
      display: block;
    }

    i {
      vertical-align: middle;
      width: 26px;
    }
  }

  &__container {
    position: absolute;
    width: 250px;
    right: -250px;
    top: 0;
    background-color: #222;
    background-image: url('../assets/images/bg-page.jpg');
    height: 100vh;
    padding: 50px 12px;
    -webkit-transition: right 0.5s ease;
    -moz-transition: right 0.5s ease;
    -o-transition: right 0.5s ease;
    transition: right 0.5s ease;
    border-left: 1px dashed #808080;

    &.show {
      right: 0;
      -webkit-transition: right 0.5s ease;
      -moz-transition: right 0.5s ease;
      -o-transition: right 0.5s ease;
      transition: right 0.5s ease;
    }

    li {
      padding: 10px 0;
    }
  }
}
</style>
