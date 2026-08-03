const express = require("express")
const jwt = require("jsonwebtoken")
const z = require("zod")
const {userModel} = require("../db")
const {JWT_KEY} = require("../config")
const {authMiddleware} = require("../middleware.js")

const router = express.Router();

const SignupSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    firstName: z.string(),
    lastName: z.string()
})

router.post("/signup", async (req, res) => {

    const result= SignupSchema.safeParse(req.body);
    if (!result.success) {
        res.status(403).send(result.error);
        return
    }

    username = result.data.username;
    password = result.data.password;
    firstName = result.data.firstName;
    lastName = result.data.lastName;

    const userExists = await userModel.findOne({
        username: username
    })

    

    if (userExists) {
        res.status(411).json({
            message: "User With this username already exists!"
        })
        return
    }
    
    const newUser = await userModel.create({
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
    })

    console.log("Created user:", newUser);
    res.json({
        id: newUser._id,
        message: "success"
    })
})


router.post("/signin", async(req, res) => {
    username = req.body.username
    password = req.body.password

    const userExists = await userModel.findOne({
        username: username,
        password: password
    })

    if (!userExists) {
        res.status(403).json({
            message: "incorrect credentials"
        })
    }

    const token = jwt.sign({username: username}, JWT_KEY);

    res.json({
        token
    })
})

router.put("/",authMiddleware , async (req, res) => {
    username = req.username;
    
    const updatedUser = await userModel.findOneAndUpdate(
        { username: username },
        req.body,           
        { new: true }       
      )
    
    res.status(201).json({
        
            message: "User updated successfully",
            user: updatedUser
          

    })
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter;

    if (!filter) {
        res.json({
            users: []
        })
        return
    }

    const users = await userModel.find({
        username: {
            $regex: filter,
            $options: "i"
        }
    }).select("-password -__v");

    res.json({
        users
    })

})

module.exports = router;
