const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; //Change in future 

const verifyToken = (req, res, next) => {
  // Get the token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Split "Bearer TOKEN" and take the TOKEN part

  if (!token) {
    return res.status(403).json({ error: 'A token is required for authentication' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({ error: 'Invalid Token' });
  }

  return next(); // Proceed to the next middleware/route handler
};

module.exports = verifyToken; 
