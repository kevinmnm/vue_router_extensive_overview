<template>
  <div class="back" @click="backFunc()">Back</div>
</template>

<script>
export default {
   methods: {
      backFunc(){
         this.$router.go(-1);
      }
   }
}
</script>

<style scoped>
.back{
   position: absolute;
   top: 5px;
   left: 5px;
   z-index: 1;
   width: 100px;
   margin: auto;
   text-align: center;
   cursor: pointer;
   border-radius: 5px;
}
.back:hover{box-shadow: 0 0 5px black;}
.back:active{box-shadow: 0 0 5px black inset;}
</style>