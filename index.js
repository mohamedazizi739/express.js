const express=require('express')
const path=require('path')
const app=express()
const PORT=process.env.PORT ||5000;
app.use((req,res,next)=>{
 let d=new Date()
 const date=d.getDay()<7
 const hours=9<=d.getHours() && d.getHours()<=17;
 if(date && hours){
  next()
 }else{
  console.log("application is not availeble")}
 
})

app.use(express.static(path.join(__dirname,'public')))
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))

