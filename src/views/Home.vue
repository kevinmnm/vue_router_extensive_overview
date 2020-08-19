<template>
   <div>
      <div class="home">Homepage</div>
      <router-link :to="{name: 'Homesub1'}">Sub1</router-link>
      <router-link :to="{name: 'Homesub2'}">Sub2</router-link>
      
      <router-view />
   </div>
</template>

<script>
export default {
   name: "Home"
};
</script>

<style scoped>
a {margin: 5px;}
a.router-link-exact-active{
   font-weight: bold;
   color: black;
}
</style>