<template>
    <div class="container-md">
        <h1 class="app-title">Paginas Relacionadas</h1>
        <dir class="m-content">
            <div class="m-pages">
                <div class="row">
                    <template v-for="(page) in pagesData">
                        <a :href="page.url" class="link col col-12 col-md-6 col-lg-3" target="_blank" :key=page.title>
                            <figure class="m-pages__figure">
                                <img class="m-pages__img" :src="require(`../assets/images/${page.img}.jpg`)" alt="f"/>
                            </figure>
                            <span>{{page.title}}</span>
                        </a>
                    </template>
                </div>
            </div>
        </dir>
    </div>
</template>

<script>
// import axios from "axios";
import json from '../data/data.json'

export default {
  name: 'PaginasRelacionadas',
  components: {},
  data() {
    return {
        // instrumentData: []
        pagesData: json.pagesData,
    }
  },
  methods: {},
  mounted() {
    // const api = 'https://raw.githubusercontent.com/conradoTCK/phasmaphobia-guia/master/src/data/data.json'
    // axios.get(api).then((response) => {
    //   console.log(response.data)
    // })
  }
}
</script>

<style lang="scss" scoped>
    .app-title {
        height: 90px;
    }

    .m-content {
        margin-top: 95px;
    }

    .m-pages {
       width: 100%;
       text-align: center;

       .link {
           margin-bottom: 32px;;
       }

       &__figure {
           border: 1px dashed #808080;
           border-radius: 5px;
           overflow: hidden;
       }

       &__img {
           width: 100%;
           height: auto;
           max-width: 400px;
            border-radius: 5px; 
       }
    }
</style>