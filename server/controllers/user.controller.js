import { errorHandler } from "../utils/error.js"
import bycryptjs from 'bcryptjs'
import User from '../models/user.model.js'

export const test = (req,res)=>{
    res.json({
        message: "HI",
    })
}

export const updateUser = async(req,res,next)=>{
    if(req.user.id!== req.params.id) return next(errorHandler(401, 'You can only update ypur account!'))
    try {
        //hashing password
        if(req.body.password){
            req.body.password = bycryptjs.hashSync(req.body.password, 10)
        }

        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            }
        }, {new: true})

        const {password, ...rest_info} = updateUser._doc

        res.status(200).json(rest_info)
    } catch (error) {
        next(error)
    }
}