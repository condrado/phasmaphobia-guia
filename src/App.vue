<template>
  <div id="app">
    <InitMove v-if="isInitMove" :activeInitMove="activeInitMove" :activeInitMoveImg="activeInitMoveImg"/>
    <Menu :menuList="menuList"/>
    <router-view 
      :isNameInput="isNameInput"
      :isNewGame="isNewGame"
      :inputValue="inputValue"
      :isTime="isTime"
      :isSelectedTime="isSelectedTime"
      :isHideBtn="isHideBtn"
      :tracksSelected="tracksSelected"
      :tracksId="tracksId"
      :textSelected="textSelected"
      :activeBtn="activeBtn"
      :pistas="pistas"
      :tableData="tableData"
      @newGame="newGame"
      @addName="addName"
      @newTime="newTime"
      @newSelectedTime="newSelectedTime"
      @handleTracks="handleTracks"
      @selectTrack="selectTrack"
    />
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import jsonData from './data/data.json'
import InitMove from './components/Init-move.vue'

export default {
  name: 'App',
  components: {
    Menu,
    InitMove
  },
  data() {
    return {
      isInitMove: true,
      activeInitMove: 'active',
      activeInitMoveImg: '',
      isNameInput: false,
      isNewGame: true,
      inputValue: '',
      isTime: false,
      isSelectedTime: false,
      names: [],
      isFirstName: true,
      tableData: jsonData.tableData,
      formData: jsonData.formData,
      menuList: jsonData.menu,
      tracksSelected: 0,
      tracksId: [],
      textSelected: '',
      pistas: '',
      btnActives: [],
      isHideBtn: {
        isHideBtn1: false,
        isHideBtn2: false,
        isHideBtn3: false,
        isHideBtn4: false,
        isHideBtn5: false,
        isHideBtn6: false,
        isHideBtn7: false
      },
      activeBtn: {
        activeBtn1: false,
        activeBtn2: false,
        activeBtn3: false,
        activeBtn4: false,
        activeBtn5: false,
        activeBtn6: false,
        activeBtn7: false
      }
    }
  },
  methods: {
    newGame (activeNameInput) {
      this.isNewGame = true
      this.isNameInput = activeNameInput
    },
    newSelectedTime (activeSelectedTime) {
      this.isSelectedTime = activeSelectedTime
    },
    newTime (activeTime) {
      this.isTime = activeTime
    },
    addName (newName) {
      this.isNameInput = newName.isNameInput
      this.isNewGame = newName.isNewGame
      this.inputValue = newName.inputValue
      this.saveNames()
      this.isFirstName = false
    },
    saveNames () {
      if (this.isFirstName) {
        this.names.unshift(this.inputValue)
      } else {
        this.names.shift()
        this.names.unshift(this.inputValue)
      }

      localStorage.namesPhanStr = this.names.join('|')
    },
    handleTracks (tracks) {
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
            if (classIcons.indexOf(this.formData.options[track].iconClass) < 0) {
              classIcons = classIcons + ' ' + this.formData.options[track].iconClass
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
    selectTrack (event) {
      const classBtn = event.currentTarget.className
      const trackId = event.currentTarget.getAttribute('data-id')
      let textSelectedAct = this.textSelected
      let tracksSelectedAct = this.tracksSelected
      let textAct = event.currentTarget.nextElementSibling.textContent
      // let classIcon = event.currentTargeta.firstElementChild.getAttribute('class')
      let isEnd = true

      if (classBtn.indexOf('active') > -1) {
        if (tracksSelectedAct > 0) {
          this.activeBtn['activeBtn' + trackId] = ''
          this.tracksSelected =  tracksSelectedAct - 1

          if (textSelectedAct.indexOf(textAct + ' • ') > -1) {
            textAct = textAct + ' • '
            isEnd = false
          }

          const tracksSelectedActArray = textSelectedAct.split(textAct)
          
          switch (this.tracksSelected) {
            case 0:
              this.textSelected = ''
              this.btnActives.pop()
              break;
            case 1:
              this.textSelected = tracksSelectedActArray.join('').replace(' • ','')
              if (this.btnActives[0] === trackId) {
                this.btnActives.shift() 
              } else {
                this.btnActives.pop()
              }

              this.activeBtn['activeBtn' + this.btnActives[0]] = 'active active1 end'

              break;
            case 2:
              if (!isEnd) {
                this.textSelected = tracksSelectedActArray.join('')
              } else {
                this.textSelected = tracksSelectedActArray.join('').substr(0, tracksSelectedActArray.join('').length - 3)
              }

              if (this.btnActives[0] === trackId) {
                this.btnActives.shift() 
              } else if (this.btnActives[this.btnActives.length - 1] === trackId) {
                this.btnActives.pop()
              } else {
                this.btnActives.splice(1, 1);
              }

              this.activeBtn['activeBtn' + this.btnActives[0]] = 'active active1'
              this.activeBtn['activeBtn' + this.btnActives[1]] = 'active active2 end'

              break;
            default:
              this.textSelected = tracksSelectedActArray.join('')
              break;
          }

          console.log(this.btnActives)

          var indice = this.tracksId.indexOf(trackId)
          this.tracksId.splice(indice, 1)
        }
      } else {
        if (tracksSelectedAct < 3) {
          this.btnActives.push(trackId)
          this.btnActives.forEach(btn => { 
            if (btn !== trackId)  {
              this.activeBtn['activeBtn' + btn] =  this.activeBtn['activeBtn' + btn].replace(' end', '')
            } 
          })

          this.activeBtn['activeBtn' + trackId] = 'active active' + (tracksSelectedAct + 1) + ' end'
          this.tracksSelected =  tracksSelectedAct + 1

          if (this.tracksSelected === 1) {
            this.textSelected = textAct
          } else {
            this.textSelected = textSelectedAct + ' • ' + textAct
          }

          this.tracksId.push(trackId)
        }
      }
      this.handleTracks(this.tracksId)
    },

  },
  mounted() {
    var localStorageAct = localStorage.namesPhanStr

    if(localStorageAct) {
      var localStorageActArr = localStorageAct.split('|')
      this.names = localStorageActArr
    }


    setTimeout(() => {
      this.activeInitMoveImg = 'active'
    }, 1000);

    setTimeout(() => {
      this.activeInitMoveImg = ''
    }, 3000);

    setTimeout(() => {
      this.activeInitMove = ''
    }, 4000);

    setTimeout(() => {
      this.isInitMove = false
    }, 5000);
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Sue+Ellen+Francisco&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Walter+Turncoat&display=swap');


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
  display: inline-block;
  text-align: center;
  position: relative;

  &:hover {
    &::after {
      // font-family: 'Cutive Mono', monospace;
      // font-family: 'Nanum Pen Script', cursive;
      // font-family: 'Annie Use Your Telescope', cursive;
      // font-family: 'Sue Ellen Francisco', cursive;
      font-family: 'Walter Turncoat', arial, monospace;
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
      content: '\E801';
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
  &.spiritbox {
    &::before {
      content: '\e802';
    }
  }
  &.proyector {
    &::before {
      content: '\f21d';
    }
  }
  &.large {
    &::before {
      content: '\E803';
    }
  }
  &.list {
    &::before {
      content: '\E804';
    }
  }
  &.menu {
    &::before {
      content: '\E805';
    }
  }
  &.close {
    &::before {
      content: '\E806';
    }
  }
  &.reset {
    &::before {
      content: '\E807';
    }
  }
  &.add {
    &::before {
      content: '\F234';
    }
  }
  &.remove {
    &::before {
      content: '\f235';
    }
  }
  &.time {
    &::before {
      content: '\E800';
    }
  }
  &.down {
    &::before {
      content: '\E808';
    }
  }
  &.up {
    &::before {
      content: '\E809';
    }
  }
}

#app {
  // font-family: 'Cutive Mono', monospace;
  // font-family: 'Nanum Pen Script', cursive;
  // font-family: 'Annie Use Your Telescope', cursive;
  // font-family: 'Sue Ellen Francisco', cursive;
  font-family: 'Walter Turncoat', cursive;
  color: #fff;
  position: relative;
}

body {
    background-color: #222 !important;
    background-image: url('assets/images/bg-page.jpg');
}

h1 {
  text-align: center;
  font-size: 32px;
}

h2 {
  text-align: left;
}

h3 {
  border-bottom: 1px dashed #808080;
}

.link,
.router-link-active {
  color: #fff;
  line-height: 16px;
  display: block;
  font-size: 16px;

  &:hover {
    color: #fff;
  }
}

.app-title {
  padding: 8px 60px 8px 12px;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  text-align: left;
  background-color: #222;
  background-image: url('assets/images/bg-page.jpg');
  width: 100%;
  z-index: 2;
  font-size: 32px;

  @media (min-width: 768px) {
    position: static;
    margin-top: 8px;
    margin-bottom: 16px;
    padding: 8px 0 16px;
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
