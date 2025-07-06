const admin = require('../config/firebase.admin')


const makeUserAdmin = async (req,res) => {
    const {uid} = req.body
    if(!uid) return res.status(404).json({success: false, message: "Missing user id"})
        
    try {
        await admin.auth().setCustomUserClaims(uid, { isAdmin: true });
        return res.status(200).json({success: true})
    } catch (err) {
        return res.status(500).json({success: false, message: err.message})
    }
}

module.exports = makeUserAdmin

// send user id
// access admin property and set to true