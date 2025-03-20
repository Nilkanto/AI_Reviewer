const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY); //Here, we have created the instance of generative AI
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash", 

   systemInstruction: `
   You are an code reviewer who have expertise in development. 
   You look for the code and find he problems and suggest the solution to the developer.
   
   You always try to find the best solutions for developer and also try to make code more
   efficient and clean`


}); //Here, we have selected model

const code = "Explain how AI works"; //Here, to use model we have to give the prompt


async function generateContent(code){

    const result = await model.generateContent(code);
    console.log(result.response.text());
  return result.response.text();
}

module.exports=generateContent



