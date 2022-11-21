<template>
    <div class="container">
        <category-badges-component class="categories" />
        <div class="post-container">
            <post-preview-component
                v-for="(post, index) in posts"
                :key="index"
                :details="post"
            />
        </div>
        <nav
            aria-label="Page navigation"
            class="mt-3 d-flex justify-content-center"
        >
            <ul class="pagination pagination-lg">
                <li class="page-item" @click="changePage('prev')" ref="prev">
                    <button class="page-link">Prev</button>
                </li>
                <li class="page-item">
                    <p class="page-link">
                        {{ page.current_page }}/{{ page.last_page }}
                    </p>
                </li>
                <li class="page-item" ref="next" @click="changePage('next')">
                    <button class="page-link">Next</button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import categoryBadgesComponent from "./categoryBadgesComponent.vue";
import PostPreviewComponent from "./postPreviewComponent.vue";
export default {
    components: { categoryBadgesComponent, PostPreviewComponent },
    data() {
        return {
            posts: undefined,
            page: undefined,
        };
    },
    created() {
        axios.get("/api/posts").then(({ data }) => {
            console.log(data);
            this.posts = data.data;
            delete data.data;
            this.page = data;
        });
    },
    methods: {
        changePage(direction) {
            let string = direction + "_page_url";
            axios.get(this.page[string]).then(({ data }) => {
                console.log(data);
                this.posts = data.data;
                delete data.data;
                this.page = data;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
}
.categories {
    margin: 2rem 0;
}
.post-container {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}
</style>
