<template>
  <div class="m-menu" v-click-outside="handleFocusOut" v-bind:class="{ menuOpen: isOpen }">
    <div class="m-menu__btn-group">
      <button type="button" class="m-menu__btn open" v-on:click="openMenu" v-bind:class="{ show: isClose }">
        <i class="menu"></i>
      </button>
      <button type="button" class="m-menu__btn close" v-on:click="closeMenu" v-bind:class="{ show: isOpen }">
        <i class="close"></i>
      </button>
    </div>
    <div class="m-menu__container" v-bind:class="{ show: isOpen }">
      <ul v-on:click="closeMenu">
        <li v-if="menuList.home">
          <router-link class="link" :to="{path: urlHome}" >{{ $t('homeTitle') }}</router-link>
        </li>
        <li v-if="menuList.tools">
          <router-link class="link" :to="{path: urlInstrumentos}">{{ $t('toolsTitle') }}</router-link>
        </li>
        <li v-if="menuList.evidences">
          <router-link class="link" :to="{path: urlReuniendoPruebas}">{{ $t('evidenceTitle') }}</router-link>
        </li>
         <li v-if="menuList.name">
          <router-link class="link" :to="{path: urlNombreFantasma}">{{ $t('nameGhostTitle') }}</router-link>
        </li>
        <li v-if="menuList.webs">
          <router-link class="link" :to="{path: urlWebsRelacionadas}">{{ $t('websTitle') }}</router-link>
        </li>
        <li v-if="menuList.equipment">
          <button class="m-menu__drop" type="button" @click="dropEquipment" v-bind:class="{ show: isOpenEquipment }">{{ $t(equipment.starter.name) }}</button>
          <div class="m-menu__list" v-if="isOpenEquipment">
            <template v-for="equip in equipment.starter.list">
              <router-link class="link m-menu__item" :to="{name: urlEquipmentStarter, params: {equipmentSt: equip.iconClass}}" :key="equip.title">
               <i :class="equip.iconClass"></i>
               <span>{{ $t(equip.title) }}</span>
              </router-link>
            </template>
          </div>
        </li>
        <li v-if="menuList.equipmentVan">
          <button class="m-menu__drop" type="button" @click="dropEquipmentVan" v-bind:class="{ show: isOpenEquipmentVan }">{{ $t(equipment.van.name) }}</button>
          <div class="m-menu__list" v-if="isOpenEquipmentVan">
            <template v-for="equip in equipment.van.list">
              <router-link class="link m-menu__item" :to="{name: urlEquipmentVan, params: {equipmentSt: equip.iconClass}}" :key="equip.title">
                <i :class="equip.iconClass"></i>
                <span>{{ $t(equip.title) }}</span>
              </router-link>
            </template>
          </div>
        </li>
        <li v-if="menuList.equipmentOnSite">
          <button class="m-menu__drop" type="button" @click="dropEquipmentOnSite" v-bind:class="{ show: isOpenEquipmentOnSite }">{{ $t(equipment.onSite.name) }}</button>
          <div class="m-menu__list" v-if="isOpenEquipmentOnSite">
            <button class="m-menu__item" v-for="equip in equipment.onSite.list" :key="equip.title" >
               <i :class="equip.iconClass"></i>
               <span>{{ $t(equip.title) }}</span>
            </button>
          </div>
        </li>
        <li v-if="menuList.equipmentExtra">
          <button class="m-menu__drop" type="button" @click="dropEquipmentExtra" v-bind:class="{ show: isOpenEquipmentExtra }">{{ $t(equipment.extra.name) }}</button>
          <div class="m-menu__list" v-if="isOpenEquipmentExtra">
            <button class="m-menu__item" v-for="equip in equipment.extra.list" :key="equip.title" >
               <i :class="equip.iconClass"></i>
               <span>{{ $t(equip.title) }}</span>
            </button>
          </div>
        </li>
        <li v-if="menuList.language">
          <button class="m-menu__drop" type="button" @click="dropLanguage">{{ $t('languageTitle') }}</button>
          <div class="m-menu__list" v-if="isOpenlanguage">
            <button class="m-menu__item" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
              <flag :iso="entry.flag" v-bind:squared="false" /> {{entry.title}}
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="m-menu__btn-version" v-bind:class="{ show: isOpen }">
      <button type="button" @click="refreshPage()">
          <span class="version">0.12.3</span>
      </button>
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
    menuList: Object,
    languages: Array,
    equipment: Object
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
      urlEquipmentVan: 'equipment-van',
      urlEquipmentStarter: 'equipment-starter',
      isOpenlanguage: false,
      isOpenEquipment: false,
      isOpenEquipmentVan: false,
      isOpenEquipmentOnSite: false,
      isOpenEquipmentExtra: false
    }
  },
  methods: {
    openMenu () {
      this.isOpen = true
      this.isClose = false
      document.body.parentElement.classList.add('menu-open')
    },
    closeMenu (event) {
      if (event !== null) {
        let elemSelected = event

        if (event !== 'out') {
          elemSelected = event.target
        } 

        if(elemSelected === 'out' || elemSelected.getAttribute('class') !== null && elemSelected.getAttribute('class').indexOf('__drop') < 0) {
          this.isOpen = false
          this.isClose = true
          document.body.parentElement.classList.remove('menu-open')
        }
      }
    },
    handleFocusOut () {
      this.closeMenu('out')
    },
    changeLocale(locale) {
      i18n.locale = locale;
      this.closeMenu(null)
      this.dropLanguage()
    },
    refreshPage () {
      window.location.reload(true)
      // this.$router.go()
    },
    dropLanguage () {
      this.isOpenlanguage = !this.isOpenlanguage 
    },
    dropEquipment() {
      this.isOpenEquipment = !this.isOpenEquipment 
    },
    dropEquipmentVan() {
      this.isOpenEquipmentVan = !this.isOpenEquipmentVan 
    },
    dropEquipmentOnSite() {
      this.isOpenEquipmentOnSite = !this.isOpenEquipmentOnSite 
    },
    dropEquipmentExtra() {
      this.isOpenEquipmentExtra = !this.isOpenEquipmentExtra 
    },
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

    &-group {
      &::before {
        content: "";
        width: 249px;
        height: 50px;
        position: absolute;
        top: 0;
        right: -250px;
        z-index: 2;
        -webkit-transition: right 0.5s ease;
        -moz-transition: right 0.5s ease;
        -o-transition: right 0.5s ease;
        transition: right 0.5s ease;
        background-color: #222;
        background-image: url('../assets/images/bg-page.jpg');
      }
    }

    &-version {
      position: absolute;
      right: -250px;
      bottom: 0;
      color: #fff;
      padding: 12px;
      font-size: 12px;
      line-height: 12px;
      width: 249px;
      text-align: right;
      z-index: 1;
      -webkit-transition: right 0.5s ease;
      -moz-transition: right 0.5s ease;
      -o-transition: right 0.5s ease;
      transition: right 0.5s ease;
      border-left: 1px dashed #808080;
      border: 0;
      background-color: #222;
      background-image: url('../assets/images/bg-page.jpg');

      &.show {
        right: 0;
        -webkit-transition: right 0.5s ease;
        -moz-transition: right 0.5s ease;
        -o-transition: right 0.5s ease;
        transition: right 0.5s ease;
      }

      .version {
        background-color: #222;
        background-image: url('../assets/images/bg-page.jpg');
        color: #fff;
      }

      button {
        border: 0;
        background-color: transparent;
      }
    }

    &.show {
      display: block;
      opacity: 1;
    }

    &.close:not(:disabled):not(.disabled):hover, 
    &.close:not(:disabled):not(.disabled):focus {
      opacity: 1;
    }

    i {
      vertical-align: middle;
      width: 26px;
      color: #fff;
      text-shadow: none;
      opacity: 1;
      font-size: 26px;
      float: none;
      z-index: 1;

      &.close:not(:disabled):not(.disabled):hover, 
      &.close:not(:disabled):not(.disabled):focus {
        opacity: 1;
        color: #fff;
      }
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
    text-align: left;
    line-height: 17px;

    &::after {
      font-family: 'Standard Icons';
      font-style: normal;
      display: inline-block;
      text-align: center;
      position: relative;
      content: '\E80B';
      top: 1px;
    }

    &.show {
      &::after {
        content: '\E80C';
      }
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
    overflow-x: auto;
    z-index: 1;

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
    padding-top: 8px;
  }

  &__item {
    border: 0;
    background-color: transparent;
    color: #fff;
    padding: 12px 0;
    text-align: left;
    width: 100%;
    display: flex;
    line-height: 17px;

    &.link {
      display: flex;
    }

    .flag-icon {
      margin-right: 8px;
    }

    i {
      min-width: 24px;
      text-align: left;
    }

    span {
      opacity: .7;
    }
  }

  &.menuOpen {
    .m-menu__btn-group {
      &::before {
        right: 0;
        -webkit-transition: right 0.5s ease;
        -moz-transition: right 0.5s ease;
        -o-transition: right 0.5s ease;
        transition: right 0.5s ease;
      }
    }
  }

  .link {
    text-decoration: none;
  }
}
</style>
