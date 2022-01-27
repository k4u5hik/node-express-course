const User = require('../models/User');
const Token = require('../models/Token');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { attachCookiesToResponse, createTokenUser, sendVerificationEmail} = require('../utils');
const crypto = require('crypto')

const register = async (req, res) => {
  const {email, name, password} = req.body;

  const emailAlreadyExists = await User.findOne({email});
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const verificationToken = crypto.randomBytes(40).toString('hex');

  const user = await User.create({name, email, password, role, verificationToken});

  const origin = 'http://localhost:3000';
  //const newOrigin = 'https://react-node-user-workflow-front-end.netlify.com'; // production url

  const tempOrigin = req.get('origin')
  const protocol = req.protocol;
  const host = req.get('host');
  const forwardedHost = req.headers['x-forwarded-host'];
  const forwardedProtocol = req.headers['x-forwarded-proto'];

  await sendVerificationEmail({
    name:user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  });

  //send verification token back only while testing in postman
  res.status(StatusCodes.CREATED).json({
    msg: 'Success! Please check the email to verify the account.'
  });
}

const verifyEmail = async (req,res)=>{
  const {verificationToken,email} = req.body;
  const user = await User.findOne({email});
  if(!user){
    throw new CustomError.UnauthenticatedError('Error: No user found');
  }
  if(user.verificationToken !== verificationToken){
    throw new CustomError.UnauthenticatedError('Invalid verification token');
  }
  user.isVerified = true;
  user.verified = Date.now();
  user.verificationToken = "";
  await user.save();

  res.status(StatusCodes.OK).json({
    msg: 'Email verified successfully'
  });
}

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError.BadRequestError('Please provide email and password');
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }
  if (!user.isVerified){
    throw new CustomError.UnauthenticatedError('Please verify your email!');
  }
  const tokenUser = createTokenUser(user);

  // create refresh token
  let refreshToken = '';

  // check for existing token
  const exitingToken = await Token.findOne({ user: user._id });
  if (exitingToken) {
    const {isValid} = exitingToken;
    if (!isValid) {
      throw new CustomError.UnauthenticatedError('Invalid refresh token');
    }
    refreshToken = exitingToken.refreshToken;
    attachCookiesToResponse({res, user: tokenUser, refreshToken});
    res.status(StatusCodes.OK).json({
      msg: 'Successfully logged in',
      user: tokenUser,
      refreshToken
    });
    return
}

  refreshToken = crypto.randomBytes(40).toString('hex');
  const userAgent = req.headers['user-agent'];
  const ip = req.ip
  const userToken = {refreshToken,ip,userAgent,user:user._id};

  await Token.create(userToken);

  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const logout = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.userId });

  res.cookie('accessToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.cookie('refreshToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};

const forgotPassword = async (req,res)=> {
  const {email}  = req.body
  if (!email) {
    throw new CustomError.BadRequestError('Please provide email');
  }

  const user = await User.findOne({email});
  if (user) {
    const passwordToken = crypto.randomBytes(70).toString('hex');
    // send email

    const tenMinutes = 1000 *60 * 10
    const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);
    user.passwordToken = passwordToken;
    user.passwordTokenExpirationDate = passwordTokenExpirationDate;
    await user.save();
  }

  res.status(StatusCodes.OK).json({
    msg: 'Please check your email to reset your password'
  });
}

const resetPassword = async (req,res)=> {
  res.send('reset password')
}

module.exports = {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword
};
