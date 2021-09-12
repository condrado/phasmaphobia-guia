<template>
  <div class="m-temp">
    <div class=" card text-white bg-info" >
      <div class="card-body">
        <span>{{ countdown }}</span>
      </div>
    </div>
    <div class="m-temp__end" :class="classTemp" v-if="alertTemp"></div>
  </div>
</template>

<script>
import * as moment from 'moment';
export default {
    name: 'Temporizador',
    props: {
        seconds: {
            type: Number,
            required: true,
        },
        isRunTemp: Boolean
    },
    data () {
        return {
            countdown: '00:00',
            expires_in: null,
            interval: null,
            classTemp: '',
            alertTemp: false
        }
    },
    destroyed () {
        clearInterval(this.interval)
    },
    watch: { 
      isRunTemp () {
        if (this.isRunTemp) {
          clearInterval(this.interval)
          this.countdown = ''
          this.expires_in = null
          this.interval = null
          this.initTemp()
        }
      }
    },
    methods: {
        initTemp () {
          this.expires_in = this.seconds
          this.countdown =  moment.utc(this.expires_in * 1000).subtract(1, 'seconds').format('mm:ss')
          this._setInterval()
        },
        _setInterval () {
            this.interval = setInterval(() => {
                if (this.expires_in === 1) {
                  clearInterval(this.interval)
                  this.$emit('runTemp', false)
                } else {
                  if (this.expires_in === 2) {
                    this.endTemp()
                  }
                  this.expires_in -= 1
                  this.countdown = moment.utc(this.expires_in * 1000).subtract(1, 'seconds').format('mm:ss')
                }
            }, 1000)
        },
        endTemp () {
          this.alertTemp = true
          
          setTimeout(() => {
            this.classTemp = ' active'
          }, 40);

          setTimeout(() => {
            this.classTemp = ''
          }, 200);
          
          setTimeout(() => {
            this.alertTemp = false
          }, 240);
        }
    }
}
</script>

<style lang="scss">
  .m-temp {
    display: flex;

    &__end {
      position: fixed;
      width: 100vw;
      height: 100vh;
      background-color: #fff;
      left: 0;
      top: 0;
      -webkit-transition: opacity 0.4s ease;
      -moz-transition: opacity 0.4s ease;
      -o-transition: opacity 0.4s ease;
      transition: opacity 0.4s ease;
      opacity: 0;

      &.active {
        opacity: .5;
        -webkit-transition: opacity 0.4s ease;
        -moz-transition: opacity 0.4s ease;
        -o-transition: opacity 0.4s ease;
        transition: opacity 0.4s ease;

      }
    }

    .bg-info {
      background-color: transparent !important;
    }
    
    .card {
      &-body {
        padding: 0;
        font-size: 16px;
        display: flex;
        align-items: center;
      }
    }
  }
</style>