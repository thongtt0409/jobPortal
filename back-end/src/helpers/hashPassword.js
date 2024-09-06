const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const hashPassword = async (password) => {
  return await bcrypt.hashSync(password, salt);
};

module.exports = { hashPassword };
