const aiService = require("../services/ai.service")


module.exports.getReview= async (req,res) =>{

    const code= req.body.code;

    if(!code){
                     return res.status(400).send("Prompt is required");
    }
           response=await aiService(code);

           res.send(response);
}