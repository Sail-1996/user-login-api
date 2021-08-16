const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://admin-sailendra:Test123@cluster0.vbmij.mongodb.net/user_api?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("No connection");
}) 