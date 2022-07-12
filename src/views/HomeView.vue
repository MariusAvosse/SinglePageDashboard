<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HeroSection/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeroSection from '../components/HeroSection.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    HeroSection
}
}
</script>
