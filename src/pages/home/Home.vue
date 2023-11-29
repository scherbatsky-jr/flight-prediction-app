<template>
    <div class="home">
        <form class="search-form" @submit="onSearch">
            <multiselect
                class="airports"
                :options="airportOptions"
                v-model="origin"
                placeholder="Select origin airport"
                label="airport"
                track-by="airport"
            ></multiselect>
            <multiselect
                class="airports"
                :options="destinationOptions"
                v-model="desitinatiom"
                placeholder="Select destination airport"
                label="airport"
                track-by="airport"
            ></multiselect>
            <VueDatePicker class="datepicker" v-model="date"/>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import airports from "@/constants/airports"
import { getPredictions } from "@/api/app" 
export default {
    name: 'Home',

    data () {
        return {
            origin: null,
            desitinatiom: null,
            date: null,
            loading: false
        }
    },

    computed: {
        airportOptions() {
            function compareAirports(a, b) {
                const airportA = a.airport.toUpperCase();
                const airportB = b.airport.toUpperCase();

                let comparison = 0;
                if (airportA > airportB) {
                comparison = 1;
                } else if (airportA < airportB) {
                comparison = -1;
                }
                return comparison;
            }

            return [...airports].sort(compareAirports);
        },

        destinationOptions() {
            if (this.origin) {
                return this.airportOptions.filter(airport => {
                    return airport.code != this.origin.code
                })
            }

            return this.airportOptions;
        }
    },

    methods: {
        onSearch() {
            this.loading = true

            const data = {
                origin: this.origin.code,
                destination: this.destination.code,
                date: this.date
            }

            getPredictions(data)
                .then(predictions => {
                    this.results = predictions
                })
                .finally(() => {
                    this.loading = false
                })
        }
    }
}
</script>

<style lang="scss">
.home {
    display: flex;
    width: 100%;
    margin: 4rem;

    .search-form {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 0.5rem;
        grid-gap: 1rem;
        margin: auto;
    }

    .airports {
        width: 20rem;
    }
}
</style>