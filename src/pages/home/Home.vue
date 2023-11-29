<template>
    <div class="home">
        <form class="search-form">
            <multiselect
                class="airports"
                :options="airports"
                v-model="value"
                placeholder="Select origin airport"
                label="name"
                track-by="name"
            ></multiselect>
            <multiselect
                class="airports"
                :options="airports"
                v-model="value"
                placeholder="Select origin airport"
                label="name"
                track-by="name"
            ></multiselect>
            <VueDatePicker class="datepicker"/>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Home',

    data () {
        return {
            value: null,
            airports: [
                {
                    code: 'ATL',
                    name: 'Atlanta'
                }
            ],

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