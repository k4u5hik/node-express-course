const getAllUsers = async (req, res) => {
  res.send('get all users');
};
const getSingleUser = (req, res) => {
  res.send(req.params);
};

const showCurrentUser = (req, res) => {
  res.send('show current user');
};

const updateUser = (req, res) => {
  res.send(req.body);
};

const updateUserPassword = (req, res) => {
  res.send(req.body);
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};