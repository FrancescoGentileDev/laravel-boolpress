<template>
  <div>
  <ul class="d-flex">
  <li @click="clickCategory(category.slug)" v-for="(category, index) in categories" :key="index">{{ category.name }}</li>
  </ul>
  </div>
</template>

<script>
export default {
    props: {
        categories: Array,
    },
    methods: {
        clickCategory(data) {
            this.$emit('clickCategory', data)
        }
    },
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
        user-select: none;
        cursor: pointer;
    }
}
</style>
