<template>
  <form class="m-form">
    <div class="m-form__select-group row">
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
    <div class="row">
      <div class="col col-12">
        <div class="m-form__btn-group">
          <ul class="m-form__btn-group-list">
            <li>
              <button type="button" class="m-form__btn m-form__check" data-id="1" v-on:click="selectTrack" :disabled="isHideBtn.isHideBtn1">
                <i class="emf"></i>
              </button>
              <span class="m-form__check-text">EMF nivel 5</span>
            </li>
            <li>
              <button type="button" class="m-form__btn m-form__check" data-id="2" v-on:click="selectTrack" :disabled="isHideBtn.isHideBtn2">
                <i class="write"></i>
              </button>
              <span class="m-form__check-text">Escritura fantasma</span>
            </li>
            <li>
              <button type="button" class="m-form__btn m-form__check" data-id="3" v-on:click="selectTrack" :disabled="isHideBtn.isHideBtn3">
                <i class="handprint"></i>
              </button>
              <span class="m-form__check-text">Huellas dactilares</span>
            </li>
            <li>
              <button type="button" class="m-form__btn m-form__check" data-id="4" v-on:click="selectTrack" :disabled="isHideBtn.isHideBtn4">
                <i class="orbes"></i>
              </button>
              <span class="m-form__check-text">Orbes</span>
            </li>
            <li>
              <button type="button" class="m-form__btn m-form__check" data-id="5" v-on:click="selectTrack" :disabled="isHideBtn.isHideBtn5">
                <i class="temp"></i>
              </button>
              <span class="m-form__check-text">Temperatura bajo cero</span>
            </li>
            <li>
              <button type="button" class="m-form__btn m-form__check" data-id="6" v-on:click="selectTrack" :disabled="isHideBtn.isHideBtn6">
                <i class="spititbox"></i>
              </button>
              <span class="m-form__check-text">Spirit Box</span>
            </li>
            <li>
              <button type="button" class="m-form__btn m-form__check" data-id="7" v-on:click="selectTrack" :disabled="isHideBtn.isHideBtn7">
                <i class="proyector"></i>
              </button>
              <span class="m-form__check-text">Proyector D.O.T.S</span>
            </li>
          </ul>
          <p class="m-form__btn-group-text-selected">
            {{textSelected}}
          </p>
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
    formData: Object,
    pista1: String,
    pista2: String,
    pista3: String,
    isHideBtn: Object
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
      namePhan: '',
      tracksSelected: 0,
      textSelected: '- Seleccione una prueba -',
      tracksId: []
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
        this.icon1 = ''
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
        this.icon2 = ''
        this.isSelected1 = true
        this.isSelected2 = false
        this.isSelected3 = true
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
        this.icon3 = ''
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
    },
    selectTrack (event) {
      const classBtn = event.currentTarget.className
      const trackId = event.currentTarget.getAttribute('data-id')
      let textSelectedAct = this.textSelected
      let tracksSelectedAct = this.tracksSelected
      let textAct = event.currentTarget.nextElementSibling.textContent
      let isEnd = true

      if (classBtn.indexOf('active') > -1) {
        if (tracksSelectedAct > 0) {
          event.currentTarget.classList.remove("active");
          this.tracksSelected =  tracksSelectedAct - 1

          if (textSelectedAct.indexOf(textAct + ' • ') > -1) {
            textAct = textAct + ' • '
            isEnd = false
          }

          const tracksSelectedActArray = textSelectedAct.split(textAct)
          
          switch (this.tracksSelected) {
            case 0:
              this.textSelected = '- Seleccione una prueba -'
              break;
            case 1:
              this.textSelected = tracksSelectedActArray.join('').replace(' • ','')
              break;
            case 2:
              if (!isEnd) {
                this.textSelected = tracksSelectedActArray.join('')
              } else {
                this.textSelected = tracksSelectedActArray.join('').substr(0, tracksSelectedActArray.join('').length - 3)
              }
              break;
            default:
              this.textSelected = tracksSelectedActArray.join('')
              break;
          }

          var indice = this.tracksId.indexOf(trackId)
          this.tracksId.splice(indice, 1)
        }
      } else {
        if (tracksSelectedAct < 3) {
          event.currentTarget.classList.add("active")
          this.tracksSelected =  tracksSelectedAct + 1

          if (this.tracksSelected === 1) {
            this.textSelected = textAct
          } else {
            this.textSelected = textSelectedAct + ' • ' + textAct
          }

          this.tracksId.push(trackId)
        }
      }
      this.$emit('selectTrunck', this.tracksId)
    }
  },
  mounted() {
    if(localStorage.namePhan) this.namePhan = localStorage.namePhan;
  }
}
</script>

<style lang="scss">
.m-form {
  height: 115px;
  display: block;
  position: fixed;
  top: 57px;
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
      }

      &-text-selected {
        text-align: center;
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
