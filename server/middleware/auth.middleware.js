const admin = require("../config/firebase.admin");

const authMiddleware = async (req, res, next) => {
   const authHeader = req.headers.authorization;
   console.log(authHeader)

  // if (!authHeader || !authHeader.startsWith("Bearer ")) {
  //   return res.status(401).json({ success: false, message: "Unauthorized" });
  // }

  // const idToken = authHeader.split(" ")[1];

  // try {
  //   const decodedToken = await admin.auth().verifyIdToken(idToken);
  //   req.user = decodedToken; // attach user info to the request
  //   next();
  // } catch (err) {
  //   return res.status(403).json({ success: false, message: "Invalid token" });
  // }
};

module.exports = authMiddleware;
