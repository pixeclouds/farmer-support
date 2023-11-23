const Repository = require("./repository.js")
const { generateToken, } = require("../../utils/token.js")
const { validateInput } = require("../../utils/validator.js")
const { userValidatorSchema, profileValidatorSchema } = require("./schema.js")
const { hashPassword, comparePasswords } = require("../../utils/hasher.js")

exports.login = async (req, res ) => {

    try {
        let { email, password } = req.body      

        //validate inputs
        let isValid = await validateInput(userValidatorSchema, { email, password})
        if (!isValid){
            throw Error
        }
        user = await Repository.getUser(email)
        let password2 = user.password

        //check for duplicate
        if(!user || !(await comparePasswords(password, password2))){
            throw new Error("Invalid username or password")
        }

        //filter result
        user = {
            _id: user._id,
            email: user.email
        }

        //generate token
        let token = await generateToken(user)

        res.status(200).json({
            token
        })
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
    }
}

exports.signup = async (req, res) => {

    try {
        let { email, password } = req.body

        //validate input
        let isValid = await validateInput(userValidatorSchema, { email, password})
        if (!isValid){
            throw Error
        }

        //check for duplicates
        let user = await Repository.checkIfUserExists(email)
        if (user){
            throw Error('User already exists')
        }

        //hash password
        password = await hashPassword(password)
        //create new user
        user = await Repository.createNewUser(email, password)

        //generate token
        let token = await generateToken(user)

        res.status(200).json({ 
            token
        })
        
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
    }
}

exports.profile = async (req, res) => {
    try {
        let { fullName, farmName, location } = req.body
        let userId = req.user

        //validate input
        let isValid = await validateInput(profileValidatorSchema, {fullName, farmName, location})
        if (!isValid){
            throw Error
        }
        await Repository.updateProfile(userId, fullName, farmName, location)

        res.status(200).json({"message": "update successful"})
    } catch (err) {
        res.status(400).json({
            "Error": err.message
        })
    }
}