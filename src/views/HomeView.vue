<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HeroSection/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from '../components/HeroSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection
}
}
</script>
