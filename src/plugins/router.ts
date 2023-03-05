import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

type CustomRouteRecord = RouteRecordRaw & { icon: string }

// 1. Define some routes
export const routes: CustomRouteRecord[] = [
    { path: '/', name: "Tasks", component: () => import('@/modules/task/TaskPage.vue'), icon: 'mdi-format-list-checks' },
    { path: '/table', name: "Table", component: () => import('@/modules/table/TablePage.vue'), icon: 'mdi-table-large' },
    { path: '/about', name: "About", component: () => import('@/modules/about/AboutPage.vue'), icon: "mdi-information" }, // Add more routes here
];

export const routerPlugin = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

