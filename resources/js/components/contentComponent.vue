<template>
    <div>
        <category-badges-component
            class="categories"
            :categories="categories"
            @clickCategory="clickCategory"
        />
        <div class="container" v-if="page">
            <h3 v-if="title">{{ title }}</h3>
            <div class="post-container">
                <post-preview-component
                    v-for="(post, index) in posts"
                    :key="index"
                    :details="post"
                    @clickedTitle="openArticle"
                />
            </div>
            <nav
                aria-label="Page navigation"
                class="mt-3 d-flex justify-content-center"
            >
                <ul class="pagination pagination-lg">
                    <li
                        class="page-item"
                        :class="{ disabled: page.current_page === 1 }"
                        @click="changePage('prev')"
                        ref="prev"
                    >
                        <button class="page-link">Prev</button>
                    </li>
                    <li class="page-item">
                        <p class="page-link">
                            {{ page.current_page }}/{{ page.last_page }}
                        </p>
                    </li>
                    <li
                        class="page-item"
                        :class="{
                            disabled: page.current_page === page.last_page,
                        }"
                        ref="next"
                        @click="changePage('next')"
                    >
                        <button class="page-link">Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import categoryBadgesComponent from "./categoryBadgesComponent.vue";
import PostPreviewComponent from "./postPreviewComponent.vue";
export default {
    components: { categoryBadgesComponent, PostPreviewComponent },
    data() {
        return {
            title: "",
            posts: undefined,
            page: undefined,
            categories: undefined,
            apiReseach: "/api",
        };
    },
    watch: {
        $route(to, from) {
            if (to.name === "home" && from.name === "category") this.goHome();
        },
    },
    created() {
        let currentPath = this.$route.name;

        if (currentPath === "home") {
            this.apiReseach += "/posts";
        } else if (currentPath === "category") {
            this.apiReseach += "/category/" + this.$route.params.slug;
        }

        let string = "";
        if (this.$route.query.page) string = "?page=" + this.$route.query.page;
        console.log(this.apiReseach + string);
        const search = () => {
            axios.get(this.apiReseach + string).then(({ data }) => {
                if (this.$route.query.page > data.last_page) {
                    this.$router.push({ path: "/" });
                    string = "";
                    search();
                }
                console.log(data);
                if (currentPath !== "category") {
                    this.posts = data.data;
                    delete data.data;
                    this.page = data;
                } else {
                    this.title = data.name;
                    this.posts = data.posts.data;
                    delete data.posts.data;
                    this.page = data.posts;
                }
            });
        };
        search();
        axios.get("/api/category").then(({ data }) => {
            this.categories = data;
        });
    },
    methods: {
        goHome() {
            axios.get("/api/posts").then(({ data }) => {
                this.posts = data.data;
                this.title = "";
                delete data.data;
                this.page = data;
            });
        },
        changePage(direction) {
            let currentPath = this.$route.name;
            let string = direction + "_page_url";
            axios.get(this.page[string]).then(({ data }) => {
                console.log(data);
                if (currentPath !== "category") {
                    this.posts = data.data;
                    delete data.data;
                    this.page = data;
                } else {
                    this.title = data.name;
                    this.posts = data.posts.data;
                    delete data.posts.data;
                    this.page = data.posts;
                }
                console.log("current", this.page.current_page);
                if (
                    this.page.current_page > 1 &&
                    this.page.current_page <= this.page.last_page
                ) {
                    console.log("cuia");
                    this.$router.push("?page=" + this.page.current_page);
                } else {
                    console.log("porcosososo");
                    this.$router.push("");
                }
            });
        },
        openArticle(data) {
            this.$router.push({ path: `/post/${data}` });
        },

        clickCategory(category) {
            console.log(category);
            axios.get("/api/category/" + category).then(({ data }) => {
                console.log(data);
                this.title = data.name;
                this.posts = data.posts.data;
                delete data.posts.data;
                this.page = data.posts;
                this.$router.push("/category/" + category);
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
    padding: 0;
    margin: 2rem auto;
    max-width: 90%;
    overflow-x: scroll;
}
.post-container {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}
</style>
