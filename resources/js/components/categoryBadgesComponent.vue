<template>
  <div>
  <ul class="d-flex">
  <li v-for="(category, index) in categories" :key="index">{{ category.name }}</li>
  </ul>
  </div>
</template>

<script>
export default {
    props: {
        categories: Array,
    }
}
</script>

<style lang='scss' scoped>
ul {
    list-style: none;
    justify-content: space-between;
    gap: 1rem;
    li {
        font-size: 1.3rem;
        border: 2px solid #666;
        flex-wrap: wrap;
        padding: 0 2rem;
        border-radius: 30px;
    }
}
</style>
