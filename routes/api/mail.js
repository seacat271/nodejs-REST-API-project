const sgMail = require('@sendgrid/mail');
const express = require('express')
const router = express.Router();

// const config = {
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.MASTER_EMAIL,,
//         pass: process.env.PASSWORD,
//     }
// }

    router.get('/api/mail', (req, res, next) => {
        res.render("index")
    }) 

    router.post('/send-sendgrid', (req, res, next) => {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
          to: req.body.email,
          from: process.env.MASTER_EMAIL,
          subject: 'test test',
          text: req.body.text,
        //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sgMail
        .send(msg)
        .then(() => {
            console.log("E-mail send")
        }, error => {
          console.log(error);
      
          if (error.response) {
            console.error(error.response.body)
          }
        }).finally(()=> {
            res.redirect('/api/mail')
        });
    })

module.exports = router;