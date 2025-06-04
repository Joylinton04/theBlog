const admin = require("../config/firebase.admin");

const register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.json({ success: false, message: "Invalid details" });

  try {

    const data = await admin.auth().createUser({email, password})

    // store id token in cookie

    res.json({
      success: true, 
      message: "login successful",
      session: data
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

const isAuthenticated = async (req, res) => {
  // verify token 
  const {uid} = req.body
  try {
    const data = await admin.auth().getUser(uid)
    res.json({success: true, data: data})
  } catch (err) {
    res.json({success: false, message: err.message})
  }
}

module.exports = {register, isAuthenticated};
