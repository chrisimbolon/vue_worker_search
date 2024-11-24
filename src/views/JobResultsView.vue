<template>
  <h1 class="text-6xl font-bold">Job Results Page</h1>
  <button @click="goToHome">Go to Home Page</button>
</template>

<script>
export default {
  name: 'JobResulstView',
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' })
    },
  },
}
</script>
