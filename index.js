const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
app.use(cors());
app.listen(4000);
app.use(express.json())
app.post('/mail', (req, res)=>{
    let config = nodemailer.createTransport({
        host: 'techcodes.in',
        port: 465,
        auth:{
            user: req.body.frommail,
            pass: "Sabari@2002"
        }
    });
    let message = {
        from: req.body.frommail,
        to: req.body.tomail,
        subject: req.body.subject,
        text: req.body.contents,
    };
    config.sendMail(message, function (err,info){
        if(err){
            res.send("there is an error while sending mail.")
            console.log(err)
        }else{
            res.send("mail sent successfully.")
            console.log(info)
        }
    })
});