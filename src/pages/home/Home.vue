<template>
    <div class="home">
        <Form class="search-form" @submit="onSearch()" v-slot="{ errors }">
            <div>
                <Field
                name="origin"
                id="origin"
                rules="required"
                v-model="origin"
            >
                <multiselect
                class="airports"
                :options="airportOptions"
                v-model="origin"
                placeholder="Select origin airport"
                label="airport"
                track-by="airport"
            ></multiselect>
            </Field>
            <div v-if="errors.origin" class="invalid-feedback">{{ errors.origin }}</div>
            </div>
            <div>
                <Field
                name="destination"
                id="destination"
                rules="required"
                v-model="destination"
            >
                <multiselect
                    class="airports"
                    :options="destinationOptions"
                    v-model="destination"
                    placeholder="Select destination airport"
                    label="airport"
                    track-by="airport"
                ></multiselect>
            </Field>
            <div v-if="errors.destination" class="invalid-feedback">{{ errors.destination }}</div>
            </div>
            <div>
                <Field
                name="date"
                id="date"
                rules="required"
                v-model="date"
            >
                <VueDatePicker class="datepicker" v-model="date" :enable-time-picker="false"/>
            </Field>
            <div v-if="errors.date" class="invalid-feedback">{{ errors.date }}</div>
            </div>
            <button type="submit">Submit</button>       
        </Form>

        <div class="list">
            <div class="spinner-border" v-if="loading"></div>
        </div>
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
            destination: null,
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
    flex-direction: column;

    .search-form {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 0.5rem;
        grid-gap: 1rem;
        margin: 2rem auto;
    }

    .airports {
        width: 20rem;
    }

    .invalid-feedback {
        display: block;
    }

    .list {
        display: flex;
        justify-content: center;
    }
}
</style>