const jwt = require("jsonwebtoken");
const user  = require("../models/user");
var { ObjectId } = require('mongodb');
const verifyAdmin = async(req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return helperFunction(res, 403, "A Token Is Required For Authentication", false)
    }
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.TOKEN_KEY);
            req.user = decoded;
            var userId = ObjectId(req.user._id)
            const data = await user.aggregate([
                { $match: { _id: userId } },
                {
                    $lookup: {
                        from: "roles",
                        localField: "role",
                        foreignField: "_id",
                        as: "roles"
                    }
                   
                }, 
                {$unwind : '$roles'},
                {
                    $project: {
                     _id:0,  role:"$roles.role"
                    }
                 }
            ])
            if (data[0].role === "admin") {
                return next();
            } else {
                console.log("Sorry Access Denied")
                let helperfunction = () => {
                    let response = 403;
                    let messages = "Sorry Access Denied";
                    let status = false;
                    return res.status(403).send({ response: response, message: messages, status: status, })
                }
      
                helperfunction()
               
            }
        } catch (err) {
            console.trace('Inside Catch => ', err);
            //  return helperFunction.serverError(res, "Some Error Is Occurred")
            console.log("Error")
        }

    }

}

module.exports = verifyAdmin;