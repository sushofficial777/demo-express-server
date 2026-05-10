const express = require("express")

const app = express();


app.get('/',(req,res)=>{
     res.send({message:"good, i am running v5"})
})

app.listen(3000,()=>{
    console.log("runing on the 3000 port");
})