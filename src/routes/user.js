const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/User');

const verify = require('../helpers/verifyJwt');
const { registerValidation, loginValidation } = require('../validations');

// Register new user
router.post('/register', async (req, res) => {
  // Validate
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if email exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send({ error: 'Email already exists' });

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create new Mongoose object instance
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch(err) {
    res.status(400).send(err);
  }
});

// Login with user credentials
router.post('/login', async (req, res) => {
  // Validate
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email is not found');

  // Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  const response = {
    token: token,
    user: await User.findOne({ email: req.body.email }).select('-password -date -__v'),
  };

  res.send(response);
});

// Get specific user data
router.get('/', async (req, res) => {
  if (!req.query.token) res.status(400).send({ error: 'No token provided' });

  const id = jwt.decode(req.query.token)._id;
  const user = await User.findById(id).select('-password -date -__v');

  res.send(user);
});

// Get list of users (protected by verify)
router.get('/list', verify, async (req, res) => {
  const users = await User.find().select('-password -date -__v');

  res.send(users);
});

module.exports = router;
