<template>
  <div class="home">
    <HeroSection/>
    <ContentSection/>
  </div>
</template>

<script>
// @ is an alias to /src


import HeroSection from '@/components/HeroSection.vue'
import ContentSection from '@/components/ContentSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ContentSection
}
}
</script>
