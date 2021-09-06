<template>
    <div class="container-md">
        <h1 class="app-title">Reuniendo pruebas</h1>
        <dir class="m-content">
            <h2>Instrumentos</h2>
            <h3>Incienso</h3>
            <div class="m-content__p">
                <figure>
                    <img class="m-content__img" :src="require(`../assets/images/h-inci.jpg`)" alt="f"/>
                </figure>
                <span>Este objeto siempre ha sido la manera más eficiente de debilitar a los fantasmas más comunes. Su método de empleo es sencillo: sujétalo y quémalo cerca del fantasma.</span>
            </div>

            <h3>Escritura fantasma</h3>
            <div class="m-content__p">
                <figure>
                    <img class="m-content__img" :src="require(`../assets/images/h-escr.jpg`)" alt="f">
                </figure>
                <span>Los investigadores de lo paranormal empezaron a usar papel y lápiz como método comunicativo alternativo a la Spirit Box. Más tarde se descubrió que sólo ciertos tipos de fantasma están dispuestos a escribir.</span>
            </div>

            <h3>Ouija</h3>
            <div class="m-content__p">
                <figure>
                    <img class="m-content__img" :src="require(`../assets/images/h-ouij.jpg`)" alt="f">
                </figure>
                <span>La manera más común de invocar a un fantasma es con uno de estos tableros, por lo que quizá te encuentres con uno de estos durante tus investigaciones. Ten cuidado si le das uso, pues se sabe que tienden a bajar tu cordura. Para utilizar la güija, actívala y entonces realiza preguntas usando tu voz.</span>
            </div>
        </dir>
    </div>
</template>

<script>
export default {
  name: 'ReuniendoPruebas',
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
    .m-content {
        margin-top: 80px;
        padding: 0;

        &__p {
            display: flex;
             margin: 0 0 32px 0;
        }

        &__img {
            width: 125px;
            height: auto;
            margin: 0 16px 0 0;
        }
    }
</style>