<template>
  <form class="m-form">
    <div class=" row">
      <div class="col col-12 col-md-4" v-bind:class="{ hidden: isSelected1 }">
        <div class="m-form__select-box">
          <h2>Pista 1</h2>
          <b-form-select v-model="selected1" :options="options1" @change="changeSelected1"></b-form-select>
        </div>
      </div>
      <div class="col col-12 col-md-4" v-bind:class="{ hidden: isSelected2 }">
        <div class="m-form__select-box">
          <h2>Pista 2</h2>
          <b-form-select v-if="selected1" v-model="selected2" :options="options2" @change="changeSelected2"></b-form-select>
        </div>
      </div>
      <div class="col col-12 col-md-4" v-bind:class="{ hidden: isSelected3, isLast: isLast }">
        <div class="m-form__select-box">
          <h2>Pista 3</h2>
          <b-form-select v-if="selected2" v-model="selected3" :options="options3" @change="changeSelected3"></b-form-select>
        </div>
      </div>
    </div>
    <ul class="m-form__result">
      <li class="m-form__item" v-bind:class="{ show: isSelected1 }">
        <button type="button" class="m-form__btn" v-on:click="changeTrack('1')">
          <i v-bind:class=icon1></i>
        </button>
      </li>
      <li class="m-form__item" v-bind:class="{ show: isSelected2 }">
        <button type="button" class="m-form__btn" v-on:click="changeTrack('2')">
          <i v-bind:class=icon2></i>
        </button>
      </li>
      <li class="m-form__item" v-bind:class="{ show: isSelected3 }">
        <button type="button" class="m-form__btn" v-on:click="changeTrack('3')">
          <i v-bind:class=icon3></i>
        </button>
      </li>
    </ul>
    <div class="m-form__actions">
      <p class="m-form__name">
        <span class="m-form__name-label" v-if="namePhan">
          Nombre del Fantasma:
        </span>
         <span class="m-form__name-text">
          {{namePhan}}
        </span>
      </p>
      <button class="m-button" ><i class='reset'></i></button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    formData: Object
  },
  data() {
    return {
      selected1: this.formData.selected1,
      selected2: this.formData.selected2,
      selected3: this.formData.selected3,
      options1: this.formData.options1,
      options2: this.formData.options2,
      options3: this.formData.options3,
      isSelected1: false,
      isSelected2: true,
      isSelected3: true,
      icon1: '',
      icon2: '',
      icon3: '',
      isLast: false,
      namePhan: ''
    }
  },
  updated: function(){
    if (this.formData.selected1 !== this.selected1) {
      this.selected2 = null
      this.selected3 = null
    } else {
      this.formData.selected1 = this.selected1
    }

    if (this.formData.selected2 !== this.selected2) {
      this.selected3 = null
    } else {
      this.formData.selected2 = this.selected2
    }
    
    this.formData.selected3 = this.selected3
  },
  methods: {
    changeSelected1 () {
      if (this.selected1) {
        const optionSelectedInfo = this.selected1.split('-')
        const options = this.formData['options' + optionSelectedInfo[0]]
        this.icon1 = options[optionSelectedInfo[1]].iconClass
        this.isSelected1 = true
        this.isSelected2 = false
        this.isSelected3 = true
      } else {
        this.isSelected1 = false
        this.isSelected2 = true
        this.isSelected3 = true
      }
      
      this.icon2 = ''
      this.icon3 = ''
      this.isLast = false
      this.formData.selected1 = this.selected1
      this.$emit('changeSelected1', this.formData)
    },
    changeSelected2 () {
      if (this.selected2) {
        const optionSelectedInfo = this.selected2.split('-')
        const options = this.formData['options' + optionSelectedInfo[0]]
        this.icon2 = options[optionSelectedInfo[1]].iconClass
        this.isSelected1 = true
        this.isSelected2 = true
        this.isSelected3 = false
      } else {
        this.isSelected1 = true
        this.isSelected2 = false
        this.isSelected3 = false
      }

      this.icon3 = ''
      this.isLast = false
      this.formData.selected2 = this.selected2
      this.$emit('changeSelected2', this.formData)
    },
    changeSelected3 () {
      if (this.selected3) {
        const optionSelectedInfo = this.selected3.split('-')
        const options = this.formData['options' + optionSelectedInfo[0]]
        this.icon3 = options[optionSelectedInfo[1]].iconClass
        this.isSelected1 = true
        this.isSelected2 = true
        this.isSelected3 = true
      } else {
        this.isSelected1 = true
        this.isSelected2 = true
        this.isSelected3 = false
      }

      this.isLast = true
      this.formData.selected3 = this.selected3
      this.$emit('changeSelected3', this.formData)
    },
    changeTrack (track) {
      if (this.isSelected1) {
        switch (track) {
          case '1':
            this.isSelected1 = false;
            this.isSelected2 = true;
            this.isSelected3 = true;
            this.isLast = false
            break;
          case '2':
            this.isSelected1 = true
            this.isSelected2 = false
            this.isSelected3 = true
            this.isLast = false
            break;
          default:
            break;
        }
      }
    }
  },
  mounted() {
    if(localStorage.namePhan) this.namePhan = localStorage.namePhan;
  }
}
</script>

