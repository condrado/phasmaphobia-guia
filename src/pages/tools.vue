<template>
    <div class="container-md">
        <h1 class="app-title">{{ $t('toolsTitle') }}</h1>
        <dir class="m-content">
            <template v-for="(instrument) in toolData">
                <article class="m-article" :key=instrument.title>
                    <h2>{{ $t(instrument.title) }}</h2>
                    <div class="m-content__p">
                        <figure :class="'patch' + instrument.patch">
                            <img class="m-content__img" :src="require(`../assets/images/${instrument.img}.jpg`)" alt="f"/>
                        </figure>
                        <span>{{instrument.desc}}</span>
                    </div>
                </article>
            </template>
        </dir>
    </div>
</template>

<script>
import jsonData from '../data/data.json'

export default {
  name: 'Tools',
  components: {},
  data() {
    return {
        toolData: jsonData.toolData,
    }
  },
  methods: {}
}
</script>

<style lang="scss">
    .m-content {
        margin-top: 80px;
        padding: 0;

        @media (min-width: 768px) {
            display: flex;
            flex-wrap: wrap;    
            justify-content: space-between;
        }

        &__p {
            display: flex;
            margin: 0 0 32px 0;
            line-height: 20px;

            span {
                margin: 0 0 0 16px;
                opacity: 0.7;   
            }
        }

        &__img {
                width: 138px;
            height: auto;
            position: absolute;
            z-index: 1;
        }

        h2 {
            border-bottom: 1px dashed #808080;
            font-size: 28px;
        }
    }

    .m-article {
        @media (min-width: 992px) {
            width: 48%;
        }

        .patch1,
        .patch2,
        .patch3,
        .patch4,
        .patch5 {
            position: relative;
            min-width: 210px;
            
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
                background-position: center top;
            }
        }

        .patch1 {
            min-height: 262px;

            &:before {
                background-image: url('../assets/images/patch-1b.png');
            }

            img {
                left: 39px;
                top: 44px;
            }
        }

        .patch2 {
            min-height: 252px;

            &:before {
                background-image: url('../assets/images/patch-2b.png');
            }

            img {
                left: 31px;
                top: 37px;
            }
        }

        .patch3 {
            min-height: 255px;

            &:before {
                background-image: url('../assets/images/patch-3b.png');
            }

            img {
                left: 30px;
                top: 30px;
            }
        }

        .patch4 {
            min-height: 205px;
            
            &:before {
                background-image: url('../assets/images/patch-4b.png');
            }
        }

        .patch5 {
            min-height: 215px;
            
            &:before {
                background-image: url('../assets/images/patch-5b.png');
            }
        }
    }
</style>