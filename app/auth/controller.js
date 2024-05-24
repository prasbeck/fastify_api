const userService = require('./service');
const jwt = require('jsonwebtoken');

module.exports = {
  register: async (req, res) => {
    try {
      // check for email and username existance

      const { email, username } = req.body;

      if (await userService.isUserNameExists(username) || await userService.isEmailExists(email)) {
        res.code(400);
        return {
          message: "username or email exists",
        };
      }

      const user = await userService.create(req.body);

      res.code(201);
      return {
        message: "user registration successful",
        data : {user},
      }
      
    } catch (err) {
      res.code(500);
      return {
        err
      }
    }
  },
  login: async(req, res) => {
    try {

      const user = await userService.findByUsername(req.body.username);
      if (!(user)) {
        res.code(400);
        return {
          message: 'username is incorrect',
        };
      }

      if (!await userService.comparePassword(req.body.password,user.password )) {
        res.code(400);
        return {
          message:'incorrect login details',
        }
      }

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
      res.code(200);
      return {
        message: 'user login successfully',
        data: {
          user,
          token,
        }
      }
      
    } catch (err) {
      res.code(500);
      return {
        err,
      }
    }
  }
}