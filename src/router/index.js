import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@views/Login/Index.vue";

import Layout from "@components/Layout/Layout.vue";
import Menu from "@views/Main/Menu.vue";

import AdminLayout from "@/layouts/AdminLayout.vue"

Vue.use(VueRouter);

export const constantRoutes = [
    // {
    //     path: '/404',
    //     component: () => import('@/views/Error/404.vue'),
    // },

    {
        path: "/Login",
        name: "Login",
        component: Login,
    },

    {
        path: "/",
        redirect: "/Main",
        name: "Index",
        meta: {
            title: "首页",
        },
    },

    {
        path: "/test",
        name: "test",
        component: AdminLayout,
        meta: {
            title: "首页",
        },
    },

    {
        path: "/Main",
        redirect: "/Main/list",
        component: Layout,
        meta: {
            title: "用户展示",
        },
        children: [
            {
                path: "list",
                name: "userList",
                components: {
                    default: () => import("@views/Main/Index.vue"),
                    navCtrl: () => import("@views/Main/Ctrl.vue"),
                    sideMenu: Menu,
                },
                meta: {
                    title: "用户列表",
                },
            },
        ],
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];

export const asyncRouters = [];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: constantRoutes,
});

export default router;
