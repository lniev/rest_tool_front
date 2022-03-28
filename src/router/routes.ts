import { createRouter, createWebHistory } from "vue-router";
const routes = [
	{
		path: "/",
		component: import("@/pages/home/home.vue"),
	},
	{
		path: "/test",
		component: import("@/pages/test/test.vue"),
		meta: { transition: "slide-left" },
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
