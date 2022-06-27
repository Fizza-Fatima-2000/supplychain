const jwt = require("jsonwebtoken");
const { users } = require("../models/user");
const config = process.env;
var { ObjectId } = require('mongodb')
const verifyAdmin = async(req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    if (token) {
        try {
            const decoded = jwt.verify(token, config.TOKEN_KEY);
            req.user = decoded;
            var objall = ObjectId(req.user._id)
            console.log(objall)
            const verify1 = await users.aggregate([
                { $match: { _id: objall } },
                { $project: { "_id": 1, "role": 1 } },
                {
                    $lookup: {
                        from: "roles",
                        localField: "role",
                        foreignField: "_id",
                        as: "verify"
                    }
                }, { $project: { verify: 1, _id: 0 } }
            ])
            console.log(verify1)
            if (verify1[0].verify[0].role === "admin") {
                return next();
            } else {
                return res.send("only admin can do this")
            }
        } catch (err) {
            console.log(err)
            return res.send({ response: res.statusCode, message: "some error is occured", status: false, Data: null })
        }

    }

}

module.exports = verifyAdmin;