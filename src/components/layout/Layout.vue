<template>
    <div class="nav-menu bg-primary p-3">
        Flight Prediction
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'Layout'
}
</script>

<style lang="scss" scoped>
.layout {
    display: flex;
    height: 100vh;
    flex-direction: column;
    top: 0;
}

.nav-menu {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 2rem;
    }

</style>