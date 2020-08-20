<template>
   <div id="app">
      <back-comp></back-comp>
      <router-link :to="{name: 'Login', params: {id: 'login'}}" v-show='!logged'>
         <span class='login'>Log-In</span>
      </router-link>
      <div id="nav">
         <router-link to="/">Home</router-link> |
         <router-link :to="{ name: 'About', params: { id: 'sub1' } }">About #1</router-link>
         <router-link :to="{ name: 'About', params: { id: 'sub2' } }">About #2</router-link>
         <router-link :to="{ name: 'About', params: { id: 'sub3' } }">About #3</router-link>
         <router-link :to="{ name: 'Test' }">Test</router-link> | 
         <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
      </div>
      <router-view @logged-status='received($event)'/>
   </div>
</template>
<script>
import back_comp from "@/components/back-comp.vue";

export default {
   name: "App",
   components: {
      "back-comp": back_comp,
   },
   data(){
      return {
         logged: false
      }
   },
   methods: {
      received(e){
         this.logged = e
         console.log('App.vue logged value is: ' + this.logged);
      }
   },
   watch: {
      logged(){
         setTimeout(()=>{
         this.$router.push({name: 'Dashboard'});
         },1000);
      }
   },
   beforeRouteEnter(to, from, next){
      if (to.name === 'Dashboard' && this.logged === true){
         next();
      } else {
         next({name: 'Login'});
      }
   }
};
</script>
<style>
.login{
   position: absolute;
   right: 50px;
   z-index: 1;
}

#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
}

#nav {
   padding: 30px;
}

#nav a {
   font-weight: bold;
   color: #2c3e50;
   padding: 10px;
}

#nav a.router-link-exact-active {
   color: #42b983;
}
</style>
