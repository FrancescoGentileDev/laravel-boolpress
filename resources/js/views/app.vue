<template>
    <div>
        <header-component />
        <router-view></router-view>
    </div>
</template>

<script>
import headerComponent from "../components/headerComponent.vue";
export default {
    components: { headerComponent },
};
</script>

<style lang="scss" scoped>
body {
    background-color: black;
}
</style>
