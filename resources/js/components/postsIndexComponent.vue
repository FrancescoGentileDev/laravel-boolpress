<template>
  <div>
  <post-preview-component class="post"/>
  </div>
</template>

<script>
import postPreviewComponent from './postPreviewComponent.vue'
export default {
  components: { postPreviewComponent },

}
</script>

<style lang="scss" scoped>
div {
    margin-bottom: 10rem;
}
</style>
