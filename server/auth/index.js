const router = require('express').Router();
const {
  models: { User },
} = require('../db');
module.exports = router;

//login route
router.post('/login', async (req, res, next) => {
  try {
    //see if user exists
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('User not found', req.body.email)
      res.status(401).send('Wrong username or password')
      //check PW
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password', req.body.email)
      res.status(401).send('Wrong username or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next (err)
  }
})

//sign-up route
router.post('/signup', async (req, res, next) => {
  try {
    //PW must be min 1 char
    if (req.body.password.length < 1) {
      res.status(401).send('Password cannot be blank')
    } else {
      req.body.name = req.body.name || req.body.email.split('@')[0]
      const user = await User.create(req.body)
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    //user already exists
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else if (err.name === 'SequelizeValidationError') {
      res.status(401).send('Invalid email')
    } else {
      next (err)
    }
  }
})

