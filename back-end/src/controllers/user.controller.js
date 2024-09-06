import db from '../models/index';
import { hashPassword } from '../helpers/hashPassword';

export const register = async (req, res) => {
  try {
    const password = await hashPassword(req.body.password);
    const newUser = await db.User.create({
      email: req.body.email,
      password: password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      gender: req.body.gender === 1 ? true : false,
      roleId: req.body.roleId,
    });
    return res.status(200).json({
      data: newUser,
      message: 'create user success',
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const login = async (req, res) => {
  res.send('hello world');
};
