<template>
    <div class="container-md">
        <h1 class="app-title">Libro de registro</h1>
        <Form
            :formData="formData"
            @changeSelected1="changeSelected1"
            @changeSelected2="changeSelected2"
            @changeSelected3="changeSelected3"
        />
        <Cards :tableData="tableData"/>
    </div>
</template>

<script>
import Form from '../components/Form.vue'
import Cards from '../components/Cards.vue'
import json from 'https://raw.githubusercontent.com/conradoTCK/phasmaphobia-guia/master/src/data/data.json'

export default {
  name: 'Home',
  components: {
    Form,
    Cards
  },
  data() {
    return {
      formData: json.formData,
      tableData: json.tableData,

    }
  },
  methods: {
    changeSelected1 (childrenData) {
      this.resetDisbledOptions(childrenData.options2, childrenData.selected1, '1')
      this.resetDisbledOptions(childrenData.options3, childrenData.selected1, '1')
      this.disbledOptions(childrenData.options2, childrenData.selected1)
      this.disbledOptions(childrenData.options3, childrenData.selected1)
      this.showtipos(1)
    },
    changeSelected2 (childrenData) {
      this.resetDisbledOptions(childrenData.options3, childrenData.selected1, '2')
      this.disbledOptions(childrenData.options3, childrenData.selected2)
      this.showtipos(2)
    },
    changeSelected3 () {
      this.showtipos(3)
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
      } else {
        this.formData.selected3 = null
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
    }
  }
}
</script>