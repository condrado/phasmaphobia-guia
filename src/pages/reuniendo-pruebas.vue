<template>
    <div class="container-md">
        <h1 class="app-title">Reuniendo pruebas</h1>
        <dir class="m-content">
            <template v-for="(evidence) in evidenceData">
                <article class="m-article" :key=evidence.title>
                    <h2>{{evidence.title}}</h2>
                    <div class="m-content__p">
                        <figure v-bind:class="{patch1: evidence.patch == 1, patch2: evidence.patch == 2, patch3: evidence.patch == 3}">
                            <img class="m-content__img" :src="require(`../assets/images/${evidence.img}.jpg`)" alt="f"/>
                        </figure>
                        <span>{{evidence.desc}}</span>
                    </div>
                </article>
            </template>
        </dir>
    </div>
</template>

<script>
import json from 'https://raw.githubusercontent.com/conradoTCK/phasmaphobia-guia/master/src/data/data.json'

export default {
  name: 'ReuniendoPruebas',
  components: {},
  data() {
    return {
        evidenceData: json.evidenceData,
    }
  },
  methods: {}
}
</script>

<style lang="scss">
    .m-article {
        @media (min-width: 768px) {
            width: 48%;
        }

        .patch1,
        .patch2,
        .patch3 {
            position: relative;
            
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

        .patch1 {
            &:before {
                background-image: url('../assets/images/patch.png');
            }
        }

        .patch2 {
            &:before {
                background-image: url('../assets/images/patch2.png');
            }
        }

        .patch3 {
            &:before {
                background-image: url('../assets/images/patch3.png');
            }
        }
    }
</style>