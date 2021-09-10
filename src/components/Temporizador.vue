<template>
  <div class="m-temp">
    <div class=" card text-white bg-info" >
      <div class="card-body">
        <span>{{ countdown }}</span>
      </div>
    </div>
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
        msg: Boolean
    },
    data () {
        return {
            countdown: '00:00',
            expires_in: null,
            interval: null,
        }
    },
    destroyed () {
        clearInterval(this.interval)
    },
    watch: { 
      msg () {
        if (this.msg) {
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
          this.countdown = moment.utc(this.seconds).format('mm:ss')
          this.expires_in = this.seconds
          this._setInterval()
        },
        _setInterval () {
            this.interval = setInterval(() => {
                if (this.expires_in === 1) {
                  clearInterval(this.interval)
                  this.$emit('changeMsg', false)
                } else {
                  if (this.expires_in === 2) {
                    this.endSound()
                  }
                  this.expires_in -= 1
                  this.countdown = moment.utc(this.expires_in * 1000).subtract(1, 'seconds').format('mm:ss')
                }
            }, 1000)
        },
        endSound () {
          var audio = new Audio(require('../assets/sounds/endSound.mp3'))
          audio.play()
        }
    }
}
</script>

<style lang="scss">
  .m-temp {
    display: flex;

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