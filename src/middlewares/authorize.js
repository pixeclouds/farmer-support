const { verifyToken } = require("../utils/token")
const { getUser } = require("../modules/farmer/repository")

//check if user is signed in
exports.userAuthorized = async (req, res, next) => {
    let Authorization = req.get("Authorization")
    let token = Authorization.split(" ")[1]
    try {
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

//check is user is an admin
exports.adminAuthorized = async (req, res, next) => {
    let { authorization } = req.headers
    let token = authorization.split(" ")[1]
    try {
        if(!token){
            throw Error
        }
        let user = await verifyToken(token)
        user = await getUser(user._id)

        if (user.userType != "Admin"){
            throw Error
        }
        // req.user = { _id: user._id}
        next()
    } catch (err) {
        res.status(401).send("Access denied.")
    }
}
