const app = new Vue({
    el: "#app",
    data: {
        newCity: "",
        cities: ["Москва", "Анапа", "Анадырь", "Ростов-на-Дону"],
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
    },
})