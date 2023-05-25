const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"bidyutofficial01@.com",
        pass:"xxxxx"
    }
})

const htmlText = `
    <p>Bidyut Talukdar<p>
`

const mailOption = {
    from : 'bidyutofficial01@gmail.com',
    to: 'bidyut@.com',
    subject:'Testing',
    text:'Testing mail body' //htmlText
}

//incase mail need to send to multiple user
// var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// }

transporter.sendMail(mailOption,function(error,info){
    if(error){
        console.log(error+" msg");
    }else{
        console.log("Mail Send ",info)
    }

})