const sendEmail = require('./sendEmail');

const sendVerificationEmail = async ({name, email, verificationToken, origin}) =>{

    const message = `
            
            <p>
                Please verify your email by clicking on the link below:
            </p>
            <a href="${origin}/verify-email?token=${verificationToken}">
                Verify email
            </a>
        `

    return sendEmail({
        to: email,
        subject: 'Verify your email',
        html: `<h1>Hi ${name}</h1>
              ${message}`
    })
};

module.exports = sendVerificationEmail;