import { createRouter, createWebHashHistory } from "vue-router";
const routes= [
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta:{
      title: "显示页"
    }
  },
  {
    path: "/",
    name: "new",
    component: () => import("../views/new.vue"),
    meta:{
      title: "新增页"
    }
  },
  {
    path: "/transition",
    name: "transition",
    component: () => import("../views/transition.vue"),
    meta:{
      title: "转换页"
    }
  },
  
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router