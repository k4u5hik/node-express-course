const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')

//Testing, kept for future reference
const sendEmailEthereal = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'krhkuf6mj4wz6ocn@ethereal.email',
            pass: 'dY1RPu62mjhQ7EAGe7'
        }
    });

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <attherate@gmail.com>',
        to: '"Fred FooFoo 👻" <attherate@gmail.com>',
        subject: 'Hello ✔',
        html: '<b>Hello world? Sending email with Node.js</b>'})

    res.json(info)
}

const sendEmail = async(req,res)=> {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'k4u5hik@icloud.com', // Change to your recipient
        from: 'attherate@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    const info = await sgMail.send(msg)
    res.json(info)
}

module.exports = sendEmail