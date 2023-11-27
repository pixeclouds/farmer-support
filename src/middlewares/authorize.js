const { verifyToken } = require("../utils/token")
const { getUser } = require("../modules/farmer/repository")

// authorization middleware - check if user is signed in
exports.userAuthorized = async (req, res, next) => {

    try {
        let Authorization = req.get("Authorization")
        let token = Authorization.split(" ")[1]
        if(!token){
            throw Error
        }
        let user = await verifyToken(token)
        req.user = user._id
        req.email = user.email
        next()
    } catch (err) {
        console.log(err.message)
        res.status(401).send("Access denied. Login instead")
    }
}


