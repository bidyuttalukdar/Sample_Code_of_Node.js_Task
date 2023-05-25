const nodemailer = require("nodemailer");
const SendEmail = async(req,res) =>{
    res.send("emailSend")
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'murray.kuhlman@ethereal.email',
            pass: 'YxvPfW6xXeQ9AJU9rA'
        },
    });
    
    let info = await transporter.sendMail({
        from: '"Bidyut" <bidyutofficial01@gmail.com>', // sender address
        to: "bidyuttalukdar01@gmail.com", // list of receivers
        subject: "Ane aku nai", // Subject line
        text: "Ane aku nai", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = SendEmail;