<style lang="scss">
.m-form {
  height: 133px;
  display: flex;
  position: fixed;
  top: 57px;
  left: 0;
  width: 100%;
  background-color: #222;
  background-image: url('../assets/images/bg-page.jpg');
  z-index: 1;
  padding: 0 12px;

  @media (min-width: 768px) {
    position: static;
    display: block;
    margin-bottom: 32px;
    min-height: 118px;
    padding: 0;
  }

  &__select-box {
    min-height: 110px;
    border: 1px dashed #808080;
    padding: 15px;
    border-radius: 5px;

    @media (min-width: 768px) {
      border-bottom: 1px dashed #808080;
      min-height: 118px;
    }
    
  }

  &__result {
    padding: 0;
    justify-content: center;
    width: 50px;
    display: flex;
    padding-left: 9px;
    margin: 0;
    flex-wrap: wrap;
    height: 110px;

    @media (min-width: 768px) {
      height: 26px;
      margin-top: 32px;
      width: 100%;
      padding-left: 0;
      flex-wrap: nowrap;
      display: none;
    }

    i {
      &::after {
        display: none;
      }
    }
  }

  &__item {
    display: block;
    text-align: center;
    height: 29px;
    width: 35px;
    padding-top: 3px;
    font-size: 20px;

    @media (min-width: 768px) {
      margin: 0 6px;
      padding-top: 0;
    }

    .m-form__btn {
      text-align: center;
      padding: 0 6px;
    }
  }

  &__btn {
    border: 0;
    background-color: transparent;
    color: #fff;

    @media (min-width: 768px) {
      margin: 0 6px;
      text-align: center;
    }

    i {
      width: auto;
    }
  }

  &__actions {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #222;
    background-image: url('../assets/images/bg-page.jpg');
    min-height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    border-top: 1px dashed #808080;

    .m-button {
      height: 40px;
      width: 40px;
      border: 0;
      background-color: transparent;
      color: #ffffff;
      margin-right: 12px;
      font-size: 24px;
    }

    i {
      &::after {
        display: none;
      }
    }
  }

  &__name {
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    margin: 0;

    &-label {
      font-size: 13px;
      line-height: 12px;
    }

    &-text {
      line-height: 14px;
      min-height: 14px;
    }
  }

  .row {
    @media (max-width: 767px) {
      width: calc(100% - 26px);
      display: inline-block;
    }
  }

  .col {
    height: 110px;

    &:last-child {
      .m-form__select-box {
        border-bottom: 1px dashed #808080;
      }
    }

    &.hidden {
      @media (max-width: 767px) {
        display: none;
      }
    }

    &.isLast {
      &.hidden {
        display: block;
      }
    }
  }

  .custom-select {
    width: 100%;
    height: 40px;
    border-color: transparent;
    outline: none;
    color: #fff;
    background-color: transparent;
    border-bottom: 1px solid #fff;
    border-radius: 0;

    option {
      &:disabled {
        display: none;
      }
    }
  }
}
</style>
