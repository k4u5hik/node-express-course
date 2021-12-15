const nodemailer = require('nodemailer');
const sendEmail = async (req, res) => {
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

module.exports = sendEmail