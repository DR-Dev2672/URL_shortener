const mongoose =require("mongoose")

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        unique:true,
        required:true

    },
    redirectURL:{
        type:String,
       required:true
    },
    visitsHistory:[{ 
        timestamps:{type:Number}
    }]


},{timestamps})

const Url=mongoose.model("url",urlSchema)

module.exports={
    Url
}