const User  = require('../models').User;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthService {
  async registerUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return await User.create({
      ...userData,
      password: hashedPassword
    });
  }

  async loginUser(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User not found');
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Invalid password');
    
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  }
}

module.exports = new AuthService();