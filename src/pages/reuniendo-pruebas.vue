<template>
    <div class="container-md">
        <h1 class="app-title">{{ $t('evidenceTitle') }}</h1>
        <dir class="m-content">
            <template v-for="(evidence) in evidenceData">
                <article class="m-article col-12 col-lg-6" :key=evidence.title>
                    <h2>{{ $t(evidence.title) }}</h2>
                    <div class="m-content__p">
                         <figure :class="'patch patch' + evidence.patch">
                            <img class="m-content__img" :src="require(`../assets/images/${evidence.img}.jpg`)" alt="f"/>
                        </figure>
                        <span>{{ $t(evidence.desc) }}</span>
                    </div>
                </article>
            </template>
        </dir>
    </div>
</template>

<script>
// import axios from "axios";
import jsonData from '../data/data.json'

export default {
  name: 'ReuniendoPruebas',
  components: {},
  data() {
    return {
        evidenceData: jsonData.evidenceData,
        evidenceTitle: jsonData.evidenceTitle
    }
  },
    methods: {
        generateIndex (index, maxIndex) {
            this.evidenceData.forEach(equipment => {
                if (index === maxIndex) {
                    index = 1
                } else {
                    index++
                }

                equipment.patch = index
            });
        }
    },
    beforeMount() {
        this.generateIndex(0, 5)
    }
}
</script>

<style lang="scss">
</style>