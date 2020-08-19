<template>
   <div>
      <back-comp></back-comp>
      <keep-alive>
         <login-comp v-on='$listeners'></login-comp>
      </keep-alive>
   </div>
</template>

<script>
import login_comp from "@/components/login-comp.vue"
import back_comp from "@/components/back-comp.vue"

export default {
   name: 'Login_name',
   components: {
      "login-comp": login_comp,
      "back-comp": back_comp
   }
}
</script>

<style>

</style>