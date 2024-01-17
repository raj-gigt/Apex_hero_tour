const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {Cards}=require("./dbSchema.js")
app.use(express.json())
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.get('/getData', async (req,res)=>{
    const CardsData=await Cards.find({})
    res.status(200).json({allHeroes:CardsData})
})
app.post('/create', async (req,res)=>{
    const id=parseInt(req.body.id)
    const Heroname=req.body.Heroname
    const Description=req.body.Description
    const src=req.body.src
    const Hp=req.body.Hp
    await Cards.create({id:id,
                  Heroname:Heroname,
                  Description:Description,
                  Hp:Hp,
                  src:src})
    res.status(200).send("hero created")
})
app.put('/update', async (req,res)=>{
    const id=parseInt(req.body.id);
    const Hp=req.body.Hp;const Heroname=req.body.Heroname;const Description=req.body.Description
    await Cards.findOneAndUpdate({id:id},{$set: {Hp:Hp,Heroname:Heroname,Description:Description}})
    res.status(200).send("hero updated")
})
app.post('/delete', async (req,res)=>{
   await Cards.findOneAndDelete({id:parseInt(req.body.id)})
    res.status(200).send("deleted")
       })
    


app.listen(5500,()=>{
    console.log("server is running on port 5500");
})