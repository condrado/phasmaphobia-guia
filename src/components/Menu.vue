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
          <router-link class="link" :to="{path: urlHome}" >{{ $t('homeTitle') }}</router-link>
        </li>
        <li>
          <router-link class="link" :to="{path: urlInstrumentos}">{{ $t('toolsTitle') }}</router-link>
        </li>
        <li>
          <router-link class="link" :to="{path: urlReuniendoPruebas}">{{ $t('evidenceTitle') }}</router-link>
        </li>
        <li>
          <router-link class="link" :to="{path: urlNombreFantasma}">{{ $t('nameGhostTitle') }}</router-link>
        </li>
        <li>
          <router-link class="link" :to="{path: urlWebsRelacionadas}">{{ $t('websTitle') }}</router-link>
        </li>
        <!-- <li>
          <button class="m-menu__drop" type="button" @click="dropLanguaje">{{ $t('languajeTitle') }}</button>
          <div class="m-menu__list" v-if="isOpenlanguaje">
            <button class="m-menu__item" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
              <flag :iso="entry.flag" v-bind:squared="false" /> {{entry.title}}
            </button>
          </div>
        </li> -->
      </ul>

      <span class="version">0.1.3</span>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import i18n from '@/plugins/i18n';

const path = '/'

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
      urlHome: path,
      urlInstrumentos: path + 'instrumentos',
      urlReuniendoPruebas: path + 'reuniendo-pruebas',
      urlNombreFantasma: path + 'nombre-fantasma',
      urlWebsRelacionadas: path + 'webs-relacionadas',
      isOpenlanguaje: false,
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'es', language: 'es', title: 'Español' }
      ]
    }
  },
  methods: {
    openMenu () {
      this.isOpen = true
      this.isClose = false
    },
    closeMenu (event) {
      if (event !== null) {
        const elemSelected = event.target

        if(elemSelected.getAttribute('class') !== null && elemSelected.getAttribute('class').indexOf('__drop') < 0) {
          this.isOpen = false
          this.isClose = true
        }
      }
    },
    handleFocusOut () {
      this.closeMenu(null)
    },
    changeLocale(locale) {
      i18n.locale = locale;
      this.closeMenu(null)
      this.dropLanguaje()
    },
    dropLanguaje () {
      this.isOpenlanguaje = !this.isOpenlanguaje 
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
  height: 100vh;

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

  &__drop {
    border: 0;
    background-color: transparent;
    color: #fff;
    padding: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;

    &::after {
      font-family: 'Standard Icons';
      font-style: normal;
      display: inline-block;
      text-align: center;
      position: relative;
      content: '\E808';
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
      padding: 10px 15px 10px 0;
    }
  }

  &__list {

  }

  &__item {
    border: 0;
    background-color: transparent;
    color: #fff;
    padding: 8px 0;
    text-align: left;
    width: 100%;
  }

  .link {
    text-decoration: none;
  }

  .version {
    position: absolute;
    right: 0;
    bottom: 0;
    color: #fff;
    padding: 12px;
    font-size: 12px;
    line-height: 12px;
  }
}
</style>
