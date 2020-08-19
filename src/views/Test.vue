<template>
   <div>
      <h1>Hello, this is the Test page!</h1>
      <router-link :to="{ name: 'Testsub1', params: { id: 'test1' } }">Test #1</router-link> |
      <router-link :to="{ name: 'Testsub2', params: { id: 'test2' } }">Test #2</router-link> |
      <router-link :to="{ name: 'Testsub3', params: { id: 'test3' } }">Test #3</router-link>

      <router-view :key="$route.fullPath" />
      
   </div>
</template>

<script>
export default {};
</script>

<style scoped>

h1 {
   color: purple;
}
</style>