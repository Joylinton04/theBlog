const admin = require("../config/firebase.admin");

const authMiddleware = async (req, res, next) => {
   const idToken = req.headers.authorization?.split("Bearer ")[1];
   if(!idToken) return res.status(401).json({ success: false, message: "Unauthorized" });

    try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }

  // if (!authHeader || !authHeader.startsWith("Bearer ")) {
  //   return res.status(401).json({ success: false, message: "Unauthorized" });
  // }

  // const idToken = authHeader.split(" ")[1];

 
};

module.exports = authMiddleware;
