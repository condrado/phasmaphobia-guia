<template>
    <div class="container-md">
        <h1 class="app-title">{{ $t('homeTitle') }}</h1>
        <Form
            :formData="formData"
            :isHideBtn="isHideBtn"
            :isNameInput="isNameInput"
            :isNewGame="isNewGame"
            :inputValue="inputValue"
            :isTime="isTime"
            :isSelectedTime="isSelectedTime"
            :tracksSelected="tracksSelected"
            :tracksId="tracksId"
            :textSelected="textSelected"
            :activeBtn="activeBtn"
            @selectTrunck="selectTrunck"
            @newGame="newGame"
            @addName="addName"
            @newTime="newTime"
            @newSelectedTime="newSelectedTime"
        />
        <Cards 
          :tableData="tableData"
          :pistas="pistas"
        />
    </div>
</template>

<script>
import Form from '../components/Form.vue'
import Cards from '../components/Cards.vue'
import jsonData from '../data/data.json'

export default {
  name: 'Home',
  components: {
    Form,
    Cards
  },
  props: {
    isNameInput: Boolean,
    isNewGame: Boolean,
    inputValue: String,
    isTime: Boolean,
    isSelectedTime: Boolean,
    isHideBtn: Object,
    tracksSelected: Number,
    tracksId: Array,
    textSelected: String,
    activeBtn: Object,
    pistas: String,
    tableData: Object
  },
  data() {
    return {
      formData: jsonData.formData,
      homeTitle: jsonData.homeTitle,
    }
  },
  methods: {
    selectTrunck(event) {
      this.$emit('selectTrack', event)
    },
    showtiposIcons () {
      this.$emit('handleTracks')
    },
    selectSearchClass (selecteNum, selected, options) {
      let selectedArray = []

      if (selected) {
        selectedArray = selected.split('-');

        switch (selecteNum) {
          case 1:
            this.pista1 = options[selectedArray[1]].iconClass
            this.pista2 = ''
            this.pista3 = ''
            break;
          case 2:
            this.pista2 = options[selectedArray[1]].iconClass
            this.pista3 = ''
            break;
          case 3:
            this.pista3 = options[selectedArray[1]].iconClass
            break;
          default:
            break;
        }
      }
    },
    newGame (activeNameInput) {
      this.$emit('newGame', activeNameInput)
    },
    newSelectedTime (activeSelectedTime) {
      this.$emit('newSelectedTime', activeSelectedTime)
    },
    newTime (activeTime) {
      this.$emit('newTime', activeTime)
    },
    addName (newName) {
      this.$emit('addName', newName)
    },
  }
}
</script>