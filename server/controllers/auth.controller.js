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

const createCustomToken = async (req, res) => {
  const { email, password } = req.body;

   if (!email || !password) {
    return res.status(400).json({ success: false, message: "Missing credentials" });
  }

  try {
    const {uid} = await admin.auth().getUserByEmail(email);

    const token = await admin.auth().createCustomToken(uid, { isAdmin: false });

    res.status(200).json({
      success: true,
      message: "Custom token successfully created",
      token,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//build the isAdmin middleware

const isAuthenticated = async (req, res) => {
  // verify token 
  // const {uid} = req.body
  try {
    // const data = await admin.auth().getUser(uid)
    res.json({success: true})
  } catch (err) {
    res.json({success: false, message: err.message})
  }
}

const getUsers = async (req, res) => {
  try {
    const data = await admin.auth().listUsers(100)
    res.json({success: true, users: data.users})
  } catch (err) {
    res.json({success: false, message: err.message})
  }
}

module.exports = {register, isAuthenticated, createCustomToken, getUsers};
