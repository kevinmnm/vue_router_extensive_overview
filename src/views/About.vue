<template>
   <div>
      <div class="about">
         <h1>This is an about page</h1>
         <span>{{ $route.params }}</span>

         <about-comp1 v-if="$route.params.id ==='sub1'"></about-comp1>
         <about-comp2 v-else-if="$route.params.id ==='sub2'"></about-comp2>
         <about-comp3 v-else-if="$route.params.id ==='sub3'"></about-comp3>
      </div>
   </div>
</template>

<script>
import about_comp1 from "@/components/about-comp1.vue"
import about_comp2 from "@/components/about-comp2.vue"
import about_comp3 from "@/components/about-comp3.vue"

export default {
   components: {
      "about-comp1": about_comp1,
      "about-comp2": about_comp2,
      "about-comp3": about_comp3
   },
   data(){ //Static
      return {
         abc: this.$route.params 
      }
   },
   computed: { //Reactive
      sub(){
         return this.$route.params
      }
   },
   watch: { //By default, watch will not trigger on initial component mount.
      sub: { //This is watch property syntax.
         handler: function(){
            console.log(this.sub.id);
         },
         immediate: true //This will trigger watch on initial component mount.
      }
   }
}
</script>
