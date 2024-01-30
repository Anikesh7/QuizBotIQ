const express = require('express')
const router = express.Router()
const OpenAI = require('openai')
const _ = require('lodash')

const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
    const { GoogleAuth } = require("google-auth-library");
    const MODEL_NAME = "models/text-bison-001";
    const API_KEY = process.env.GOOGLE_PALM2_API_KEY

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY
// })
const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(process.env.GOOGLE_PALM2_API_KEY),
});

router.get('/', async (req, res) => {
    // const response = await openai.chat.completions.create({
    //     model: 'gpt-3.5-turbo',
    //     messages: [{role: "system", content:'what is 2*2'}],
    //     max_tokens:64
    // })

    // return res.status(200).json({
    //     success:true,
    //     data: response.data.choices[0].text
    // })

    

    
    const prompt = `give me ${req.query.no} mcq questions on ${req.query.topic} in strict json format in which there should be 4 fields, 1st field for question id, 2nd field for question, 3rd field for options in a json format and 4th field for correct answer index, return response without writing json infront of response`;
    client
        .generateText({
            model: "models/text-bison-001",
            prompt: {
                text: prompt,
            },
        })
        .then((result) => {
            
            const str = _.trim(result[0].candidates[0].output,'"```json')
            const obj = JSON.parse(str)
            return res.status(200).json(obj)
        })
        .catch(error => res.status(500).send(`Server Error:${error}`))
})

module.exports = router