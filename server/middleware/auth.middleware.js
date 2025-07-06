const admin = require("../config/firebase.admin");

const authMiddleware = async (req, res, next) => {
   const idToken = req.headers.authorization?.split("Bearer ")[1];
  //  console.log(idToken)
   if(!idToken) return res.status(401).json({ success: false, message: "Unauthorized" });
    try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }

 
};

module.exports = authMiddleware;
