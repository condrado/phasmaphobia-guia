<template>
    <div class="container-md">
        <div class="m-add-name">
            <h1 class="app-title">Nombre fantasma</h1>
            <dir class="m-add-name__content">
                <label class="m-add-name__label">
                    <p>Inserta el nombre del fantasma</p>
                    <input class="m-add-name__input" type="text" v-model="newName">
                    <button class="m-button" v-on:click="addName"><i class='add'></i></button>
                </label>
                <h2>Lista de fantasmas</h2>
                <ul class="m-add-name__list">
                    <template v-for="name in namesPhan">
                        <li class="m-add-name__item" :key=name>
                            <span>{{name}}</span>
                            <button class="m-button" v-on:click="removeName(name)"><i class='remove'></i></button>
                        </li>
                    </template>
                </ul>
            </dir>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NombreFantasma',
    components: {},
    data() {
        return {
            namesPhan: [],
            namesPhanStr: 'conrado|ramos',
            newName: ''
        }
    },
    methods: {
        addName () {
            var localStorageAct = localStorage.namesPhanStr
            var localStorageActArr = []

            if(localStorageAct) {
                localStorageAct = this.newName + '|' + localStorageAct;
                localStorageActArr = localStorageAct.split('|')
                localStorageActArr.pop()
            } else {
                localStorageAct = this.newName + '|'
                localStorageActArr.push(this.newName)
            }

            this.namesPhan = localStorageActArr

            localStorage.namesPhanStr = localStorageAct
            
            if (localStorageActArr.length > 0) {
                localStorage.namePhan = localStorageActArr[0]
            } else {
                localStorage.namePhan = ''
            }
        },
        removeName (name) {
            var localStorageAct = localStorage.namesPhanStr
            var localStorageActArr = []

            if(localStorageAct) {
                var namesPhanNoName = localStorageAct.split(name + '|')
                localStorageAct = namesPhanNoName.join('')
                localStorageActArr = localStorageAct.split('|')
                localStorageActArr.pop()
                this.namesPhan = localStorageActArr
            }

            localStorage.namesPhanStr = localStorageAct

            if (localStorageActArr.length > 0) {
                localStorage.namePhan = localStorageActArr[0]
            } else {
                localStorage.namePhan = ''
            }
        }
    },
    mounted() {
        var localStorageAct = localStorage.namesPhanStr

        if(localStorageAct) {
            var localStorageActArr = localStorageAct.split('|')
            localStorageActArr.pop()
            this.namesPhan = localStorageActArr

            if (localStorageActArr.length > 0) {
                localStorage.namePhan = localStorageActArr[0]
            } else {
                localStorage.namePhan = ''
            }
        }
    }
}
</script>

<style lang="scss">
    .m-add-name {
        margin-top: 80px;
        padding: 0;
        position: relative;

        @media (min-width: 768px) {
            margin-top: 0;
        }

        &__content{
            padding: 0;
        }

        &__label {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 32px;
            justify-content: space-between;
            
            p {
                width: 100%;
                margin: 0;
            }

            .m-button {
                height: 40px;
                width: 40px;
                border: 0;
                background-color: transparent;
                color: #ffffff;
                font-size: 24px;
                display: inline-block;
            }

            i {
                &::after {
                    display: none;
                }
            }
        }

        &__input {
            height: 40px;
            width: calc(100% - 50px);
            display: inline-block;
        }

        &__list {
            padding-left: 0;
        }

        &__item {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .m-button {
                height: 40px;
                width: 40px;
                border: 0;
                background-color: transparent;
                color: #ffffff;
                font-size: 24px;
                display: inline-block;
            }

            i {
                &::after {
                    display: none;
                }
            }
        }
    }
</style>