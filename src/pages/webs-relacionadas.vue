<template>
    <div class="container-md">
        <h1 class="app-title">Webs Relacionadas</h1>
        <dir class="m-content">
            <div class="m-pages">
                <div class="row">
                    <template v-for="(page) in pagesData">
                        <a :href="page.url" class="link col col-12 col-md-6 col-xl-4" target="_blank" :key=page.title>
                            <figure class="m-pages__figure" :class="'patch' + page.patch">
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
import jsonData from '../data/data.json'

export default {
  name: 'WebsRelacionadas',
  components: {},
  data() {
    return {
        pagesData: jsonData.pagesData,
    }
  },
  methods: {}
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
            border-radius: 5px;
            overflow: hidden;

            &.patch1,
            &.patch2,
            &.patch3,
            &.patch4,
            &.patch5 {
                position: relative;
                height: 277px;
                max-width: 345px;
                margin: 0 auto;
                
                &:before {
                    content: "";
                    height: 350px;
                    width: 100%;
                    position: relative;
                    display: block;
                    background-size: 99%;
                    background-repeat: no-repeat;
                    background-position: center top;

                    @media (min-width: 768px) {

                    }
                }

                img {
                    position: absolute;
                    width: 260px;

                    @media (min-width: 768px) {
                       width: 249px;
                    }

                    @media (min-width: 992px) {
                        width: 260px;
                    }
                }
            }

            &.patch1 {
                &:before {
                    background-image: url('../assets/images/patch-1b-h.png');
                }

                img {
                    left: 59px;
                    top: 44px;
                    width: 262px;

                    @media (min-width: 768px) {
                        left: 58px;
                        top: 42px;
                        width: 249px;
                    }

                    @media (min-width: 992px) {
                        // left: 83px;
                        top: 44px;
                        width: 260px;
                    }
                }
            }

            &.patch2 {
                &:before {
                    background-image: url('../assets/images/patch-2b-h.png');
                }

                img {
                    left: 50px;
                    top: 57px;

                    @media (min-width: 768px) {
                        left: 49px;
                        top: 53px;
                    }

                    @media (min-width: 992px) {
                        left: 50px;
                        top: 55px;
                    }
                }
            }

            &.patch3 {
                &:before {
                    background-image: url('../assets/images/patch-3b-h.png');
                }

                img {
                    left: 41px;
                    top: 55px;
                    width: 262px;

                    @media (min-width: 768px) {
                        left: 41px;
                        top: 53px;
                        width: 249px;
                    }

                    @media (min-width: 992px) {
                        // left: 69px;
                        top: 56px;
                        width: 260px;
                    }
                }
            }

            &.patch4 {
                &:before {
                    background-image: url('../assets/images/patch-4b-h.png');
                }

                img {
                    left: 40px;
                    top: 44px;

                    @media (min-width: 768px) {
                        left: 38px;
                        top: 40px;
                    }

                    @media (min-width: 992px) {
                        // left: 66px;
                        top: 42px;
                    }
                }
            }

            &.patch5 {
                &:before {
                    background-image: url('../assets/images/patch-5b-h.png');
                }

                img {
                    left: 48px;
                    top: 46px;

                    @media (min-width: 768px) {
                        left: 47px;
                        top: 42px;
                    }

                    @media (min-width: 992px) {
                        // left: 73px;
                        top: 44px;
                    }
                }
            }
        }

        &__img {
            width: 100%;
            height: auto;
            max-width: 400px;
        }
    }
</style>