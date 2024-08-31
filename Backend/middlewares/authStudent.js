const db = require("../databaseSchema/student");
const { JWT_SECRET_STUDENT } = require("../jwtcheck");
const jwt = require("jsonwebtoken");

const authStudent = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(403).json({ message: "Forbidden: No token provided" });
    }

    token = token.split(" ")[1];

    try {
        const ifUserCorrect = jwt.verify(token, JWT_SECRET_STUDENT);
        
        if (!ifUserCorrect) {
            return res.status(403).json({ message: "Forbidden: Invalid token" });
        }

        console.log(ifUserCorrect);
        req.id = ifUserCorrect.id;  // Assuming the token contains a userId
        console.log("Middleware passed");
        next();
    } catch (err) {
        res.status(403).json({ message: "Forbidden: Token verification failed" });
    }
};

module.exports = {
    authStudent
};
