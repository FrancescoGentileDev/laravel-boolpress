<template>
  <div class='container'>
  <category-badges-component class='categories'/>
  <posts-index-component />
  </div>
</template>

<script>
import categoryBadgesComponent from './categoryBadgesComponent.vue'
import PostsIndexComponent from './postsIndexComponent.vue'
export default {
  components: { categoryBadgesComponent, PostsIndexComponent },

}
</script>

<style>
.container {
    height: 100vh;
}
.categories {
    margin: 2rem 0 ;
}
</style>
