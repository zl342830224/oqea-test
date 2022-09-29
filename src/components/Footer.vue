<template>
  <footer class="sm:py-8" :class="oqeaMode ? 'bg-primary bg-opacity-90' : 'bg-secondary'">
    <div class="container mx-auto text-center text-sm sm:text-lg">
      <p :class="oqeaMode ? 'text-secondary' : 'text-third'" class="font-bold">Ⓒ 2022 Oqea. All rights reserved. </p>
      <a href="https://www.linkedin.com/in/lee-zhangl/" target="_blank" title="link to Le's linkedin" :class="oqeaMode ? 'text-secondary' : 'text-third'" class="font-bold">Made By Le</a>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Footer',
  props: {
    oqeaMode: Boolean
  },
})
</script>
