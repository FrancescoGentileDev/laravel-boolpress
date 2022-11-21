<template>
  <div>
  <header-component />
  <content-component />
  </div>
</template>

<script>
import ContentComponent from '../components/contentComponent.vue'
import headerComponent from '../components/headerComponent.vue'
export default {
  components: { headerComponent, ContentComponent },
}
</script>

<style lang="scss" scoped>
    body {
        background-color: black;
    }
</style>
