import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import App from '../App.vue'

Vue.use(VueRouter)

let auth = App.data().logged;
console.log(App.data().logged);

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
         {
            path: 'child1',
            name: 'Homesub1',
            component: () => import(/* webpackChunkName: "home_sub1" */ '@/components/home-comp1.vue')
         },
         {
            path: 'child2',
            name: 'Homesub2',
            component: () => import(/* webpackChunkName: "home_sub2" */ '@/components/home-comp2.vue')
         }
      ]
   },
   {
      path: '/about/:id',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
   },
   {
      path: '/test',
      name: 'Test',
      component: () => import(/* webpackChunkName: "test_main" */ '../views/Test.vue'),
      children: [
         {
            path: ':id',
            name: 'Testsub1',
            component: () => import(/* webpackChunkName: "test_sub1" */ '@/components/test-comp1.vue')
         },
         {
            path: ':id',
            name: 'Testsub2',
            component: () => import(/* webpackChunkName: "test_sub2" */ '@/components/test-comp2.vue')
         },
         {
            path: ':id',
            name: 'Testsub3',
            component: () => import(/* webpackChunkName: "test_sub3" */ '@/components/test-comp3.vue')
         }
      ],
      // ],
      // beforeEnter(to, from, next){ //This is registered under Test, not its children!
      //    //next({ name: "Missing" });
      //    next();
      //    console.group();
      //       console.log(to);
      //       console.log(from);
      //       console.log(next);
      //    console.groupEnd();
      // }
   },
   {
      path: '/login',
      name: 'Login',
      component: Login
   },
   {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
      beforeEnter: (to, from, next) =>{ (auth) ? next() : next({name: 'Login'}); }
   },
   {
      path: '/error',
      alias: '*', //If user visits any(*), direct to this(/error) path.
      name: 'Missing',
      component: () => import(/* webpackChunkName: "404" */ '../views/Missing.vue')
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

/***** Global Route Guard! *****/
// router.beforeEach(function(to, from, next){
//    if (to.path !== '/login'){
//       auth ? next() : next({name: 'Login'});
//    }
// });

export default router

