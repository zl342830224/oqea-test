<template>
  <header class="py-5" :class="oqeaMode ? 'bg-primary bg-opacity-90' : 'bg-secondary'">
    <div class="container mx-auto flex justify-between">
      <div class='text-left'>
        <h1 class="font-bold text-3xl sm:text-5xl ml-2" :class="oqeaMode ? 'text-secondary' : 'text-primary'" @click="toHomePage">Oqea</h1>
        <p class="font-normal text-sm sm:text-xl ml-2 mt-2" :class="oqeaMode ? 'text-secondary' : 'text-third'">Your wellbeing and mental health app</p>
      </div>
      <div class="text-right">
        <button class="text-sm sm:text-lg rounded-md p-1 ml-2 mt-5 mb-1 mr-5 w-30 border font-medium text-secondary" type="button" :class="oqeaMode ? 'border-white-500': ' bg-primary'" @click="setOqeaMode()">{{oqeaMode ? 'OqeaMode' : 'LightMode'}}</button>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Header',
  props: {
    oqeaMode: Boolean,
    setOqeaMode: Function
  },
  setup() {
    const router = useRouter()
    const toHomePage = () => {
      router.push({
        path: "/"
      })
    }

    return {
      toHomePage
    }
  }
})
</script>
