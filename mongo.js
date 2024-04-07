const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/LocationDetails")
.then(()=>{
    console.log("CONNECTED");
}).catch(()=>{
    console.log("FAIL TO CONNECT");
})

const newSchema = new mongoose.Schema(
    {
        serial:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        devices:{
            type:String,
            required:true
        },
        type:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        }
    }
)

newSchema.statics.updateDetails = async function(serial, newData) {
  try {
    const updatedData = await this.findOneAndUpdate({ serial: serial }, { $set: newData });
    return updatedData;
  } catch (error) {
    throw new Error(error);
  }
}

newSchema.statics.deleteDetails = async function(serial) {
  try {
    await this.deleteOne({ serial: serial });
  } catch (error) {
    throw new Error(error);
  }
}

const collection = mongoose.model("Details",newSchema);
module.exports = collection;
