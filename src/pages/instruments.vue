<template>
    <div class="container-md">
        <h1 class="app-title">Instrumentos</h1>
        <dir class="m-content">
            <template v-for="(instrument) in instrumentData">
                <article class="m-article" :key=instrument.title>
                    <h2>{{instrument.title}}</h2>
                    <div class="m-content__p">
                        <figure v-bind:class="{patch1: instrument.patch == 1, patch2: instrument.patch == 2, patch3: instrument.patch == 3}">
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
import jsonEs from '../data/data-es.json'

export default {
  name: 'Instruments',
  components: {},
  data() {
    return {
        instrumentData: jsonEs.instrumentData,
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

             span {
                 margin: 0 0 0 16px;
             }
        }

        &__img {
            width: 125px;
            height: auto;
        }

        h2 {
            border-bottom: 1px dashed #808080;
        }
    }

    .m-article {
        @media (min-width: 768px) {
            width: 48%;
        }
    }
</style>