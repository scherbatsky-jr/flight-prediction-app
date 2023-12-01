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
            <div v-else>
                <h6 class="mb-3" v-if="results.length">We have found following flights for the information you have provide</h6>
                <div v-for="result in results" class="result">
                    <div>
                        <h6>Flight Infromation</h6>
                        <p>Carrier Code: {{ result.carrier.iata ? result.carrier.iata : result.carrier.icao }}</p>
                        <p>Flight Number: {{ result.flight_number }}</p>
                    </div>
                    <div>
                        <h6>Origin</h6>
                        <p>{{ getAirportName(result.originCode) }}</p>
                        <p>Time: {{ formatDateTime(result.departure_time) }}</p>
                    </div>
                    <div>
                        <h6>Destination</h6>
                        <p>{{ getAirportName(result.destinationCode) }}</p>
                        <p>Time: {{ formatDateTime(result.arrival_time) }}</p>
                    </div>
                    <div>
                        <h6>Weather Forecast</h6>
                        <p>Temperature: {{ result.temperature_2m.toFixed(2) }} C</p>
                        <p>Humidity: {{ result.relative_humidity_2m }}%</p>
                        <p>Precipitation: {{ result.precipitation }}%</p>
                    </div>
                    <div>
                        <h6>Flight Forecast</h6>
                        <p>Expected Delay: 10min</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import airports from "@/constants/airports"
// import { getPredictions } from "@/api/app" 
import client from "@/apolloClient"
export default {
    name: 'Home',

    data () {
        return {
            origin: null,
            destination: null,
            date: null,
            loading: false,
            results: [
            
            ]
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

            const dateObject = new Date(this.date);

            const year = dateObject.getFullYear();
            const month = String(dateObject.getMonth() + 1).padStart(2, '0');
            const day = String(dateObject.getDate()).padStart(2, '0');

            const formattedDate = `${year}-${month}-${day}`;

            const data = {
                originID: this.origin.id,
                originCode: this.origin.code,
                destinationCode: this.destination.code,
                destinationID: this.destination.id,
                date: formattedDate,
                lat: this.origin.lat,
                long: this.origin.long
            }

            client.post('/predictions', data)
                .then(response => {
                    this.results = response.data
                })
                .catch(err => {
                    throw err
                })
                .finally(() => {
                    this.loading = false
                })
        },

        formatDateTime(inputDateTime) {
            const dateObj = new Date(inputDateTime);

            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            };

            const formattedDateTime = dateObj.toLocaleString('en-US', options);

            return formattedDateTime;
        },

        getAirportName(code) {
            const airport = this.airportOptions.find(airport => airport.code == code)

            if (airport) {
                return `${airport.airport} (${airport.code})`
            }

            return 'Error'
        }
    },

}
</script>

<style lang="scss">
.home {
    display: flex;
    width: 100%;
    margin: 4rem 1rem;
    flex-direction: column;

    .search-form {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 0.5rem;
        grid-gap: 1rem;
        margin: 0 auto 3rem;
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

    .result {
        display: grid;
        padding: 1rem;
        border: none;
        box-shadow: 0px 0px 10px grey;
        border-radius: 0.5rem;
        grid-template-columns: 0.75fr 1fr 1fr 0.75fr 0.5fr;
        grid-gap: 1rem;
        margin-bottom: 1rem
    }
}
</style>