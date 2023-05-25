const mongoose =require("mongoose")
const cartSchema=mongoose.Schema({

productId:{ type: Number, required: false },

})
module.exports=mongoose.model('article',cartSchema)