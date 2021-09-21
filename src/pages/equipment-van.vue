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
  name: 'EquipmentVan',
  components: {},
  props: {
      equipmentSt: String
  },
  data() {
    return {
        equipments: jsonData.equipment.van,
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
</style>