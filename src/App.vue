<template>
    <div id="app">
      <div class="min-h-screen flex flex-col">
        <keep-alive>
          <Header :oqeaMode="store.oqeaMode" :setOqeaMode="setOqeaMode" />
        </keep-alive>
        <router-view/>
        <keep-alive>
          <Footer :oqeaMode="store.oqeaMode" />
        </keep-alive>
      </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { defineComponent } from 'vue'
import { mainStore } from './store/index'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
  },
  setup() {
    const store = mainStore();
    const setOqeaMode = () => {
      const isOqeaMode = store.oqeaMode
      store.oqeaMode = !isOqeaMode
    }

    return {
      store,
      setOqeaMode,
    }
  }
})
</script>