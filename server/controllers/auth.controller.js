const admin = require("../config/firebase.admin");

const register = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.json({ success: false, message: "Invalid details" });

  try {
    


    res.json({success: true, message: "login successful"});
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

module.exports = register;
