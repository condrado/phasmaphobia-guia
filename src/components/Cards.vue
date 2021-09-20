<template>
  <div class="m-cards">
    <div class="m-cards__header">
      <h2>{{ $t('nameGhost') }}</h2>
      <div class="m-cards__list">
        <button v-on:click="changeFormatCard" v-if="isList"><i class='list'></i></button>
        <button v-on:click="changeFormatList" v-else><i class='large'></i></button>
      </div>
    </div>
    
    <div class="blog row" v-bind:class="{ list: isList }">
      <template v-for="(item) in items">
        <div class="blog__card col-12 col-lg-6 " :key=item.tipo v-if="item.isActive">
          <div class="blog__container" >
            <h3 class="blog__title col-12 text-center">{{ $t(item.tipo) }}</h3>
            <div class="blog__figure col-5" :class="pistas">
              <figure :class="'patch' + item.patch + 'b'">
                <img :src="require(`../assets/images/${item.img}.jpg`)" alt="f">
              </figure>
              <p class="paragraph text-center">
                <i v-for="pista in item.pista" :key="pista.title" :data-title=$t(pista.title) :class=pista.class></i>
              </p>
            </div>
            <div class="blog__body col-7">
              <h4>{{ $t('cards.fortress')}}</h4>
              <p class="paragraph blog__desc-1">{{ $t(item.fortaleza) }}</p>
              <h4>{{ $t('cards.weakness')}}</h4>
              <p class="paragraph blog__desc-2">{{ $t(item.debilidad) }}</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import jsonData from '../data/data.json'

export default {
  name: 'Cards',
  props: {
    tableData: Object,
    pistas: String
  },
  data() {
    return {
      items: this.tableData.items,
      isList: false,
      nameGhost: jsonData.tableData.nameGhost
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
    top: 165px;
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
      padding-bottom: 6px;
      font-size: 24px;
    }

    img {
      width: 100%;
    }
  }
  
  &__container {
    border: 1px dashed #808080;
    border-radius: 5px;
    display: block;
    flex-wrap: wrap;
    padding: 7px 15px 15px 15px;
    height: 100%;
    align-content: flex-start;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  &__title {
    width: 100%;
    text-transform: capitalize;
  }

  &__body {
    padding-left: 15px;

    p {
      line-height: 16px;
      opacity: 0.7;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__figure {

    @media (min-width: 768px) {
      display: flex;
    }

    &[class*='col-'] {
      display: block;
      max-width: 300px;
      padding: 0;
      margin: 0 auto;
      text-align: center;

      ~ .blog__body {
        max-width: 100%;
      }
    }

    &.col-4 {
      padding: 0;
    }

    p {
      margin: 55px 0 0;
      font-size: 20px;
      display: flex;
      justify-content: center;

      i {
        width: 23px;
        margin: 0 6px;

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

    .patch1b,
    .patch2b,
    .patch3b,
    .patch4b,
    .patch5b {

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
        background-repeat: no-repeat;
        background-size: 211px;
        background-position: center top;
      }

      img {
        position: absolute;
        z-index: 1;
        width: 137px;
      }
    }

    .patch1b {
      min-height: 220px;

      &:before {
        background-image: url('../assets/images/patch-1b.png');
      }

      img {
        left: 84px;
        top: 45px;

        @media (min-width: 768px) {
          left: 72px;
          top: 45px;
        }

        @media (min-width: 992px) {
          left: 21px;
          top: 45px;
        }

        @media (min-width: 1200px) {
          left: 40px;
          top: 45px;
        }
      }
    }

    .patch2b {
      min-height: 210px;

      &:before {
        background-image: url('../assets/images/patch-2b.png');
      }

      img {
        left: 76px;
        top: 38px;

        @media (min-width: 768px) {
          left: 63px;
          top: 38px;
        }

        @media (min-width: 992px) {
          left: 13px;
          top: 38px;
        }

        @media (min-width: 1200px) {
          left: 31px;
          top: 38px;
        }
      }


    }

    .patch3b {
      min-height: 215px;

      &:before {
        background-image: url('../assets/images/patch-3b.png');
      }

      img {
        left: 76px;
        top: 32px;

        @media (min-width: 768px) {
          left: 63px;
          top: 31px;
        }

        @media (min-width: 992px) {
          left: 12px;
          top: 32px;
        }

        @media (min-width: 1200px) {
          left: 31px;
          top: 32px;
        }
      }
    }

    .patch4b {
      min-height: 205px;

      &:before {
        background-image: url('../assets/images/patch-4b.png');
      }

      img {
        left: 85px;
        top: 29px;

        @media (min-width: 768px) {
          left: 73px;
          top: 29px;
        }

        @media (min-width: 992px) {
          left: 23px;
          top: 29px;
        }

        @media (min-width: 1200px) {
          left: 41px;
          top: 29px;
        }
      }
    }

    .patch5b {
      min-height: 215px;

      &:before {
        background-image: url('../assets/images/patch-5b.png');
      }

      img {
        left: 85px;
        top: 37px;

        @media (min-width: 768px) {
          left: 73px;
          top: 37px;
        }

        @media (min-width: 992px) {
          left: 22px;
          top: 37px;
        }

        @media (min-width: 1200px) {
          left: 41px;
          top: 37px;
        }
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
        padding: 15px 8px 15px 15px;
      }

      &__title {
        width: auto;
        margin: 0;
        border-bottom: 0;
        padding: 0;
        max-width: none;
        flex: none;
      }

      &__figure {
        width: auto;
        display: flex;
        align-items: center;
        max-width: none;
        padding: 0;

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
          display: flex;

          i {
            margin: 0 8px;

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
  .spiritbox {
    .spiritbox {
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
