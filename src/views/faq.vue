<script setup>
import { ref } from 'vue'
const faq = [
  {
    question: 'Do you support pgp keys?',
    answer: `Yes, our pgp key is below. We only support pgp encryption for package forwarding services. You should place an ship to an address order and use the pgp key to encrypt your real order info after you place an order. If you have any questions just place an order and ask in the chat.

-----BEGIN PGP PUBLIC KEY BLOCK----- mQENBGR7a3IBCAC2PXhLM0QtXYXaEFBluUdEr2x+X23c2G2FCM6isVMW3hsWcdhw zWYnwCkqsG5/LjJ+N/jVQPTbzuw0KaZunIOofhSEncFzchlaJYRYaZUu0dEiB30y jhL9qUavZM0ItM10GAuQPanfCGu+fIGi6u/ReGhJLnayhXOm8uJZ/zZCvCtnRLZ+ wqgWg8dxQJ835lp1tuv43lvGoN7/iiy/q2pOQM+jpDbY7GMQtCBXEdBXj6xo6f8L /+m1JpNEIgHt0EH5wuGJa5/3bVxoF9lD1yPoaNx1/AVc3oJaBHEHDaUiICbfUy/L sakmKaB7w2HWFjQ8chz+OYo9li3K+oEs8XsRABEBAAG0GWFub25zaG9wKCk8bm9u QGdtYWlsLmNvbT6JAVcEEwEIAEEWIQRnaTbI9fiMt3VgIUFd1S8ldI/oXwUCZHtr cgIbLwUJA8O4VgULCQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgAAKCRBd1S8ldI/o X2VCB/9H5UQXnxIAfFwGDAVQAXUt0qsRLDZkTzP6t/pe1IfGiL9yhf3CP0K17Xpk t9UeKUOT9Eh4Sx6m7bwbbPJYAAwjeJsHMogAp4Z4w1jZT9yTvvPhH71b0HAJa5wz EwpwhgjlfzLomBWJ7P7UYoOAjTlYo1DcmJV+vsrVZctS/CXLZGWdGGOIq5IU1bQ/ 974vTh8M2X9QqJPCwkq+ZIEJ9YqnrDmInNQsp5cj63nfwxjSjX/fvLrJdR3qS6Ym GvuZDlXea0jQmguqeDCWk+FOiJwdJO7E13+JijyGBn/IHUsG1btq0BGEWOQWjGij rIuyWTobPbr6x1qUJjlYdZxLaUEE =b95u -----END PGP PUBLIC KEY BLOCK-----`
  },
  {
    question: 'Your website list tax as 8%, but the tax is not that high.',
    answer: 'Yes, we assume a higher than average tax on items to not waste time asking for more funds. If you want an exact tax simply ask us after your order is placed.'
  },
  {
    question: `How fast is your service?`,
    answer: `We try our best to process all orders within 24 hours. `
  },
  {
    question: `Do you offer refunds/returns?`,
    answer: `Due to Amazon return scams, you must make an account and use a gift recipient to make a return. If you would like to have a gift receipt added, please shoot us a message after you place your order. If there is a problem with your order and your order can not be placed, We can issue you a refund.`
  },
  {
    question: `Do you use Amazon Prime?`,
    answer: `No. We do no use Amazon Prime to ship products. If you want faster shipping, that would be extra.`
  },
  {
    question: `Are there any restrictions on what you can ship?`,
    answer: `Yes. We can not process gun related items and we reserve the right to not process other orders on a case by case basis.`
  }
]
const selectedQuestion = ref(-1)
function selectQuestion(chosen) {
  if (selectedQuestion.value === chosen) {
    selectedQuestion.value = -1
    return
  }
  selectedQuestion.value = chosen
}
</script>

<template>
<section class="py-10 bg-gray-800 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="relative py-16 px-8 bg-gray-900 overflow-hidden border border-gray-800 rounded-3xl">
      <div class="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
        <div class="absolute bg-gradient-radial-dark w-full h-full"></div><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685928443/landingpage/pattern-dark.png" alt="">
      </div>
      <div class="relative mb-10 md:max-w-xl mx-auto text-center"><span class="inline-block mb-5 text-sm text-blue-500 font-bold uppercase tracking-widest">Frequently asked questions</span>
        <h2 class="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight">Got questions? We’re here to help!</h2>
<!--         <p class="text-gray-400 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tellus vestibulum, commodo pulvinar.</p> -->
      </div>
      <div class="relative max-w-3xl mx-auto">
        <div class="flex flex-wrap -m-5" v-for="(question, index) in faq" :key="index">
          <div class="w-full p-3 my-3" v-if="index === selectedQuestion">
            <a class="block p-10 bg-gray-800 rounded-3xl text-left" @click="selectQuestion(index)">
            <div class="flex flex-wrap -m-2">
              <div class="flex-1 p-2">
                <h3 class="font-heading mb-4 text-xl text-white font-black">{{ question.question}}</h3>
                <p class="text-gray-400 font-bold">{{ question.answer }}</p>
              </div>
              <div class="w-auto p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.07928 15.8198L12.3093 15.8198L17.9193 15.8198C18.8793 15.8198 19.3593 14.6598 18.6793 13.9798L13.4993 8.79983C12.6693 7.96983 11.3193 7.96983 10.4893 8.79983L8.51928 10.7698L5.30927 13.9798C4.63927 14.6598 5.11928 15.8198 6.07928 15.8198Z" fill="#374151"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
          <div class="w-full p-3 my-3" v-if="index !== selectedQuestion">
            <a class="block p-10 bg-gray-800 rounded-3xl text-left" @click="selectQuestion(index)" >
            <div class="flex flex-wrap -m-2">
              <div class="flex-1 p-2">
                <h3 class="font-heading text-xl text-white font-black">{{ question.question }}</h3>
              </div>
              <div class="w-auto p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9207 8.18018H11.6907H6.08072C5.12072 8.18018 4.64073 9.34018 5.32073 10.0202L10.5007 15.2002C11.3307 16.0302 12.6807 16.0302 13.5107 15.2002L15.4807 13.2302L18.6907 10.0202C19.3607 9.34018 18.8807 8.18018 17.9207 8.18018Z" fill="#374151"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
        </div>
        <p class="text-gray-400 font-bold text-center mt-8"><span>Still have any questions? </span><a class="text-blue-500 hover:text-blue-600" href="/messageMe">Ask Me Here</a></p>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.bg-gradient-radial-dark-light {
  background-image:radial-gradient(50% 50% at 50% 50%,rgba(31,41,55,0) 0,#1f2937 100%)
}
.bg-gradient-radial-dark {
  background-image:radial-gradient(50% 50% at 50% 50%,rgba(17,24,39,0) 0,#111827 100%)
}
</style>
