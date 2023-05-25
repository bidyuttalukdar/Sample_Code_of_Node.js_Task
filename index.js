const express = require("express")
// const body_parser =require("body-parser")
//creating the app
const app = express();
// app.use(body_parser);
const SendEmail = require('./controller/sendMail')
const PORT =3000;

//routes
app.get("/", (req, res) => {
    res.send("Index Page")   
})
app.get("/sendEmail",SendEmail)
const startServer = async() =>{
    try{
        app.listen(PORT,(req,res)=>{
            console.log("server is running")
        })
    }catch(e){
        console.error(e);
    }
}
startServer();