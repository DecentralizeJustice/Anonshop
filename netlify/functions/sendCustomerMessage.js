const mongoDBPassword = process.env.mongoDBPassword
const mongoServerLocation = process.env.mongoServerLocation
const Joi = require("joi")
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = "mongodb+srv://main:" + mongoDBPassword + "@"+ mongoServerLocation + "/?retryWrites=true&w=majority"

exports.handler = async (event) => {

  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
    const collection = client.db("orders").collection("lockerOrders")

    const parsed = JSON.parse(event.body)

    const numberArray = parsed.passphrase
    const numberArraySchema = Joi.array().length(8).items(Joi.number().max(2050).min(0))
    await numberArraySchema.validateAsync(numberArray)
    
    const message = parsed.message
    const messageSchema = Joi.string().required().max(9999)
    await messageSchema.validateAsync(message)

    const sender = parsed.sender
    const senderSchema = Joi.string().required().valid('shopper','earner')
    await senderSchema.validateAsync(sender)

    const to = parsed.to
    const toSchema = Joi.string().required().valid('dgoon','everyone')
    await toSchema.validateAsync(to)

    if(sender === 'shopper' && to === 'dgoon'){
      await collection.updateOne(
        { shopperPassphrase: numberArray.toString() },
        { $push: { shopperChat: { message: message, timestamp: Date.now(), sender: sender } } }
      )
      console.log('shopper to dgoon message entered')
    }
  return {
    statusCode: 200,
    body: ''
  }
  } 
  catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: ''
    }
  }
}