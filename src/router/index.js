import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home/Home";
import Course from "@/components/Course/Course";

Vue.use(Router)

export default new Router({
  mode: 'history', // 不显示#号
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
  ]
})
