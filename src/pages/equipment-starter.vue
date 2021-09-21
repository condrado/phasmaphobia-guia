<template>
    <div class="container-md">
        <h1 class="app-title">{{ $t(equipments.name) }}</h1>
        <dir class="m-content">
            <template v-for="(equipment) in equipments.list">
                <article class="m-article col-12 col-lg-6" :key=equipment.title v-if="equipment.isShow">
                    <h2>{{ $t(equipment.title) }}</h2>
                    <div class="m-content__p">
                        <figure :class="'patch patch' + equipment.patch">
                            <img class="m-content__img" :src="require(`../assets/images/${equipment.img}.jpg`)" :alt="$t(equipment.title)"/>
                        </figure>
                        <span>{{ $t(equipment.desc) }}</span>
                    </div>
                </article>
            </template>
        </dir>
    </div>
</template>

<script>
import jsonData from '../data/data.json'

export default {
  name: 'EquipmentStarter',
  components: {},
  props: {
      equipmentSt: String
  },
  data() {
    return {
        equipments: jsonData.equipment.starter,
    }
  },
  methods: {
      showItem () {
          this.equipments.list.forEach(equipment => {
              if (this.equipmentSt && this.equipmentSt !== 'all') {
                if (equipment.iconClass === this.equipmentSt) {
                    equipment.isShow = true
                } else {
                    equipment.isShow = false
                }
              } else {
                  if (equipment.iconClass !== 'all') {
                      equipment.isShow = true
                  } else {
                      equipment.isShow = false
                  }
              }
          });
      },
      generateIndex (index, maxIndex) {
        this.equipments.list.forEach(equipment => {
            if (index === maxIndex) {
                index = 1
            } else {
                index++
            }

            equipment.patch = index
        });
      }
  },
  watch: { 
      equipmentSt () {
        this.showItem ()
      },
  },
  mounted() {
      this.showItem ()
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
            flex-wrap: wrap;    
            justify-content: center;

            @media (min-width: 768px) {
                flex-wrap: nowrap;
                justify-content: space-between;
            }

            span {
                margin: 0;
                opacity: 0.7;   

                @media (min-width: 768px) {
                    margin: 0 0 0 16px;
                }
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

        .patch {
            position: relative;
            min-width: 210px;
            min-height: 265px;

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

            &:before {
                background-image: url('../assets/images/patch-1b.png');
            }

            img {
                left: 39px;
                top: 44px;
            }
        }

        .patch2 {

            &:before {
                background-image: url('../assets/images/patch-2b.png');
            }

            img {
                left: 31px;
                top: 37px;
            }
        }

        .patch3 {

            &:before {
                background-image: url('../assets/images/patch-3b.png');
            }

            img {
                left: 30px;
                top: 30px;
            }
        }

        .patch4 {
            
            &:before {
                background-image: url('../assets/images/patch-4b.png');
            }

            img {
                left: 40px;
                top: 28px;
            }
        }

        .patch5 {
            
            &:before {
                background-image: url('../assets/images/patch-5b.png');
            }

            img {
                left: 39px;
                top: 34px;
            }
        }
    }
</style>