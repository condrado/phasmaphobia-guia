<template>
  <div class="m-init-move" :class="activeInitMove">
    <img  :class="activeInitMoveImg" :src="require(`../assets/images/image-init-move.png`)" alt="f">
  </div>
</template>

<script>
export default {
  name: 'InitMove',
  props: {
    activeInitMove: String,
    activeInitMoveImg: String
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
.m-init-move {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: #000;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transition: opacity 1s ease;
  -moz-transition: opacity 1s ease;
  -o-transition: opacity 1s ease;
  transition: opacity 1s ease;
  opacity: 0;

  &.active {
    -webkit-transition: opacity 1s ease;
    -moz-transition: opacity 1s ease;
    -o-transition: opacity 1s ease;
    transition: opacity 1s ease;
    opacity: 1;
  }

  img {
    -webkit-transition: opacity 1s ease;
    -moz-transition: opacity 1s ease;
    -o-transition: opacity 1s ease;
    transition: opacity 1s ease;
    opacity: 0;

    &.active {
      -webkit-transition: opacity 1s ease;
      -moz-transition: opacity 1s ease;
      -o-transition: opacity 1s ease;
      transition: opacity 1s ease;
      opacity: 1;
    }
  }
}
</style>
