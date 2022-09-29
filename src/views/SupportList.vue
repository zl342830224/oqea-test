<template>
  <template v-if="medicineSupports && medicineSupports.length" v-cloak>
    <div class="shadow overflow-hidden border-b border-gray-200 rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-tableheader">
          <tr>
            <th scope="col" class="sm:px-6 p-3 text-left text-xs uppercase tracking-wider">
              Medicine Name
            </th>
            <th scope="col" class="sm:px-6 py-3 text-left text-xs uppercase tracking-wider">
              Description
            </th>
            <th scope="col" class="sm:px-6 py-3 pr-2 sm:pr-10 text-right text-xs uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="item in medicineSupports" :key="item.id">
            <td class="sm:px-6 px-2 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img class="h-10 w-10 rounded-full" src="../assets/unnamed.png" :alt="item.medicineName">
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium">
                    {{ item.medicineName}}
                  </div>
                  <div class="text-sm">
                    {{ item.does }}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              {{ item.description }}
            </td>
            <td class="sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                class="text-primary hover:text-third mr-2"
                @click="toUpdatePage(item)"
              >Edit</button>
              <button
                class="text-primary hover:text-third"
                @click="$emit('removeMedicineSupport', item.id)"
              >Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <template v-else-if="loading">
    <p class="py-20 text-5xl text-center font-bold text-primary">
      Loading...
    </p>
  </template>
  <template v-else>
    <p class="py-20 text-xl text-center font-bold text-primary">
      No Medication, please use the create button to add one.
    </p>
  </template>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SupportList',
  props: {
    medicineSupports: Object,
    removeMedicineSupports: Function,
    loading: Boolean
  },
  setup () {
    const router = useRouter()

    const toUpdatePage = (item) => {
      router.push({
        path: "/createSupport",
        query: {
          isUpdate: true,
          ...item,
        }
      })
    }

    return {
      toUpdatePage,
    }
  },
})
</script>

