<template>
    <div id="app">
        <h1>Игра "Города"</h1>
        <input v-model="newCity" type="text" @keyup.enter="addCity()">
        <div class="city_container">
            <div class="city" v-for="city in reversedList">
                {{ city }}
                <div @click="deleteCity(city)" class="x">x</div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                newCity: "",
                cities: ["Москва", "Анапа", "Анадырь", "Ростов-на-Дону"],
            }
        },
        methods: {
            addCity() {
                if (this.cities.length > 0) {
                    for (let city of this.cities) {
                        if (city.toLowerCase() === this.newCity.toLowerCase()) {
                            alert(`${this.newCity} уже был`)
                            return;
                        }
                    }
                    if (this.lastLetter !== this.newCity[0].toLowerCase()) {
                        alert(`Назовите город на букву ${this.lastLetter.toUpperCase()}`)
                        return;
                    }
                }
                this.cities.push(this.newCity);
                this.newCity = "";
            },
            deleteCity(city) {
                this.cities.splice(this.cities.indexOf(city), 1);
            }
        },
        computed: {
            reversedList() {
                return [...this.cities].reverse();
            },
            lastLetter() {
                if (this.cities.length > 0){
                    let index = this.reversedList[0].length-1
                    let lastCity = this.reversedList[0];
                    for (index; index>=0; index--) {
                        let last = lastCity[index].toLowerCase();
                        if (last === 'ъ' || last === 'ь') continue
                        return last
                    }
                }
            }
        }
    }

</script>

<style scoped>

    .city_container {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: max-content;
        width: min-content;
        grid-gap: 0.5rem;
    }

    .city {
        background-color: powderblue;
        padding: 0.3rem 0.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .city .x {
        margin-left: 3rem;
        cursor: pointer;
    }
</style>