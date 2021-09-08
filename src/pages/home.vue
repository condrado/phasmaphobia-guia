<template>
    <div class="container-md">
        <h1 class="app-title">Libro de registros</h1>
        <Form
            :formData="formData"
            :pista1="pista1"
            :pista2="pista2"
            :pista3="pista3"
            :isHideBtn="isHideBtn"
            @selectTrunck="selectTrunck"
            @changeSelected1="changeSelected1"
            @changeSelected2="changeSelected2"
            @changeSelected3="changeSelected3"
        />
        <Cards 
          :tableData="tableData"
          :pista1="pista1"
          :pista2="pista2"
          :pista3="pista3"
          :pistas="pistas"
        />
    </div>
</template>

<script>
import Form from '../components/Form.vue'
import Cards from '../components/Cards.vue'
// import axios from "axios";
import json from '../data/data.json'

export default {
  name: 'Home',
  components: {
    Form,
    Cards
  },
  data() {
    return {
      // formData: {},
      // tableData: {}
      formData: json.formData,
      tableData: json.tableData,
      pista1: '',
      pista2: '',
      pista3: '',
      pistas: '',
      isHideBtn: {
        isHideBtn1: false,
        isHideBtn2: false,
        isHideBtn3: false,
        isHideBtn4: false,
        isHideBtn5: false,
        isHideBtn6: false,
        isHideBtn7: false
      }
    }
  },
  methods: {
    selectTrunck(track) {
      this.showtiposIcons(track)
    },
    changeSelected1 (childrenData) {
      this.resetDisbledOptions(childrenData.options2, childrenData.selected1, '1')
      this.resetDisbledOptions(childrenData.options3, childrenData.selected1, '1')
      this.disbledOptions(childrenData.options2, childrenData.selected1)
      this.disbledOptions(childrenData.options3, childrenData.selected1)
      this.showtipos(1)
      this.selectSearchClass(1, childrenData.selected1, childrenData.options1)
    },
    changeSelected2 (childrenData) {
      this.resetDisbledOptions(childrenData.options3, childrenData.selected2, '2')
      this.disbledOptions(childrenData.options3, childrenData.selected2)
      this.showtipos(2)
      this.selectSearchClass(2, childrenData.selected2, childrenData.options1)
    },
    changeSelected3 (childrenData) {
      this.showtipos(3)
      this.selectSearchClass(3, childrenData.selected3, childrenData.options1)
    },
    disbledOptions (options, selected) {
      if (selected) {

        let opt = 0
        options.find(function(option, index) {
          if ( option.value) {
            const selectedId = selected.split('-')
            const optionId = option.value.split('-')
            if(optionId[1] === selectedId[1]) {
              opt = index
            }
          }
        })
        options[opt].disabled = true
      }
    },
    resetDisbledOptions (options, selected, selectInit) {
      if (selected) {
        options.forEach(option => {
          if ( option.value) {
            const selectedId = selected.split('-')
            const optionId = option.value.split('-')
            if (optionId[1] !== selectedId[1]) {
              option.disabled = false
            }
          }
        })
      }

      if (selectInit === '1') {
        this.formData.selected2 = null
        this.formData.selected3 = null

        if (!selected) {
          this.formData.selected1 = null
          this.pista1 = ''
          this.pista2 = ''
          this.pista3 = ''
        }

      } else {
        this.formData.selected3 = null

        if (!selected) {
          this.formData.selected2 = null
          this.pista2 = ''
          this.pista3 = ''
        }
      }
    },
    showtipos (numberSelected) {
      let condition = false
      let pista1 = ''
      let pista2 = ''
      let pista3 = ''

      this.tableData.items.forEach(item => {
        if (numberSelected === 1) {
          if (this.formData.selected1) {
            pista1 = this.formData.selected1.split('-')
            condition = item.pistaId.indexOf(pista1[1]) > -1
          } else {
            condition = true
          }
        } else if (numberSelected === 2) {
          if (this.formData.selected1 && this.formData.selected2) {
            pista1 = this.formData.selected1.split('-')
            pista2 = this.formData.selected2.split('-')
            condition = item.pistaId.indexOf(pista1[1]) > -1 && item.pistaId.indexOf(pista2[1]) > -1 
          } else if (this.formData.selected1 && !this.formData.selected2) {
            pista1 = this.formData.selected1.split('-')
            condition = item.pistaId.indexOf(pista1[1]) > -1
          } else {
            condition = true
          }
        } else {
          if (this.formData.selected1 && this.formData.selected2 && this.formData.selected3) {
            pista1 = this.formData.selected1.split('-')
            pista2 = this.formData.selected2.split('-')
            pista3 = this.formData.selected3.split('-')
            condition = item.pistaId.indexOf(pista1[1]) > -1 && item.pistaId.indexOf(pista2[1]) > -1 && item.pistaId.indexOf(pista3[1]) > -1
          } else if (this.formData.selected1 && this.formData.selected2) {
            pista1 = this.formData.selected1.split('-')
            pista2 = this.formData.selected2.split('-')
            condition = item.pistaId.indexOf(pista1[1]) > -1 && item.pistaId.indexOf(pista2[1]) > -1 
          } else if (this.formData.selected1 && !this.formData.selected2) {
            pista1 = this.formData.selected1.split('-')
            condition = item.pistaId.indexOf(pista1[1]) > -1
          } else {
            condition = true
          }
        } 

        if (condition) {
          item.isActive = true
        } else {
          item.isActive = false
        }
      })
    },
    showtiposIcons (tracks) {
      let classIcons = ''
      let tracksPhant = []
      let numberTracks = Object.values(this.isHideBtn).length

      this.tableData.items.forEach(item => {
        let isActive = true
        let pistaId = []

        tracks.forEach(track => {
          if (item.pistaId.indexOf(track) < 0) {
            isActive = false
          } else {
            if (classIcons.indexOf(this.formData.options1[track].iconClass) < 0) {
              classIcons = classIcons + ' ' + this.formData.options1[track].iconClass
            }
      
            pistaId.push(item.pistaId)
          }
        })

        if (isActive) {
          tracksPhant.push(pistaId.join('-'))
        }

        item.isActive = isActive
      })

      for (let index = 0; index < numberTracks; index++) {
        const i = index + 1
        const tracksPhantStr = tracksPhant.join('-')

        if (tracks.length > 0) {
          if (tracksPhantStr.indexOf(i + '') < 0) {
            this.isHideBtn['isHideBtn' + i] = true
          } else {
            this.isHideBtn['isHideBtn' + i] = false
          }
        } else {
          this.isHideBtn['isHideBtn' + i] = false
        }
      }

      this.pistas = classIcons
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
    }
  },
  mounted() {
    // const api = 'https://raw.githubusercontent.com/conradoTCK/phasmaphobia-guia/master/src/data/data.json'
    
    // axios.get(api).then((response) => {
    //   this.formData = response.data.formData
    //   this.tableData = response.tableData
    // })
  }
}
</script>