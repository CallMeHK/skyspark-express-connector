<template>
  <div class="home container">
    <div class="row">
    <div class="col s12 m10">
      <div class="card">
        <div class="card-content">
          <span class="card-title title-text">Aquire Auth Token</span>
          <p>Fill out the form below to aquire the auth token for the skyspark server 
            address provided.  Make sure the user has the correct privileges.  The SkySpark  
            server address must include the api/{yourProjectName}, for example, 'http://localhost:8080/api/demo'.</p>
            <br>
        <div class="input-field">
          <input  :value="user" @input="userOnChange" id="username" type="text" class="validate">
          <label class="active" for="username">Username</label>
        </div>
        <div class="input-field">
          <input  :value="pw" @input="pwOnChange" id="password" type="password" class="validate">
          <label class="active" for="password">Password</label>
        </div>
        <div class="input-field">
          <input  :value="host" @input="hostOnChange" id="host" type="text" class="validate">
          <label class="active" for="host">SkySpark Server Address</label>
        </div>
        <p>{{ auth }}</p>
        </div>
        <div class="card-action button-spread">
          <button @click='getAuth' class="waves-effect waves-light btn">Submit</button>
          <button @click='goToCall' v-bind:class="[auth==='' ? 'btn-flat disabled':'waves-effect waves-light btn']">Write Calls</button>
        </div>
      </div>
    </div>
  </div> 
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import router from "../router";
import MakeCalls from "@/MakeCalls";
export default {
  name: "home",
  computed: {
    ...mapGetters([
      'user',
      'pw',
      'host',
      'auth'
    ])
  },
  methods: {
    ...mapActions([
      'userInput',
      'pwInput',
      'hostInput',
      'authInput'
    ]),
    goToCall() {
      if(this.auth!=''){
      router.push({ name: "call" });
      }
    },
    userOnChange(e) {
      this.userInput(e.target.value);
    },
    pwOnChange(e) {
      this.pwInput(e.target.value);
    },
    hostOnChange(e) {
      this.hostInput(e.target.value);
    },
    authVal(val) {
      this.authInput(val);
    },
    async getAuth(){
      this.authVal( await MakeCalls.getAuth(this.host,this.user,this.pw));
    }
  }
};
</script>

<style scoped>
.title-text {
  font-weight: 600;
}
.button-spread {
  display:flex;
  justify-content: space-between;
}
</style>

