<script setup>
import axios from 'axios';
import { ref } from 'vue'
const text = ref('')
const messageSent = ref(false)
async function sendMessage() {
  if (text.value.length < 1) {
    return
  }
/*   buttonDisabled.value = true
  await sleep(3000)
  buttonDisabled.value = false */
  const results = await axios.post('/.netlify/functions/sendMeMessage', { message: text.value })
  console.log(results)
  text.value = ''
  messageSent.value = true
}
const faq = [
{
    q: `I placed the order on the 25th. The payment gateway showed the payment was accepted. On the 29th i received a message at the top of the pass phrase page stating my order was being processed and tracking...`,
    a: `Please message me your passphrase or passphrase link. I can assist you in the chat for your order. When you send me this info I will shoot you a message in your chat, on the passphrase page.`
  },
{
    q: `I placed an order on Friday Oct 25th, 2024. It was for several items. I have yet to receive tracking or any of my items. Can I please get an update?`,
    a: `Hi Friend. I am not showing an orders placed on that date. Please send me your order link and payment date.`
  },
{
    q: `Hello.
I ordered cell phone with sim card with deliver at....`,
    a: `Your order is working on my end. You should try your words again and save the link for your order when it works.`
  },
{
    q: `date is September 16th 2024,  Are you still active on this site?  Are you still taking orders and processing them?`,
    a: `Yes.`
  },
{
    q: `I placed order 9/9/2024
total USD 383.50.
Now I can't login in .
My monero address
`},
{
    q: `Hi. Your order has an eta of Friday. You might want to check your words and try again to login. Shott me a messag here again if you cant login.
`,
    a: `Yes. Just place an locker order with dummy info and we can chat more in the order chat!`
  },
{
    q: `hey, I placed an order and it looks like the 8 words don't work`,
    a: `You did not place a refund address with your order. Send me your refund address with your monero txid again and I will refund you can place the order again if you wish.`
  },
  {
    q: `Would I be able to use your service to forward mail?
Such as if I mailed a package to you and then you mailed it to someone else`,
    a:`Yes. Just place an order and write a note and message saying that you would like package forwarding.`
  },
{
    q: `Hi

Can you buy from shops outside USA too, like from Norway?`,
    a:`Yes. We can deliver anywhere the original site can deliver to.`
  },
{
    q: `I think you scammed me for that
Gold but we will see I guess`,
    a:`Hi. If your order is the one I think it is; This was delivered over a week ago. I dropped tracking info in the chat, but that chat has been deleted since its been over a week since delivery. Please place a new order, I will refund you for the mock order, and we will have a chat to discuss this order further. There is also a link given in the chat, if writing down the 8 words does not work for you.`
  },
{
    q: `Hey I placed an order for....`,
    a:`Hi. Amazon lost your package but they are sending a new one. It should arrive by saturday!`
  },
{
    q: `What is the limit on purchases?  It seems like I cannot place an order >5000.  Is this intentional?!`,
    a:`If you want to place an order larger than 5,000 usd, you should place the order, but instead of price the items at a low number such as 20 usd or something. This allows us to preview the order and chat with you before requesting the full amount in the chat!`
  },
{
    q: `The store is back up! Thanks for your patience!`,
    a:`The store is back up! Thanks for your patience!`
  },
{
    q: `My order got cancelled.  Can you look up why?`,
    a: `If your order was canceled the chat message will have a reason why. If you no longer have access to your order, you can place it again.`
  },
{
    q: `What should I do if want to buy a product outside US?
Should I calculate
an exchanged price from my country's amazon, or find same product in amazon.com?
?`,
    a: `You should calculate an exchange rate. Thanks for asking!`
  },
  {
    q: `Do you ship and support for Canada ???`,
    a: `Yes.`
  },
{
    q: `Does this service works only in US?`,
    a: `Anon Shop can work in most countries. You can place an order and test it. If it does not work, I will issue you a full refund!`
  },
{
    q: `I am having issues placing a locker order, I tried different web browsers. I click confirm passphrase saved and then nothing happens.`,
    a: `My btcpay server was having an issue. I changed some settings, so you can tray again. If the problem exist, just shoot me another message with your order details and I will try and recreate your issue. Thanks for reaching out!`
  },
{
    q: `Hey just wanted to let you know order submission isnt working. I went to place an order, of course above $25, and it popped up a message saying the order minimum was $25 and wouldnt let me submit.`,
    a: `Hi Friend. I have fixed the error code. The min order is now 35 usd, since that is what it takes for amazon to give free shipping.`
  },
{
    q: `If I want an Amazon item shipped ONLY to an Amazon Locker, then I pay you for it, and then in the chat you notify me that it cannot be shipped to an Amazon Locker, can I then at that point receive a 100% refund?`,
    a: `Yes.`
  },
{
    q: `over 7 confirms no account found copy/paste Passphrase order has email in it.`,
    a: `This service does not support email. You should be able to sign in to check on your order. I have already issued you a full refund. More details are in your order. If your 8 words are not working you can send them to me in a message so I can further help you.`
  },
{
    q: `Guess passphrase is wrong even though was copy/paste been over 7 confirms....`,
    a: `You should be able to log in now.`
  },
{
    q: `Hi, I chose to not use bank accounts in life, I just use cash and crypto. This service is exactly what i was looking for! I'll use this service the rest of my life if it's online. Thank you so much for providing this service! :-)`,
    a: `I am so glad that you like the service and that it supports your lifestyle!`
  },
{
    q: `Hello it seems some items from this order might’ve got returned to sender because I’m having issues with usps shipping.`,
    a: `Hi. I messaged you about this order in the order chat. Is the order chat not working for you?`
  },
{
    q: `Is it also possible to buy from other sites than amazon if I dont use amazon lockers?`,
    a: `Yes, you can order from any website. People often by things from ebay and amazon.`
  },
{
    q: `Hi again. I would really like to try your service to purchase to Amazon lockers through Amazon.es but I don't know how to add the product values, in Euros or convert to dollars. If I put in Euros it will underestimate the amounts in $ and thus the amount of Monero I send won't be enough to cover the order. I didn't see anything related to this in the FAQ or previous questions. Can you please advise, thank you.`,
    a: `You can place your orders in Euros. A rough conversion is perfectly fine.`
  },
{
    q: `Is there any way to contact you other than asking a question here????? My messages in my orders never seem to load`,
    a: `To cut down on meta dat we only off the built in chat. If you are using tor you might have to enable javascript. You could also try a different browser. If this does not work, you can tell me what you ordered here.`
  },
{
    q: `Hello. If I buy a giftcard through you, do I get the code in the chat or what? Just wondering since that doesn't really require physical delivery to my address / an Amazon locker. Thanks.`,
    a: `Yes, you would get the code in the chat.`
  },
{
    q: `Hello I send money to your btcpay but lose access to website so payment goes through but order not, i can provide monero payment proof and exact transaction amount, can i get refund..`,
    a: `Hi. I have only one order placed in the past 12 hours. This order has a refund address attached to it.  Answering these questions would be helepful for me to help you:
    1. Do you have your 12 word password? 2. What item did you order?`
  },
{
    q: `Hi. I made a really stupid mistake. I ordered a product from the website: .....`,
    a: `Hi. Your order is good to go and I have sent you a message in the chat. We can deliver and item to an address within the same country. `
  },
  {
    q: `Do you have a way to be contacted before placing an ordre (i dont have social media) like a mail / matrix / signal number ?`,
    a: `Currenlty we dont. You can send me a questions here. I will remove private info and answer it below.`
  },
{
    q: `greetings

a few days ago I had a order with you sent to an amazon counter location at whole foods. but they wanted something more than a QR code so it got returned to amazon.

I was talking with a friend who got their amazon order delivered to an amazon counter at some small shop that did not have a locker and they said only a QR code was  needed to pick up their order.

So maybe if you only choose independent stores instead of large chains like Whole Foods the amazon counter locations could be an option. That would be nice if we could try some smaller alternative amazon counter locations. Perhaps calling the location to confirm where they individually require for delivery of amazon packages would be an option. If you get even 1 counter location in say each of the top 25 large cities, or maybe just in cities that you most commonly have customers picking up items in, and those locations accept just a QR code, then you could at least offer Amazon counter locations at just those select locations or something. i'm just spitballing here, but I really love your service. It's excellent but being able to get large items would really kick up the amount of money you could make, I would think.
`,
    a: `I will do more research in how to make large items delivery work. You made some great points and thanks for all the help and support!`
  },
{
    q: `Hi,
Regarding Address Delivery,
1. when inputting Item Amount (USD), is that the amount including shipping cost? or how do you calculate shipping cost?
2. what if there are no taxes for this order? we still need to pay Estimated Taxes 8%?
`,
    a: `Hi. I calculate shipping cost after you place your order. So you can just leave it out for now. If the tax rate is not correct, I will refund you.`
  },
{
    q: `Hello bro, I keep asking on Twitter, my handle is ****, but can you please upload a public PGP key so we can encrypt messages like our addresses? I do not feel rlly safe sending my address to yhour javascript web form
`,
    a: `Just added it. Its the first question in the FAQ. Thanks for reaching out!`
  },
{
    q: `Hi, I love your venture! Despite not a customer, I routinely check your update and I hope you have great success.

There's one term I hope you can clarify though: when you mention you have 5,500 USD revenue, are you actually talking about Gross Merchandise Volume (GMV_?

Revenue and Gross Merchandise Volume, (GMV) are two distinct financial metrics that businesses use to measure different aspects of their performance.

1. **Revenue**: This refers to the income that a business earns from its normal business operations, typically from the sale of goods and services to customers. Revenue is the top line or gross income figure from which costs are subtracted to determine net income. In the case of a company that sells goods or services directly to customers, the revenue is simply the total amount of money received from those sales.

2. **Gross Merchandise Volume (GMV)**: This refers to the total value of all transactions of goods or services sold through a particular marketplace over a specific time period. This metric is often used by online marketplaces, such as e-commerce platforms, where the platform itself does not sell its own goods or services but facilitates transactions between sellers and buyers.

The key difference between the two lies in what they measure and include. Total Transaction Volume includes the total value of all transactions, regardless of who ultimately receives the money. Revenue, on the other hand, only includes the money that the company itself earns, which could be a fraction of the total transaction volume if the company operates a marketplace model and earns revenue through fees or commissions.

Further reading: https://medium.com/@algovc/10-marketplace-kpis-that-matter-22e0fd2d2779
`,
    a: `Hi.From your question, the correct term I should use is GMV of ~5,500 USD. I will read over the material you sent me and try to be more clear in my future post.
    Thanks for reaching out and correcting me, I studied computer science not accounting so my vocab def needs refinement! Thanks again.`
  },
{
    q: `I accidentally placed two orders for what is effective the same item (different product ID). I did this because I mistakenly lost the last word of my phrase the first attempt. Will I be refunded to the specified refund address?
`,
    a: `Hi. I will refund you. Check your order chat (either one, I sent a message in both chats).`
  },
  {
    q: `I wanted to do a concierge order. On Question 13, it says I don't provide my address until after I checkout. You said, "Doing things this way ensures that we only collect your sensitive information( such as your address) when we know for 100% certainty we can complete your order...`,
    a: `Thanks for the great question! You can place dummy informtion in the address info if you would like. I will then simply ask for your real information when I confirm that we can process your order. Sorry for any confusion.`
  },
{
  q: `I'm looking to order a fairly expensive item as a Canadian. Do you place orders within Canada for Canadian orders? (do I need to worry about import charges?).?`,
  a: `There would be aroudn a 5% import tax on our mail forwarding service only. If you want to order something for delivery via an amazon locker or something from Canada there is no import fee..`
},
{
  q: `When ordering customizable items such as stamps, do I just put the customizable test in the notes followed by the box where it needs to be put?`,
  a: `Yes. That should work. If I have any questions, I can also message you in chat after you place an order.`
},
{
  q: `Hello, would it be possible to forward a package to InPost paczkomaty (polish parcel lockers company)? For example order something on aliexpress and forward it to InPost parcel locker.`,
  a: `Hi. We do not support this type of service currently.`
},
{
  q: `Why I can't access my order?`,
  a: `Hi. Your order should be working now. Sorry for the issue!`
},
{
  q: `One question though, does Netherlands have a
Amazon collection points or is delivery at an appointed address possible?`,
  a: `In your case, it would be delivery to an address.  `
},
{
  q: `regarding question 36;
I can not find the Netherlands in country options..`,
  a: `Sorry. I just added it. It should be there now. We dont support email at this time, unfortunately. You can also fill in dummy data for now, and I can collect more data in the order chat. `
},
{
  q: `Hello-this is question regarding buying.
Can you buy stuff from ebay USA and that be
delivered to the Netherlands(EUROPE)`,
  a: `Yes. You should place an address order. If your order is not possible, we will simply refund you 100%.`
},
{
  q: `can i buy only from amazon?`,
  a: `No, you can buy anything online that isnt a subscription. For those we can only do giftcards.`
},
{
  q: `if we have a specific question about something that is more private, and dont have an order yet, how do we contact you? For example I want to ask about a specific item to see if it is okay to be purchased.`,
  a: `You can send me a message here,I will keep all sensitive info private.`
},
{
  q: `Does your Concierge service only allow Amazon? Or are other websites allowed??`,
  a: `Yes. We support most online retailers.`
},
{
  q: `Would the locker service be available for Canadian users?`,
  a: `Yes. We have a drop-down at checkout that lets you select Canada.`
},
{
  q: `Does your Concierge service only allow Amazon? Or are other websites allowed??`,
  a: `Yes. We support most online retailers.`
},
{
  q: `I got this error when I tried to submit an order "Order Sub-total Minimum is minOrderamount (USD)"
`,
  a: `The min order amount is 25 dollars since thats amazon's min order amount for free shipping.
  The error should be more descriptive now. Thanks for pointing that out!`
},
{
  q: `Hey there! Is this service also available for Belgium?`,
  a: `Yes. If there is an amazon locker near you we can deliver to it. Our other delivery options also work!`
},
{
q: `is it possible to buy steam deck from you and give you the address to my shipment forwarder?`,
  a: `Yes. We do things like this often. We charge 5% of the item price, and shipping to the forwarder. 
  You can place an address order, and we will chat more in the web app.`
},
{
q: `I tried viewing my order after I submitted and it said the account doesn't exist.`,
  a: `Hi. I can see your order info, so your order was placed successfully. You can try logging in again and if that does not work, you can message me your 8 words here.`
},
{
    q: `Earner account bond refund.  Look forward to using this as a buyer too.`,
      a: `Sent! Thanks for trying out our earning feature. Hopefully we will build up more demand and bring the program back.`
    },
{
    q: `I had an earner account before, and paid the bond. Can I get that refunded?

My 6 words aren't working to get into the account to message you directly, since the upgrade.

Don't want to post the words here unless instructed to, since these are public questions, but can if you just automatically redact them.`,
      a: `Of course! Just send me your 6 words here and your xmr refund address.`
    },
{
    q: `Re: Question 23`,
      a: `Sent!`
    },
{
    q: `Hi. I recently picked up an order, but I never saw the XMR refund from the deposit come through. I would have just asked in the chat, but my seed words no longer work (using "ability" for the 7th and 8th word)`,
    a: `Just message me your 6 words here and I will get you your refund. Thanks for reaching out.`
},
{
    q: `hey bud,[redacted] here, tried to login to the chat again to get [redacted] but "account not found" (used "ability" for the last 2).`,
      a: `I just finished the migration, try to login again. Sorry for the delay!`
    },
{
    q: `it seems as though orders from Amazon would be shipped directly to my address from Amazon as a gift? if I can't do Amazon locker and I don't want my address linked with Amazon can I have the item shipped to earner first or somewhere else and then re-shipped to me from them?`,
      a: `Yes. This will cost extra though. Just place and order and I will chat with you using the order chat.`
    },
{
    q: `Hi. If your order passphrase started with master or Ivory, please check on your order again. Your chat should work now. If you are neither of these people, and you do not have a 
    chat to message me in; You should message me(using the ask me a question) here with: 1. the first word in your passphrase 2. The exact amount of XMR paid(not including transaction fees) and the address you sent payment to.`,
      a: `See above.`
    },
{
    q: `hey it's been over a full day, please respond to my order`,
      a: `You might need to refresh your page since I have responded to all orders at this time. If my message is not there, please send me the first word of your passphrase, since there might be an issue with your chat functionality.`
    },
{
    q: `How can I find the Amazon Locker nearest to me?

The official website (amazon.com/findalocker) appears to be authwalled, requiring login to access Therefore, if I search for a locker with my account, and then place the order through you, I've deanonymized myself.

How can I search for Amazon Lockers in my area anonymously, without authenticating with an Amazon account?
`,
      a: `At checkout you can enter your zipcode. I will find some lockers near you and give you options
      when we chat about your order. If none of these locker options work for you, we generally issue you a full refund.`
    },
{
    q: `I need to buy something very expensive. What assurance do I have that the "Earner" won't take my funds and not place the order?`,
      a: `We hold the funds until both parties are satisfied. That means that the earner can't take your funds. You must tell us that the order
      went fine, before we release the funds to the earner.`
    },
  {
    q: `How do you handle items that aren't eligible for Amazon lockers? I've used lockers before and sometimes it wouldn't let me order certain items to lockers. Unfortunately there doesn't seem to be a good of way of knowing this without logging into an account to check beforehand.
    `,
      a: `If an item ships from Amazon it can fit into a locker. There are some size restrictions lockers also. You can look up
      an item and ensure that it says, "Ships from Amazon.com" without logging in. If your item can not ship to a locker, you must use the home delivery option.`
    },
    {
    q: `Can I order from websites such as, AliExpress, AliBaba or Shein??
          Or is this exclusive to Amazon?
      + Can I order to an address in a third world country (middle east) or is it exclusive to the US? and if not when are you planning to expand this service to support more countries?
      `,
    a: `If a website ships to you, we can order it for you. Returns might not be possible though.`
    },  
    {
    q: `Can you check if this page is working properly ?
  https ://anonshop.app/registerEarner
  I use an ad blocker and have enabled anonshop and plausable.i cant proceed ?`,
      a: `We are only accepting shoppers at this time.`
    },
  { q: `I tried to do concierge service/ship to an address but it asked for payment before I'd given an address. How do I submit an address to ship to?`,
    a: `You pay and then we check your order and get it ready for our earners. 
    After we check over it, we message you again in chat to get your address.
    Doing things this way ensures that we only collect your sensitive information( such as your address) when we know for 100% certainty we can complete your order.
    We would hate for you to give us sensitive info for an order that we can not process. Thanks for the good question. I will add an entry into our FAQ`
  },
  { q: `Hello I have an issue with order payment, (I had a double issue with the payment.)`,
    a: `Hi Friend. we have created a new order for you. Please login using the 6 word passphrase that you had for your first payment. The first word 
    should start with a h.`
  },
  { q: `Hey sorry to bother you. i had an issue with an order not completed then for a mistakes sent twice payment.I don't have a. chat in  order payment page`,
  a: `Hi Friend. We will process your order and refund you the correct amount. 
  Give us some time and we will make a chat and order number for you.`
  },
  { q: "Mastodon is mentioned as a social media contact point but it is not listed at the bottom of the website...just an observation.",
  a: "Hi. Thanks for the info. Where do you see a post about Mastadon? We have not gotten around to setting it up and need to remove the reference. Thanks for reaching out!"

  },
  { q: 
    `Hello, just so it’s clear for me, people want to buy stuff off Amazon but are spending with XMR, since XMR is not a payment method on their site the “earner” buys the 
    item which will include shipping info I suppose, with fiat (credit card) once the purchase is complete the “earner” receives the XMR? The earner has to deposit 5 XMR worth 
    in USD regardless of the purchase amount? How does one make the deposit/ where do the funds sit? And after order is purchased how long until deposit is received back and XMR credited? 
    It says if a dispute you will need login info …. As in user ID and password to the earners AMZ acct, is that right? And what about shipping issues or returns, how is that handled?  
    Sorry for the lengthy questions, just want to make sure ai understood the FAQ’s and any nuances`,
    a: `Wow this is a great question!
    <ol>
      <li>Deposits are made on our site at the earner tab. 
      Yes the deposit system works as you have said. We hold the funds until both sides are happy and we release the funds. The earner deposits 5 USD.</li>
      <li>We push the receiver to respond within a day of them receiving the item so that we can release the funds to the earner.</li>
      <li>Yes we handle disputes that way. The earner does not support refunds. The shopper has to handle that on their end since the order should be marked as a gift.
        All issues will be handled according to who is in the wrong. If the earner completed their end as they were instructed they will not be punished.
        If there is a shipping issue out of control of the shopper or earner we will consult and see what both parties would like. That could result in
        a new order being made, or a refund to both parties.  We have not had any issues yet, but if we do we will write a post- mortem of the situation to 
        document how edge cases were handled.</li>
    </ol>
    Thanks for the great questions, hopefully I did a good job at answering them!
    `
  },
{
    q: `If you were an earner placing a deposit at 4pm on Sunday and your order is not showing up, please shoot me a message here. `,
    a: `There was a mistake in your order and I need you to message me here. Thanks again!`
  },
{
    q: `Do you allow multiple items in one order? The FAQ uses singular "item" so it's not clear. The $5 fee is a lot for cheap items and some of mine don't meet the purchase minimum.`,
    a: `Hi Friend, we allow multiple items to be bought and delivered to the same locker. Most of our orders involve multiple items. I will make the faq more clear about that!`
  },
  {
    q: `Hi, I'm in Japan but I want to order from Amazon.com USA, is it possible to deliver to Japan amazon locker?`,
    a: `Shoot me another message here with the item you want and I will look into it for you!`
  },
{
    q: `Definitely interested for you service in europe, and particularly France.
I  hope that your service will at least survive in the US, cheers.`,
    a: `Thanks for the support. I can deliver to amazon lockers in France. Just place an order and I will work it out for you!`
  },
{
    q: `Hello, I live in Australia. AFAIK ProxyStore <https://dys2p.com/en/index.html> only forwards parcels to German addresses, your service only delivers to amazon lockers in the US and <https://purse.io/> does not support amazon lockers. 
    Do you have any recommendations on similar services or privacy-respecting parcel forwarders that ship to Australia?`,
    a: `I focused just on the United States at launch to start small, but I will consider expanding to Australia if you would like to be my first
    international customer. If you wish to try out my services just submit an order. If I can't provide you with a good service, I will simply refund you. If you have a problem filling out the form, just place in fake info, and that we can have a private chat where we can work on your order. `
  },
  {
    q: `I found you through the Monero subreddit on Reddit. It is interesting that you can pay for Amazon products with Monero and receive them in your Amazon locker. Do you have plans to support Amazon.co.jp for that? I would like to use this service in Japan!`,
    a: `Thanks for the support! I would love to expand globally eventually but now I only support US Amazon. Given that I am based in the usa, I would have to do more research into ordering amazon lockers in other countries. My app has chat built in once you pay for an item, I do not support sessions at this time.`
  },
  {
    q: `Ok so you have your own app for this service? Download from Google store?`,
    a: `Hi. I only have a web app for my services. If you want to place an order you can place an order in the orders tab. Here is a demo video of how it works:
          https://www.youtube.com/watch?v=Al7NJsf_fAU`
  },
  {
    q: `Hello buddy! I placed an order but couldnt send the xmr in time
          When i put the 4 words nothings comes up, should i just redo the order?`,
    a:`Hi. You should not refresh the page. It will take you to the correct page once you pay. There is a button at the bottom that says something like "Refresh Amount Sent", you can hit this button to check and once your payment is received the page will automatically take you to the correct page. You should not refresh the payment page.
        The app does not store your shopping cart, till you pay for privacy reasons. So you must place the order again. Sorry for the inconvenience. If you have any questions, feel free to shoot me another message.`
  }
]
function getQuestionNumber(number) {
  return faq.length - number
}
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
    <div class="relative py-16 px-8 bg-gray-900 overflow-hidden rounded-3xl">
      <div class="max-w-7xl mx-auto"><!-- <img class="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685928443/landingpage/pattern-dark.png" alt=""> -->
        <div class="relative flex flex-wrap -m-4">
          <div class="w-full md:w-1/2 p-4">
            <div class="flex flex-col justify-between h-full">
              <div class="mb-10 md:max-w-md">
