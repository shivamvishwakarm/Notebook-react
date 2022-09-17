var jwt = require('jsonwebtoken');
const JWT_SECRET = "THISISJWTSECRET"

const fetchuser = (req,res,next)=>{
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');

    // Checking the token exist or not
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"});

    }
    try {
        // Verify the token with jwt_secret
        const data  =  jwt.verify(token,JWT_SECRET)
        req.user = data.user;
        next();  // Calling the next function 
    } 

    // If any error catch the error and send bad request 
    catch (error) {
        res.status(401).send({error:"Please authenticate using a valid token"});

    }
    
}

// exporting the fetchuser function
module.exports = fetchuser;