<script setup>
import axios from 'axios';
import globalJson from '@/assets/globalInfo.json'
import { ref, toRaw, onMounted, computed } from 'vue'
import { getRandomInt, numberArrayToWordArray } from '@/assets/misc.js'
const emit = defineEmits(['back'])
const props = defineProps(['passphraseArray','cart', 'addressInfo', 'orderNotes', 'moneroAddress', 'tip'])
const numberArray = ref([])
const wordArray = ref([])
// const buttonDisabled = ref(false)
async function getPassphrase() {
  if(props.passphraseArray.length === 0){
  const tempNumberArray = []
  for (let index = 0; index < 8; index++) {
    tempNumberArray.push(await getRandomInt(2048))
  }
  wordArray.value = numberArrayToWordArray(tempNumberArray)
  numberArray.value = tempNumberArray
  } else {
    wordArray.value = numberArrayToWordArray(props.passphraseArray)
    numberArray.value = props.passphraseArray
  }

}
const itemSubtotal = computed(() => {
  let subtotal = Number(0)
  props.cart.forEach(element => {
    subtotal += (element.quantity * element.price)
  });
  return subtotal
})

const orderTax = computed(() => {
  return itemSubtotal.value*Number(globalJson.estimatedTax)*.01
})
const serviceFee = computed(() => {
  const minfee = Number(globalJson.addressMinFee)
  const percentFee = Number(itemSubtotal.value)*Number(globalJson.addressPercentage)*.01
  if(minfee > percentFee){ 
    return minfee
  }
  else{
    return percentFee
  }
})
async function submit() {
  const itemList = []
  for (const thing of toRaw(props.cart)) {
    let item = {}
    item.link = thing.itemLink
    item.description = thing.notes
    item.cost = thing.price
    item.quantity = thing.quantity
    itemList.push(item)
  }
  const metadata =   
    { 
      numberArray: toRaw(numberArray.value), 
      itemList: toRaw(itemList),
      extraNotes: toRaw(props.orderNotes),
      type: 'firstAddressOrder',
      amount: (Number(orderTax.value)+Number(itemSubtotal.value)+Number(serviceFee.value)+Number(props.tip)).toFixed(2),
      taxAmount: orderTax.value,
      orderSubtotal: itemSubtotal.value,
      bondUSD: Number(0),
      serviceFeeUSD: serviceFee.value,
      extraAmountUSD: props.tip,
      refundAddress: props.moneroAddress,
      discountPercent: 0,
      discountPossible: false,
      addressInfo: {
        zipcode: props.addressInfo.zipcode,
        city: props.addressInfo.city,
        streetAddress: props.addressInfo.street,
        fullname: props.addressInfo.name,
        country: props.addressInfo.country,
        aptNumber: props.addressInfo.aptNumber
      }
    }
    const results = await axios.post('/.netlify/functions/createBTCPayInvoice', 
    { amount: metadata.amount, 
      metadata: metadata
    })
   console.log(results)
   window.location.href = results.data.checkoutLink
}
const purchaseInfo = `This passphrase is how you will access your order,  
so protect it like a password. After you press continue, you will be taken to a payment portal. 
After your payment has 7 confirmations, you can use this passphrase to check on your order.`

onMounted(() => {
  getPassphrase()
})
const what = `After you place your order, I will process it and get back to you within 24 hours.`
//const what1 = `After your order is in the orderbook, earners have the opportunity to select and complete your order. Your order will stay in the order book for around a week before being canceled and returned to you, if no one picks it up.`
</script>

<template>
        <div class='flex flex-wrap items-center'> 
          <div class="w-full md:w-1/2 p-8 ">
            <div class="md:max-w-md mx-auto text-center">
              <span class="inline-block mb-6 text-lg text-blue-500 font-bold uppercase tracking-widest">What Happens Next?</span>
                    <p class="mb-8 mt-2 text-2xl text-left text-white">{{ what }}
                    </p>
<!--                     <p class="mb-8 mt-2 text-2xl text-left text-white">{{ what1 }}
                    </p> -->
            </div>
          </div>
          <div class="w-full md:w-1/2 p-8">
            <div class="md:max-w-md mx-auto text-center">
              <span class="inline-block mb-6 text-3xl text-red-500 font-bold uppercase tracking-widest">Write Down Your Account Passphrase</span>
                    <ul class="text-left">
                    <li class="flex items-center mb-4" v-for="(item, index) in wordArray">
                      <p class="text-2xl text-gray-100 font-bold">{{ index + 1 }}. {{ item }}</p>
                      </li>
                    </ul>
                    <p class="text-xl text-gray-100 text-left mt-5">{{ purchaseInfo }}

                    </p>
            </div>
          </div>
        <div class="md:w-2/3 mx-auto">
          <div class="container py-10 px-10 flex flex-col items-center grid md:grid-cols-2 gap-12 ">
            <button  class="mx-auto block w-full px-4 py-2.5 text-lg text-center text-white font-bold bg-red-500 hover:bg-red-600  rounded-full" @click="emit('back', numberArray)">Back To Summary</button>
            <button  class=" mx-auto  block w-full px-4 py-2.5 text-lg text-center text-white font-bold bg-green-600  rounded-full" @click="submit">Continue to BTCPay Server</button>
          </div>
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