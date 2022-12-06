const sgMail = require('@sendgrid/mail');
const { v4: uuidv4 } = require('uuid');
// const config = {
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'kirill.art3m3nko@gmail.com',
//         pass: process.env.PASSWORD,
//     }
// }
const mailMaker = async (email) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const verificationToken = uuidv4();
    const msg = {
        to: email,
        from: 'kirill.art3m3nko@gmail.com',
        subject: 'Confirm e-mail address',
        text: `To confirm your e-mail address please follow this link: http://localhost:3030/api/users/verify/${verificationToken}`,
        html: `<strong>To confirm your e-mail address please follow this link:  http://localhost:3030/api/users/verify/${verificationToken}</strong>`,
    }
    await sgMail.send(msg)
    return verificationToken;
}

module.exports = {
    mailMaker
};