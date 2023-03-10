const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {

  // check if user already exists
  // hash password
  // save user to db
  // token generation

  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userModel.create({
      email: email,
      password: hashedPassword
    });

    const token = jwt.sign({
      email: result.email, id: result._id
    }, process.env.SECRET_KEY);

    res.status(201).json({ user: result, token: token });



  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const token = jwt.sign({
      email: existingUser.email, id: existingUser._id
    }, process.env.SECRET_KEY);

    res.status(200).json({ user: existingUser, token: token });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};




module.exports = { signUp, login };