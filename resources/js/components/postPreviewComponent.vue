<template>
    <article>
        <div class="card" style="width: 20rem">
            <img class="card-img-top" :src="details.image" alt="Card image cap" />
            <div class="card-body">
                <p class="card-subtitle text-muted">{{ details.updated_at }}</p>
                <h5 class="card-title">{{ details.title }}</h5>
                <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
            </div>
            <div class="card-footer text-muted">
            cat 1, cat2
            </div>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        details: Object
    }
};
</script>

<style lang="scss" scoped>
</style>
