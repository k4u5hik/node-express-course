const createTokenUser = (user) => {
  return  {
    name: user.name,
    userId: user._id,
    email: user.email,
    role: user.role,
    image: user.image,
  }};

  module.exports = createTokenUser;