<!--                 <span class="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">Message Me</span> -->
                <h2 class="font-heading text-blue-500 mb-6 text-4xl md:text-5xl lg:text-6xl  font-black tracking-tight">Message Me</h2>
                <p class="text-gray-200 font-bold text-xl">
                  Shoot me a message about anything anonymously. I work hard on my project and I welcome all questions you might have!
                  I will respond on at the bottom of this page. You can also search this page and see if anyone has asked your question before.
                </p>
              </div>
<!--               <div class="flex flex-wrap -m-5  md:block hidden">
                <div class="w-full md:w-auto p-4"><img class="mx-auto" src="https://res.cloudinary.com/dylevfpbl/image/upload/v1686615396/landingpage/pexels-luis-gomes-546819.jpg" alt=""></div>

              </div> -->
            </div>
          </div>
          <div class="w-full md:w-1/2 p-4">
            <div class="p-10 bg-gray-800 rounded-3xl">
              <div class="flex flex-wrap -m-3 mb-3">
              </div>
              <div class="flex flex-wrap -m-3.5" v-if="!messageSent">
                <div class="w-full p-3.5">
                  <label class="block mb-2 text-sm text-gray-500 font-bold">Message</label>
                  <textarea v-model="text" class="appearance-none px-6 py-5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-3xl" id="contactDarkReversePatternInput4-5" type="text" rows="8" placeholder="Enter your message"></textarea>
                </div>
                <div class="w-full p-3.5">
                  <div class="flex flex-wrap items-center -m-3">
                    <div class="w-full p-3">
                      <div class="flex flex-wrap md:justify-end -m-2">
                        <div class="w-full p-2"><button class="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full" @click="sendMessage">Send Message</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -m-3.5" v-if="messageSent">
                <div class="w-full p-3.5">
                  <p class="text-gray-200 font-bold text-xl">
                 Your message has been sent! I always try to respond to messages within 24 hours so check back here soon! Thanks again.
                </p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="py-10 bg-gray-800 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="relative py-16 px-8 bg-gray-900 overflow-hidden border border-gray-800 rounded-3xl">
      <div class="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
        <div class="absolute bg-gradient-radial-dark w-full h-full"></div><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685928443/landingpage/pattern-dark.png" alt="">
      </div>
      <div class="relative mb-10 md:max-w-xl mx-auto text-center">
        <!-- <span class="inline-block mb-5 text-sm text-blue-500 font-bold uppercase tracking-widest">Frequently asked questions</span> -->
        <h2 class="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl  font-black tracking-tight text-blue-500">Past Questions</h2>
<!--         <p class="text-gray-400 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tellus vestibulum, commodo pulvinar.</p> -->
      </div>
      <div class="relative max-w-3xl mx-auto">
        <div class="flex flex-wrap -m-5" v-for="(question, index) in faq" :key="index">
          <div class="w-full p-3 my-3" v-if="index === selectedQuestion">
            <a class="block p-10 bg-gray-800 rounded-3xl text-left" @click="selectQuestion(index)">
            <div class="flex flex-wrap -m-2">
              <div class="flex-1 p-2">
                <h3 class="mb-4 text-xl text-white">Question {{  getQuestionNumber(index) }}. <br/>{{ question.q}}</h3>
                <p class="text-gray-400  text-md">{{ question.a }}</p>
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
                <h3 class="text-xl text-white"> Question {{  getQuestionNumber(index) }}. <br/>{{ question.q }}</h3>
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
