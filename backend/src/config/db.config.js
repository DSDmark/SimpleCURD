import mongoose from "mongoose"

const URL = "mongodb+srv://dsmark1:4QDLmzsdJZQnCulW@cluster0.b0nodoi.mongodb.net/curdtest?retryWrites=true&w=majority"
  
mongoose.set('strictQuery', false);

mongoose.connect(URL, {
  useNewUrlParser:true,
  useUnifiedTopology:true
 },(err)=>{
 if(err)throw err;
  console.log("mongodb connected.")
});
