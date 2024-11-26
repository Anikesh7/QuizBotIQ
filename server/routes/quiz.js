const express = require('express')
const router = express.Router()
// const OpenAI = require('openai')
const _ = require('lodash')
const ensureAuthenticated = require('../middleware/AuthJwt')

// const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
//     const { GoogleAuth } = require("google-auth-library");
//     const MODEL_NAME = "models/text-bison-001";
//     const API_KEY = process.env.GOOGLE_PALM2_API_KEY

// // const openai = new OpenAI({
// //     apiKey: process.env.OPENAI_API_KEY
// // })
// const client = new TextServiceClient({
//     authClient: new GoogleAuth().fromAPIKey(process.env.GOOGLE_PALM2_API_KEY),
// });

    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

router.get('/', ensureAuthenticated, async (req, res) => {
    // const response = await openai.chat.completions.create({
    //     model: 'gpt-3.5-turbo',
    //     messages: [{role: "system", content:'what is 2*2'}],
    //     max_tokens:64
    // })

    // return res.status(200).json({
    //     success:true,
    //     data: response.data.choices[0].text
    // })

    
    const prompt = `give me 10 mcq questions on ${req.query.topic} in strict json format in which there should be 4 fields, 1st field for question id, 2nd field for question, 3rd field for options(there should be four options) in key value pair like {asnwer_a: answer,asnwer_b:answer} and 4th field for correct answer index(0 based indexing), return only json`;


    // client
    //     .generateText({
    //         model: "models/text-bison-001",
    //         prompt: {
    //             text: prompt,
    //         },
    //     })
    //     .then((result) => {
    //         console.log(result)
    //         const str = _.trim(result[0].candidates[0].output,'"```json')
    //         const obj = JSON.parse(str)
    //         console.log(obj);
    //         return res.status(200).json(obj)
    //     })
    //     .catch(error => res.status(500).send(`Server Error:${error}`))

    const result = await model.generateContent(prompt);
    let response = await result.response;
    response = response.text();
    response = response.slice(0,-1);
    const str = _.trim(response,'```json');
    //const text = JSON.parse(str);
    //console.log(str);
    return res.status(200).send(str);
})

module.exports = router