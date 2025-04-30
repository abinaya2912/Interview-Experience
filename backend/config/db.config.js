const mongoose = require("mongoose");

function connectdb() {
    mongoose.connect("mongodb+srv://abinayab22cse:bZkb0YspSSMW4Rns@cluster0.ruqgarx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected succesfully");
}).catch((err)=>{
    console.log("mongodb connecting error");
})
}

module.exports=connectdb;