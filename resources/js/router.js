import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/post",
            name: "home",
            component: () => import("./views/homeSection.vue"),
        },
        {
            path: "/post/:slug",
            name: "post",
            component: () => import("./views/postSection.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () => import("./views/AboutSection.vue"),
        },
        {
            path: "/*",
            name: "notfound",
            component: () => import("./views/NotFoundSection.vue"),
        },
    ],
});

export default router;
