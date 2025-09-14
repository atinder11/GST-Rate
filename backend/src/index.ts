import express  from "express";

const app=express();

app.get("/",(req,res)=>{
    res.send("server is running fine");
})
const PORT=4000;

app.listen(PORT,()=>{
    console.log(`server is runnig in PORT : ${PORT}`);

})

