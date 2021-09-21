<template>
    <div class="container-md">
        <h1 class="app-title">{{ $t('toolsTitle') }}</h1>
        <dir class="m-content">
            <template v-for="(instrument) in toolData">
                <article class="m-article col-12 col-lg-6" :key=instrument.title>
                    <h2>{{ $t(instrument.title) }}</h2>
                    <div class="m-content__p">
                        <figure :class="'patch patch' + instrument.patch">
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
    methods: {
        generateIndex (index, maxIndex) {
            this.toolData.forEach(equipment => {
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
</style>