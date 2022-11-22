<template>
<div>
  <category-badges-component
            class="categories"
            :categories="categories"
        />
    <div class="container" v-if="page">

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
                    :class="{ disabled: page.current_page === page.last_page }"
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
            posts: undefined,
            page: undefined,
            categories: undefined,
        };
    },
    created() {

        let string = ""
        if(this.$route.query.page)
        string = "?page="+ this.$route.query.page
        const search =  () => {
            axios.get("/api/posts"+ string).then(({ data }) => {
                if(this.$route.query.page > data.last_page)
                {
                    this.$router.push({path: "/"})
                    string= ""
                    search()
                }
                console.log(data);
                this.posts = data.data;
                delete data.data;
                this.page = data;
            });
        }
        search();
        axios.get("/api/category").then(({ data }) => {
            this.categories = data;
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
                if(data.current_page > 1&&data.current_page <= data.last_page)
                this.$router.push('?page='+data.current_page);
                else {
                    this.$router.push('');
                }
            });
        },
        openArticle(data) {
          this.$router.push({path: `/post/${data}`})
        },

    },
};
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
}
.categories {
    padding:0;
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
