<template>
  <div class="about container">
    <p>This was coded in a saturday evening.  I'll add more details including a how to for the client later.  </p>
    <button @click='goHome' class="waves-effect waves-light btn">Return to login</button>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'about',
  methods: {
    goHome() {
      router.push({ name: 'home' })
    }
  }
}
</script>

