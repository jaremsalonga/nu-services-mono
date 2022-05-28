const jwt = require('jsonwebtoken');

const config = process.env;

//verify
const verifyJWT = (req, res, next) => {
    const token = req.headers["authorization"]

    if (!token) {
        res.send("User not logged in!");
    } else {

        let jwtToken = verifyBearer(token)

        jwt.verify(jwtToken, config.JWT_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "you failed to auth" });
            } else {

                req.params = {
                    user : decoded,
                    ...req.body
                }
                next();
            }
        })
    }
}

const verifyBearer = (token) => {
    if(typeof token != 'undefined'){
        //split at the space
        const bearer = token.split(' ');
        //Get the token from array
        return bearer[1];
    }
}

const generateJwt = (data, config) => {
    return jwt.sign(data, process.env.JWT_TOKEN_SECRET, config);
};

const verifyAndDecodeJWT = (req, res) => {

    const token = verifyBearer(req.headers["authorization"]);

    jwt.verify(token, config.JWT_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            res.json({ auth: false, message: err});
        } else {
            res.json(decoded);
        }
    })
}

module.exports = {
    verifyJWT,
    generateJwt,
    verifyBearer,
    verifyAndDecodeJWT
}