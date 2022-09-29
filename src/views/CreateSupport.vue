<template>
  <div class="mt-10 md:mt-20 flex-grow">
    <div class="text-center sm:mb-8 md:mb-12">
      <h3 class="text-lg sm:text-2xl leading-6 font-bold">Add a new Medication Support</h3>
    </div>
    <form @submit.prevent="submit">
      <div class="shadow overflow-hidden sm:rounded-md md:w-1/2 w-5/6 mx-auto">
        <div class="px-4 py-5 bg-white">
          <div class="flex flex-col md:gap-8 sm:gap-6 gap-2">
            <div>
              <label class="block text-sm md:text-base font-medium">
                MedicineName
                <input
                  required
                  type="text"
                  autocomplete="off"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                  v-model="medicationItem.medicineName"
                />
              </label>
            </div>
            <div>
              <label class="block text-sm md:text-base font-medium">
                Does
                <input
                  required
                  type="text"
                  autocomplete="off"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  v-model="medicationItem.does"
                />
              </label>
            </div>
            <div>
              <label class="block text-sm md:text-base font-medium">
                Description
                <input
                  required
                  type="text"
                  autocomplete="off"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  v-model="medicationItem.description"
                />
              </label>
            </div>
            <div>
              <label class="block text-sm md:text-base font-medium">
                Frequency
                <input
                  required
                  type="text"
                  autocomplete="off"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  v-model="medicationItem.frequency"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 bg-grey text-right sm:px-6">
          <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-secondary bg-primary"
          >
            {{ isUpdate ? 'Save' : 'Create'}}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { createMedicineSupport, updateMedicineSupport } from '../api/support'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'CreateSupportList',
  setup() {
    const router = useRouter()
    const route = useRoute()

    const isUpdate = route.query.isUpdate || false
    const medicationItem = ref(
      {
        medicineName: null,
        does: null,
        description: null,
        frequency: null,
        id: null,
      }
    )

    if (isUpdate) {
      Object.keys(medicationItem.value).forEach((key) => {
        medicationItem.value[key] = route.query[key]
      }) 
    }

    const submit = () => {
      let valid = false
      valid = Boolean(medicationItem.value.medicineName && medicationItem.value.does && medicationItem.value.description && medicationItem.value.frequency)
      if (valid) {
        if (medicationItem.value.id) {
          updateMedicineSupport(medicationItem.value.id, medicationItem.value).then(res => {
            if(res.status === 200) {
              router.push({
                path: "/"
              })
            }
          }).catch(err => {throw new Error(err)})
        } else {
          createMedicineSupport(medicationItem.value).then(res => {
            if(res.status === 201) {
              router.push({
                path: "/"
              })
            }
          }).catch(err => {throw new Error(err)})
        }
      }
    }
    return { 
      medicationItem,
      submit,
      isUpdate
    }
  },
})
</script>
