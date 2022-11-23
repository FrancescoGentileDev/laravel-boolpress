<template>
    <header class="pt-3">
        <nav class="d-flex justify-content-around">
            <h1>BOOLPRESS</h1>
            <ul class="link d-flex">
                <li><router-link :to="{name: 'home'}">Home</router-link></li>
                <li><router-link :to="{name: 'about'}">About</router-link></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
        <div class='phrase' v-if="hero">
        <h2>SIMPLE BLOG WEBSITE</h2>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            hero: true
            }
    }
};
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: inherit;
}

header {
    height: 500px;
    background-image: url('https://wallpaperstock.net/turquoise-and-orange-bg-wallpapers_53989_2560x1440.jpg');
    color: white;

    nav {
        h1 {
            font-weight: bolder;
        }
        ul {
            list-style: none;
            gap: 2rem;
            align-items: center;
        }
    }
    .phrase {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    h2 {
        text-align: center;
        padding: 0;
        margin: 0;
    }
    }
}
</style>
