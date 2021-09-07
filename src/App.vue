<template>
  <div id="app">
    <Menu />
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  },
  data() {
    return {}
  },
  methods: {}
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
  &.menu {
    &::before {
      content: '\E804';
    }
  }
  &.close {
    &::before {
      content: '\E805';
    }
  }
  &.reset {
    &::before {
      content: '\E806';
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
}

#app {
  font-family: 'Cutive Mono', monospace;
  color: #fff;
  position: relative;
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
  z-index: 2;

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
