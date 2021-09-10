<template>
  <div class="m-cards">
    <div class="m-cards__header">
      <h2>Fantasmas</h2>
      <div class="m-cards__list">
        <button v-on:click="changeFormatCard" v-if="isList"><i class='list'></i></button>
        <button v-on:click="changeFormatList" v-else><i class='large'></i></button>
      </div>
    </div>
    <div class="blog row" v-bind:class="{ list: isList }">
      <template v-for="(item) in items">
        <div class="blog__card col-12 col-md-6 col-lg-4" :key=item.tipo v-if="item.isActive">
          <div class="blog__container" >
            <h3 class="blog__title col-12 text-center">{{item.tipo}}</h3>
            <div class="blog__figure col-4" :class="pistas">
              <img :src="require(`../assets/images/${item.img}.jpg`)" alt="f">
              <p class="paragraph text-center" v-html="item.pista" :class="[pista1, pista2, pista3]"></p>
            </div>
            <div class="blog__body col-8">
                <h4>Fortaleza</h4>
                <p class="paragraph text-justify blog__desc-1">{{item.fortaleza}}</p>
                <h4>Debilidad</h4>
                <p class="paragraph text-justify blog__desc-2">{{item.debilidad}}</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  props: {
    tableData: Object,
    pista1: String,
    pista2: String,
    pista3: String,
    pistas: String
  },
  data() {
    return {
      fields: this.tableData.fields,
      items: this.tableData.items,
      isList: false,
      pista1Act: this.pista1,
      pista2Act: this.pista2,
      pista3Act: this.pista3,
      patchs: this.pistas
    }
  },
  methods: {
    classExtraction(index) {
      return 'th th-' + index
    },
    imageView (img) {
      return require(img)
    },
    changeFormatCard () {
      this.isList = false
      localStorage.isList = false;
    },
    changeFormatList () {
      this.isList = true
      localStorage.isList = true;
    }
  },
  beforeMount() {
    if(localStorage.isList) this.isList = localStorage.isList === 'true';
  }
}
</script>

<style lang="scss">
.m-cards {
  position: relative;
  z-index: 1;
  
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 2;
    top: 171px;
    left: 0;
    width: 100%;
    padding: 0 12px;
    background-color: #222;
    background-image: url('../assets/images/bg-page.jpg');

    @media (min-width: 768px) {
      text-align: center;
      position: static;
      padding: 0;
    }
  }

  &__list {
    button {
      border: 0;
      background-color: transparent;
      padding-right: 0;

      i {
        color: #ffffff;
        font-size: 26px;

        &::after {
          display: none;
        }
      }
    }
  }
}

.blog {
  margin-bottom: 60px;

  @media (min-width: 768px) {
   // padding: 0 12px;
  }
 
  &__card {
    margin-bottom: 12px;

    @media (min-width: 768px) {
       margin-bottom: 24px;
    }

    h3 {
      margin-bottom: 20px;
      max-height: 32px;
    }

    img {
      width: 100%;
    }
  }
  
  &__container {
    border: 1px dashed #808080;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    height: 100%;
    align-content: flex-start;

  }

  &__title {
    width: 100%;
    text-transform: uppercase;
  }

  &__body {
    padding-left: 15px;

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__figure {
    margin-bottom: 0; 
    position: relative;

    p {
      margin: 16px 0 0;
      font-size: 20px;

      i {
        &:first-child {
          &:hover {
            &::after {
              left: -72px;
            }
          }
        }
      }
    }

    &.patch1,
    &.patch2,
    &.patch3 {
      &:before {
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        z-index: 1;
        display: block;
        position: absolute;
        background-size: 100%;
        height: 100%;
      }
    }

    &.patch1 {
      &:before {
        background-image: url('../assets/images/patch.png');
      }
    }

    &.patch2 {
      &:before {
        background-image: url('../assets/images/patch2.png');
      }
    }

    &.patch3 {
      &:before {
        background-image: url('../assets/images/patch3.png');
      }
    }
  }

  &__desc-1 {
    @media (min-width: 768px) {
      min-height: 96px;
    }

    @media (min-width: 992px) {
      min-height: 144px;
    }

    @media (min-width: 1200px) {
      min-height: 96px;
    }
  }

  &.list {
    .blog {
      &__card {
        width: 100%;
      }

      &__container {
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
      }

      &__title {
        width: auto;
        margin: 0;
        border-bottom: 0;
      }

      &__figure {
        width: auto;
        display: flex;
        align-items: center;

        &.patch1,
        &.patch2,
        &.patch3 {
          &::before {
            display: none;;
          }
        }

        img {
          display: none;
        }

        .paragraph {
          margin: 0;

          i {
            width: 23px;

            &::after {
              left: auto;
              right: -15px;
            }
          }
        }
      }
      &__body {
        display: none;
      }
    }
  }

  &.row {
    margin-top: 215px;

    @media (min-width: 768px) {
      margin-top: 0;
    }
  }

  .emf {
    .emf {
      opacity: .2;
    }
  }
  .write {
    .write {
      opacity: .2;
    }
  }
  .handprint {
    .handprint {
      opacity: .2;
    }
  }
  .orbes {
    .orbes {
      opacity: .2;
    }
  }
  .temp {
    .temp {
      opacity: .2;
    }
  }
  .spititbox {
    .spititbox {
      opacity: .2;
    }
  }
  .proyector {
    .proyector {
      opacity: .2;
    }
  }
}
</style>
