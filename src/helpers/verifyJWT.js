const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch(err) {
    res.status(400).send('[Error] - Invalid token');
  }
}

module.exports = verifyJWT;
