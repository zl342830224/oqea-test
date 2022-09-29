<template>
    <main class="flex-grow py-4 md:py-14">
      <div class="container mx-auto">
        <div class="text-right mr-2 mb-4">
          <button
            @click="toCreatePage"
            class="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-secondary bg-primary">
            Create  
          </button>
        </div>
        <SupportList :medicineSupports="medicineSupports" :loading="loading" @remove-medicine-support="removeMedicineSupport"/> 
        <div class="mt-20">
        </div>
      </div>
    </main>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { getMedicineSupports, deleteMedicineSupport } from '../api/support'
import SupportList from '../views/SupportList.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  components: {
    SupportList
  },
  setup () {
    const loading = ref(true)
    const router = useRouter()

    let medicineSupports = ref([])
    const getList = () => {
      getMedicineSupports().then(res => {
        medicineSupports.value = res.data
        loading.value = false
      });
    }
    getList()

    const removeMedicineSupport = (id) => {
      if (id) {
        deleteMedicineSupport(id).then(() => {
          getList()
        })
      }
    }

    const toCreatePage = () => {
      router.push({
        path: "/createSupport",
        query: {
          isUpdate: false
        }
      })
    }

    return {
      medicineSupports,
      getList,
      removeMedicineSupport,
      toCreatePage,
      loading
    }
  },
})
</script>
<style>
body {
  background-color: theme("colors.green.50");
}
</style>
