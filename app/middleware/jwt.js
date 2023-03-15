require("dotenv").config()
const jwt = require("jsonwebtoken")
const { UnauthorizedRequest } = require("../error")

class JwtToken {
    constructor(username) {
        this.username = username
    }

    createPayload() {
        return {
            username: this.username,
        }
    }

    generateToken() {
        const token = jwt.sign(JSON.stringify(this), process.env.JWT_SECRET.toString())
        return token
    }

    static authenticateCookie(req, res, next) {
        let cookie = req.cookies

        if (!cookie) {
            throw new UnauthorizedRequest("Session cookie not found. Please login")
        }

        try {
            let decode = jwt.verify(cookie['authorization'], process.env.JWT_SECRET)
            next()
        } catch (error) {
            throw UnauthorizedRequest("Session expired. Please login again")
        }
    }

}

module.exports = JwtToken