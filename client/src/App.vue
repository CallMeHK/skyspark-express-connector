<template>
  <div id="app">
    <nav class="blue accent-2">
    <div class="nav-wrapper">
      <div class="brand-logo">nodeConnector</div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Log In</router-link></li>
        <li v-if="auth !=''"><router-link to="/call">Write Calls</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      </ul>
    </div>
  </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'auth'
    ])
  }
}
</script>


<style>

</style>
