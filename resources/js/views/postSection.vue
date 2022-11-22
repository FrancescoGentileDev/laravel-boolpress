<template>
    <div v-if="post" class="container">
    <h1 class="text-center mt-1">
    {{ post.title }}
    </h1>
    <div class="image">
    <img class="text-center w-100" :src="post.image" alt="">
    </div>

    <p class=" mt-3">
    {{ post.content }}
    </p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            post: undefined,
        };
    },
    created() {
        axios.get("/api/posts/" + this.$route.params.slug).then(({data}) => {
           this.post = data
        });
    },
};
</script>

<style lang="scss" scoped>
.image {
    max-width: 700px;
    margin: 0 auto;
}
</style>
