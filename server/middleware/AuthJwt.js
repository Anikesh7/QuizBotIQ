const jwt = require('jsonwebtoken')

const ensureAuthenticated = (req,res,next)=>{
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(401).json({success: false, message:'Unauthorized, JWT token is required'});
    }
    try{
        const decoded = jwt.verify(auth, process.env.SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({success: false, message: 'Unauthorized JWT token wrong or expired'});
    }
}

module.exports = ensureAuthenticated;