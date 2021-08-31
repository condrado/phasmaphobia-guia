<template>
  <div id="app">
    <div class="container-md">
      <h1 class="app-title">Guía Phasmaphobia</h1>
      
      <Form
        :formData="formData"
        @changeSelected1="changeSelected1"
        @changeSelected2="changeSelected2"
        @changeSelected3="changeSelected3"
      />
      <Cards :tableData="tableData"/>
      <!-- <Table :tableData="tableData"/> -->
    </div>
  </div>
</template>

<script>
import Form from './components/Form.vue'
// import Table from './components/Table.vue'
import Cards from './components/Cards.vue'
import json from './data/data.json'

export default {
  name: 'App',
  components: {
    Form,
    // Table,
    Cards
  },
  data() {
    return {
      formData: json.formData,
      tableData: json.tableData
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');

@font-face {
  font-family: 'Standard Icons';
  src: url('assets/fonts/icons/fontello.eot?yub9z6');
  src: url('assets/fonts/icons/fontello.eot?yub9z6#iefix') format('embedded-opentype'),
  url('assets/fonts/icons/fontello.ttf?yub9z6') format('truetype'),
  url('assets/fonts/icons/fontello.woff?yub9z6') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

i {
  font-family: 'Standard Icons';
  font-style: normal;
  width: 20px;
  display: inline-block;
  text-align: center;
  position: relative;

  &:hover {
    &::after {
      font-family: 'Cutive Mono', monospace;
      color: #fff;
      content: attr(data-title);
      position: absolute;
      background-color: #222;
      background-image: url('assets/images/bg-page.jpg');
      z-index: 2;
      width: 220px;
      left: -100px;
      top: -40px;
      line-height: 30px;
      border: 1px dashed #808080;
      border-radius: 5px;
    }
  }

  &.emf {
    &::before {
      content: '\F1EB';
    }
  }
  &.write {
    &::before {
      content: '\e800';
    }
  }
  &.handprint {
    &::before {
      content: '\F256';
    }
  }
  &.orbes {
    &::before {
      content: '\F22D';
    }
  }
  &.temp {
    &::before {
      content: '\F2CB';
    }
  }
  &.spititbox {
    &::before {
      content: '\e801';
    }
  }
  &.proyector {
    &::before {
      content: '\f21d';
    }
  }
  &.large {
    &::before {
      content: '\E802';
    }
  }
  &.list {
    &::before {
      content: '\E803';
    }
  }
}

#app {
  font-family: 'Cutive Mono', monospace;
  color: #fff;
}

body {
    background-color: #222;
    background-image: url('assets/images/bg-page.jpg');
}

h1 {
  text-align: center;
}

h2 {
  text-align: left;
}

.app-title {
  padding: 8px 12px 16px;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 57px;
  text-align: left;
  background-color: #222;
  background-image: url('assets/images/bg-page.jpg');
  width: 100%;
  z-index: 1;

  @media (min-width: 768px) {
    position: static;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  &::after {
    content: "";
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: #222;
    background-image: url('assets/images/bg-page.jpg');
    height: 100px;
  }
}
</style>
