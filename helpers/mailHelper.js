const sgMail = require('@sendgrid/mail');
const { v4: uuidv4 } = require('uuid');
// const config = {
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.MASTER_EMAIL,,
//         pass: process.env.PASSWORD,
//     }
// }
const mailMaker = async (email) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const verificationToken = uuidv4();
    const msg = {
        to: email,
        from: process.env.MASTER_EMAIL,
        subject: 'Confirm e-mail address',
        text: `To confirm your e-mail address please follow this link: ${process.env.CONFIRM_PATH}${verificationToken}`,
        html: `<strong>To confirm your e-mail address please follow this link:  <a href="${process.env.CONFIRM_PATH}${verificationToken}">Confirm</a></strong>`,
    }
    await sgMail.send(msg)
    return verificationToken;
}

module.exports = {
    mailMaker
};