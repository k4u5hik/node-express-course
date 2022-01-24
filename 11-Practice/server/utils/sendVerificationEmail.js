const sendEmail = require('./sendEmail');

const sendVerificationEmail = async ({
                                         name,
                                         email,
                                         verificationToken,
                                         origin
}) =>{
    // construct the url for verification
    const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;
    // construct the email body
    const message = ` 
            <p>
                Please verify your email by clicking on the link below:
                <a href=${verifyEmail}> Verify email </a>
            </p>
`

    return sendEmail({
        to: email,
        subject: 'Verify your email',
        html: `<h4>Hi ${name}</h4>
              ${message}`
    })
};

module.exports = sendVerificationEmail;