const jwt = require("jsonwebtoken");
const { Users } = require("../models/users");
var { ObjectId } = require('mongodb');
const { helperFunction } = require("../utils/helperFunction");
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
            console.log(userId)
            // const data = await Users.aggregate([
            //     { $match: { _id: userId } },
            //     // { $project: { "_id": 1, "role": 1 } },
            //     {
            //         $lookup: {
            //             from: "roles",
            //             localField: "role",
            //             foreignField: "_id",
            //             as: "roles"
            //         }
                   
            //     }, 
            //     {$unwind : '$roles'},
            //     {
            //         $project: {
            //          _id:0,  role:"$roles.role"
            //         }
            //      }
            // ])
            // if (data[0].role === "admin") {
            //     return next();
            // } else {
            //     // return helperFunction(res, 403, "Sorry Access Denied", false)
            //     console.log("Sorry Access Denied")
            // }
        } catch (err) {
            console.trace('Inside Catch => ', error);
            //  return helperFunction.serverError(res, "Some Error Is Occurred")
            console.log("Error")
        }

    }

}

module.exports = verifyAdmin;