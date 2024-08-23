// import { validationError } from '../error/validationError.js';
// import User from '../models/user.model.js';

export const register = async (req, res) => {
  res.send('hello world');
  //   const { fullName, email, phoneNumber, passWord } = req.body;

  //   try {
  //     const errors = [];

  //     if (!fullName) errors.push({ fullName: 'name is valid!' });
  //     if (!email) errors.push({ email: 'email is valid!' });
  //     if (!phoneNumber) errors.push({ phoneNumber: 'phoneNumber is valid!' });
  //     if (!passWord) errors.push({ passWord: 'email is valid!' });

  //     if (errors.length) throw new validationError(errors);

  //     const newUser = await User.create(user);
  //     return res.status(200).json({
  //       message: 'User register successfully!',
  //       user: newUser,
  //     });
  //   } catch (err) {
  //     res.json({
  //       message: 'SERVER ERROR',
  //       error: err,
  //     });
  //   }
};
