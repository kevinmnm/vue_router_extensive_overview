<template>
<div>
   <div class='login' v-if='!auth'>
      <label name='login'>Log In</label>
      <input v-model='id_input' type='text' placeholder='Username' />
      <input v-model='pw_input' type='password' placeholder='password' @keyup.enter='submitter()'/>
      <button @click='submitter()'>Log In</button>
      <br>
      <span class='des'>Use Username <i>admin</i> and Password <i>1234</i></span>
   </div>
   <div class='login' v-else>
      <div>Logged In</div>
      <div>Directing to dashboard...</div>
   </div>
</div>
</template>

<script>

export default {
   data(){
      return {
         id_list: ['asdf','ss','dd','admin'],
         pw_list: ['asdf','ss','dd','1234'],
         id_input: '',
         pw_input: '',
         auth: false
      }
   },
   methods: {
      submitter(){
         if (this.id_input && this.pw_input){
            if (this.id_list.includes(this.id_input) && this.pw_list.includes(this.pw_input)){
               this.auth = true;
               this.$emit('logged-status', this.auth);
               console.log('Login-comp value: ' + this.auth);
            } else {
               alert('wrong info');
               this.id_input = '';
               this.pw_input = '';
            }
         } else {
            alert('Please provide ID and PW');
         }
      }
   }
};
</script>

<style scoped>
.login{
   position: relative;
   text-align: center;
}
.login * {
   position: relative;
   display: block;
   margin: auto;
}

.des{color: lightGrey;}
.des:hover{color:black;}

</style>