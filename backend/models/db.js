const mongoose = require('mongoose');
const mongo_url = "mongodb+srv://mehak_sharma:1234@cluster0.q9a3j.mongodb.net/auth-db?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongo_url).then(()=>{
    console.log("MongoDB successfully connected...");  
}).catch((err)=>{
    console.log("MongoDB connection error",err); 
})
