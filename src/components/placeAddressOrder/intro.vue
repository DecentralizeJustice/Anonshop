<script setup>
import { ref, computed } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
const emit = defineEmits(['next'])
const enabled0 = ref(false)
const enabled1 = ref(false)
const enabled2 = ref(false)
const enabled3 = ref(false)
const enabled4 = ref(false)
const enabled5 = ref(false)
const requirements = [
{
    title: 'We no longer offer package forwarding services.',
    text: `Do to issues with our previous package forwarding service, we no longer offer this service.`
  }
]
function next(){
  emit('next')
}
const allready = computed(() => {
  if(!enabled0.value){
    return false
  }
  return true
})

</script>

<template>
          
          <div class="w-full md:w-1/2 p-8 ">
            <div class="md:max-w-md mx-auto text-center">
              <span class="inline-block mb-6 text-lg text-blue-500 font-bold uppercase tracking-widest">Address Delivery Service</span>
                    <p class="mb-8 mt-2 text-2xl text-left text-white">This service allows you to have any item delivered to any address. Read and agree (toggle) to extra info to continue.
                    </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-8">
            <div class="md:max-w-md mx-auto text-center items-center ">
                  <h3 class="font-heading text-4xl text-white font-black tracking-tight mb-10">Extra Info</h3>
                  <SwitchGroup as="div" class="flex items-center justify-stretch mt-5">
                    <Switch v-model="enabled0" :class="[enabled0 ? 'bg-blue-500' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2']">
                      <span aria-hidden="true" :class="[enabled0 ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                    </Switch>
                    <SwitchLabel as="span" class="ml-3 text-sm" style="">
                      <h4 class="font-medium  text-3xl text-blue-500">{{ requirements[0].title }}</h4>
                      <p class="text-white text-xl mt-4 text-left">{{ requirements[0].text }}</p>
                    </SwitchLabel>
                  </SwitchGroup>
                
              </div>
          </div>
          <div class="w-full p-2 justify center">
          <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
            <button v-if="!allready" disabled class=" md:w-1/4  block w-full px-4 py-2.5 text-lg text-center text-white font-bold bg-slate-500  rounded-full">Continue</button>
            <button v-if="allready"  class=" md:w-1/4  block w-full px-4 py-2.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600  rounded-full" @click="next()">Continue</button>
          </div>
        </div>

</template>

<style scoped>
.bg-gradient-radial-dark-light {
  background-image:radial-gradient(50% 50% at 50% 50%,rgba(31,41,55,0) 0,#1f2937 100%)
}
.bg-gradient-radial-dark {
  background-image:radial-gradient(50% 50% at 50% 50%,rgba(17,24,39,0) 0,#111827 100%)
}
</style>