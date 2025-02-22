const AuthService = require("../services/AuthService");

exports.register = async (req, res) => {
  try {
    const user = await AuthService.registerUser(req.body);
    res
      .status(201)
      .json({ status: true, message: "User registered", data: {userId: user.id} });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await AuthService.loginUser(
      req.body.email,
      req.body.password
    );
    res.json({ status: true, token });
  } catch (error) {
    res.status(401).json({ status: false, message: error.message });
  }
};
