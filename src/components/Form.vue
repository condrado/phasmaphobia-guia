<template>
  <form class="m-form">
    <div class="row">
      <div class="col col-12">
        <div class="m-form__btn-group">
          <p class="m-form__btn-group-text-selected">
            <span v-if="textSelected">
              <template v-for="(evidence) in evidences">
                <span v-if="evidence.value" :key=evidence.value :class="activeBtn['activeBtn' + evidence.value]">{{ $t(evidence.text) }}</span>
              </template>
            </span>
            <span class="w" v-else>
              - {{ $t('evidences.title.selectTrack') }} -
            </span>
          </p>
          <ul class="m-form__btn-group-list">
            <template v-for="(evidence) in evidences">
              <li :key=evidence.value v-if="evidence.iconClass">
                <button type="button" class="m-form__btn m-form__check" :class="activeBtn['activeBtn' + evidence.value]" :data-id="evidence.value" v-on:click="selectTrack" :disabled="isHideBtn['isHideBtn' + evidence.value]">
                  <i :class="evidence.iconClass"></i>
                </button>
                <span class="m-form__check-text">{{ $t(evidence.text) }}</span>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <div class="m-form__actions">
      <template v-if="isNewGame">
        <div class="m-form__actions-new">
          <div class="m-form__actions-input"  v-if="isNameInput" v-click-outside="handleFocusOut">
            <input class="m-add-name__input" placeholder="Nombre del fantasma" type="text" v-model="inputName" ref="refInputName">
            <button class="m-button" type="button" v-on:click="addName"><i class='add'></i></button>
          </div>
          <button class="m-button" type="button" v-on:click="newGame">{{ $t('actions.init') }}</button>
        </div>
      </template>
      <template v-else>
        <div class="m-form__actions-old">
          <p class="m-form__name">
            <button class="m-button" type="button" v-on:click="newGame">
              <span class="m-form__name-text">
                {{inputName}}
              </span>
            </button>
          </p>
          <p class="m-form__time" v-if="isSelectedTime" v-click-outside="handleFocusOutTime">
            <button class="m-button" type="button" v-on:click="newTime($event, 301)">05:00</button>
            <button class="m-button" type="button" v-on:click="newTime($event, 121)" >02:00</button>
          </p>
          <div class="m-button__group">
            <button class="m-button" type="button" v-on:click="newSelectedTime">
              <Temporizador :seconds="seconds" :newInterval="newInterval" @runTemp="runTemp" :isRunTemp="isRunTemp"/>
            </button>
            <button class="m-button" ><i class='reset'></i></button>
          </div>
        </div>
      </template>
    </div>
  </form>
</template>

<script>
import Temporizador from '../components/Temporizador.vue'
import ClickOutside from 'vue-click-outside'
import jsonData from '../data/data.json'

