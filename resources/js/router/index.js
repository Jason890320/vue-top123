import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("@/views/index.vue"),
    },
    {
        path: "/bcms",
        name: "Login",
        component: () => import("@/views/bcms/Login.vue"),
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("@/views/bcms/Home.vue"),
        children: [
            {
                path: "/",
                component: () => import("@/views/bcms/Home/index.vue"),
            },
            {
                path: "admin",
                component: () => import("@/views/bcms/Home/Admin.vue"),
                children: [
                    {
                        path: "",
                        component: () => import("@/views/bcms/Home/Admin/index.vue"),
                    },
                    {
                        path: "admin_create",
                        component: () => import("@/views/bcms/Home/Admin/Admin_create.vue"),
                    },
                    {
                        path: "admin_update",
                        component: () => import("@/views/bcms/Home/Admin/Admin_update.vue"),
                    },
                ]
            },
            {
                path: "blog",
                component: () => import("@/views/bcms/Home/Blog.vue"),
                children: [
                    {
                        path: "",
                        component: () => import("@/views/bcms/Home/Blog/index.vue"),
                    },
                    {
                        path: "blog_create",
                        component: () => import("@/views/bcms/Home/Blog/Blog_create.vue"),
                    },
                    {
                        path: "blog_update",
                        component: () => import("@/views/bcms/Home/Blog/Blog_update.vue"),
                    },
                ]
            },
            {
                path: "marketing",
                component: () => import("@/views/bcms/Home/Marketing.vue"),
                children: [
                    {
                        path: "",
                        component: () => import("@/views/bcms/Home/Marketing/index.vue"),
                    },
                    {
                        path: "marquee",
                        component: () => import("@/views/bcms/Home/Marketing/Marquee.vue"),
                    },
                    {
                        path: "banner",
                        component: () => import("@/views/bcms/Home/Marketing/Banner.vue"),
                    },
                ]
            },
            {
                path: "merchant",
                component: () => import("@/views/bcms/Home/Merchant.vue"),
                children: [
                    {
                        path: "",
                        component: () => import("@/views/bcms/Home/Merchant/index.vue"),
                    },
                    {
                        path: "merchant_create",
                        component: () => import("@/views/bcms/Home/Merchant/Merchant_create.vue"),
                    },
                    {
                        path: "merchant_update",
                        component: () => import("@/views/bcms/Home/Merchant/Merchant_update.vue"),
                    },
                ]
            },
            {
                path: "movie",
                component: () => import("@/views/bcms/Home/Movie.vue"),
                children: [
                    {
                        path: "",
                        component: () => import("@/views/bcms/Home/Movie/index.vue"),
                    },
                    {
                        path: "movie_create",
                        component: () => import("@/views/bcms/Home/Movie/Movie_create.vue"),
                    },
                    {
                        path: "movie_update",
                        component: () => import("@/views/bcms/Home/Movie/Movie_update.vue"),
                    },
                    {
                        path: "movie_class",
                        component: () => import("@/views/bcms/Home/Movie/Movie_class.vue"),
                    },
                ]
            },
            {
                path: "news",
                component: () => import("@/views/bcms/Home/News.vue"),
                children: [
                    {
                        path: "",
                        component: () => import("@/views/bcms/Home/News/index.vue"),
                    },
                    {
                        path: "news_create",
                        component: () => import("@/views/bcms/Home/News/News_create.vue"),
                    },
                    {
                        path: "news_update",
                        component: () => import("@/views/bcms/Home/News/News_update.vue"),
                    },
                ]
            },
            {
                path: "order",
                component: () => import("@/views/bcms/Home/Order.vue"),
                children: [
                    {
                        path: "",
                        component: () => import("@/views/bcms/Home/Order/index.vue"),
                    },
                    {
                        path: "order_cancel",
                        component: () => import("@/views/bcms/Home/Order/Order_cancel.vue"),
                    },
                    {
                        path: "order_deliver",
                        component: () => import("@/views/bcms/Home/Order/Order_deliver.vue"),
                    },
                ]
            },
            {
                path: "product",
                component: () => import("@/views/bcms/Home/Product.vue"),
                children: [
                    {
                        path: "",
                        component: () => import("@/views/bcms/Home/Product/index.vue"),
                    },
                    {
                        path: "product_create",
                        component: () => import("@/views/bcms/Home/Product/Product_create.vue"),
                    },
                    {
                        path: "product_update",
                        component: () => import("@/views/bcms/Home/Product/Product_update.vue"),
                    },
                    {
                        path: "product_class",
                        component: () => import("@/views/bcms/Home/Product/Product_class.vue"),
                    },
                ]
            },
            {
                path: "user",
                component: () => import("@/views/bcms/Home/User.vue"),
                children: [
                    {
                        path: "",
                        component: () => import("@/views/bcms/Home/User/index.vue"),
                    },
                    {
                        path: "user_update",
                        component: () => import("@/views/bcms/Home/User/User_update.vue"),
                    },
                ]
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;