<template>
  <div class="home">
    <ContentSection/>
  </div>
</template>

<script>
// @ is an alias to /src

import ContentSection from '@/components/ContentSection.vue'

export default {
  name: 'HomeView',
  components: {
    ContentSection
}
}
</script>