export default {
  name: 'Form',
  components: {
    Temporizador
  },
  props: {
    formData: Object,
    isHideBtn: Object,
    isNameInput: Boolean,
    isNewGame: Boolean,
    inputValue: String,
    isTime: Boolean,
    isSelectedTime: Boolean,
    tracksSelected: Number,
    tracksId: Array,
    textSelected: String,
    activeBtn: Object
  },
  data() {
    return {
      icon1: '',
      icon2: '',
      icon3: '',
      isLast: false,
      namePhan: '',
      newName: '',
      inputName: this.inputValue,
      seconds: 0,
      newInterval: null,
      isRunTemp: false,
      evidences: jsonData.formData.options,
    }
  },
  watch: { 
      isNameInput () {
        setTimeout(() => {
          if (this.$refs.refInputName !== undefined) {
            this.$refs.refInputName.focus()
          }
        }, 300);
        
      }
    },
  methods: {
    selectTrack (event) {
      this.$emit('selectTrunck', event)
    },
    newGame () {
      this.$emit('newGame', true)
    },
    newSelectedTime () {
      this.newInterval = null
      this.isRunTemp = false
      this.$emit('newSelectedTime', true)
    },
    newTime (event, time) {
      this.isRunTemp = true
      this.seconds = time
      this.$emit('newTime', true)
      this.$emit('newSelectedTime', false)
      console.log(event)
    },
    addName () {
      let newName = {}
      newName.isNameInput = false
      newName.isNewGame = false
      newName.inputValue = this.inputName

      if (this.inputName.trim() !== '') {
        this.$emit('addName', newName)
      }
    },
    runTemp (isRunTemp) {
      this.isRunTemp = isRunTemp
    },
    handleFocusOut () {
      let newName = {}
      newName.isNameInput = false
      newName.isNewGame = true
      newName.inputValue = ''

      this.$emit('addName', newName)
    },
    handleFocusOutTime () {
      this.newInterval = null
      this.isRunTemp = false
      this.$emit('newSelectedTime', false)
    }
  },
  mounted() {
    if(localStorage.namePhan) this.namePhan = localStorage.namePhan;
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">
.m-form {
  height: 115px;
  display: block;
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  background-color: #222;
  background-image: url('../assets/images/bg-page.jpg');
  z-index: 2;
  padding: 0 12px;

  @media (min-width: 768px) {
    position: static;
    display: block;
    margin-bottom: 32px;
    min-height: 118px;
    padding: 0;
  }

  &__select {
    &-group {

      &.row {
        display: none;

        @media (max-width: 767px) {
          width: calc(100% - 26px);
          display: inline-block;
          display: none;
        }
      }
    }

    &-box {
      min-height: 110px;
      border: 1px dashed #808080;
      padding: 15px;
      border-radius: 5px;

      @media (min-width: 768px) {
        border-bottom: 1px dashed #808080;
        min-height: 118px;
      }
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

    &-group {
      &-list {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 0;
        list-style-type: none;
        position: relative;
        margin: 14px 0 0;
      }

      &-text-selected {
        text-align: center;
        line-height: 18px;
        min-height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        font-size: 15px;
        opacity: 0.7;

        > span {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          span {
            display: none;

            &.active {
              display: block;
            }
            
            &.active1,
            &.active2,
            &.active3 {
              display: block;

              &.end {
                &::after {
                  content: '';
                }
              }
            }

            &.active1 {
              order: 1;

              &::after {
                content: ', ';
                margin-right: 5px;
              }
            }

            &.active2 {
              order: 2;
              
              &::after {
                content: ', ';
                margin-right: 8px;
              }
            }

            &.active3 {
               order: 3;
            }
          }
        }
      }
    }
  }

  &__check {
    width: 45px;
    height: 45px;
    margin: 0 3px;
    padding: 0;

    &-text {
      display: none;
      position: absolute;
      width: 100%;
      text-align: center;
      background-color: #222;
      background-image: url('../assets/images/bg-page.jpg');
      left: 0;
      bottom: -35px;
    }

    &[disabled="disabled"] {
      opacity: .2;
    }

    &.active {
      border: 1px dashed #808080;
      border-radius: 5px;
      -webkit-box-shadow: 0px 0px 5px 0px rgba(255,255,255,0.3); 
      box-shadow: 0px 0px 5px 0px rgba(255,255,255,0.3);

      // & + .m-form__check-text {
      //   display: block;
      // }
    }

    i {
      font-size: 20px;

      &::after {
        display: none;
      }
    }
  }

  &__actions {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #222;
    background-image: url('../assets/images/bg-page.jpg');
    min-height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    border-top: 1px dashed #808080;
    -webkit-box-shadow: 0px -5px 5px -1px rgba(255,255,255,0.15); 
    box-shadow: 0px -5px 5px -1px rgba(255,255,255,0.15);

    &-new {
      width: 100%;
      text-align: center;
      position: relative;
      background-color: #222;
      background-image: url('../assets/images/bg-page.jpg');

      .m-button {
        margin: 0;
        height: 54px;
        font-size: 24px;

        i {
          font-size: 24px;
        }
      }
    }

    &-old {
      height: 40px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 0 12px;

      .m-form__name {
        padding-left: 0;
        justify-content: center;
         padding-right: 0;
      }

      .m-button {
        margin-left: 16px;

        i {
          font-size: 24px;
        }
      }
    }

    &-input {
      padding: 7px 12px;
      display: flex;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #222;
      background-image: url('../assets/images/bg-page.jpg');
      width: 100%;

      .m-button {
        height: 40px;
        margin: 0;
        padding: 0 0 0 12px;
      }

      input {
        width: calc(100% - 40px);
        padding: 8px 10px;
        border: 0;
        border-radius: 5px;
      }
    }

    .m-button {
      width: auto;
      border: 0;
      background-color: transparent;
      color: #ffffff;
      font-size: 15px;
      line-height: 18px;

      &__group {
        display: flex;
      }
    }

    i {
      &::after {
        display: none;
      }
    }
  }

  &__time {
    background-color: #222;
    background-image: url('../assets/images/bg-page.jpg');
    position: absolute;
    width: 100%;
    min-height: 48px;
    left: 0;
    bottom: 47px;
    margin: 0;
    border-top: 1px dashed #808080;
    display: flex;
    justify-content: center;
    -webkit-box-shadow: 0px -5px 5px -1px rgba(255,255,255,0.15); 
    box-shadow: 0px -5px 5px -1px rgba(255,255,255,0.15);

    .m-button {
      font-size: 18px;
      margin: 0 16px;
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
      font-size: 16px;
    }

    .m-button {
      margin: 0;
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
