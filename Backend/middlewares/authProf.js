const db = require("../databaseSchema/professor");
const {JWT_SECRET_PROFS} = require("../jwtcheck");
const jwt = require("jsonwebtoken");


const authProf = (req,res,next)=>{
    let token = req.headers.authorization;
    if(!token || !token.startsWith("Bearer ")) {
        return res.status(403)
    }
    token = token.split(" ").at(1);
    try
        {const ifUserCorrect = jwt.verify(token,JWT_SECRET_PROFS);

        if(!ifUserCorrect) {
            return res.status(403);
        }
        console.log(ifUserCorrect);
        req.id = ifUserCorrect.id;
        console.log("middleware passed");
        next();
    } catch(err){
        res.status(403);
    }
    
}

module.exports = {
    authProf
};