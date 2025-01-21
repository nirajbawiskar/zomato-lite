const asyncHandler = require("express-async-handler")
const { resturantUpload, menuUpload, updateMenuUpload } = require("../utils/upload")
const validator = require("validator")
const path = require("path")
const { checkEmpty } = require("../utils/checkEmpty")
const cloud = require("../utils/cloudinary")
const Resturant = require("../models/Resturant")
const Menu = require("../models/Menu")
const Order = require("../models/Order")



exports.updateInfo = asyncHandler(async (req, res) => {
    resturantUpload(req, res, async (err) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "multer error" })
        }
        //cloudinary
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "hero image is require" })
        }
        const { mobile, address, city, type, startTime, endTime } = req.body //
        const { isError, error } = checkEmpty({ mobile, address, city, type, startTime, endTime }) //
        if (isError) {
            return res.status(400).json({ message: "all fileds required", error })
        }
        const image = {}
        for (const key in req.files) {
            const { secure_url, } = await cloud.uploader.upload(req.files[key][0].path)
            image[key] = secure_url
        }

        //image

        // console.log(req.user)
        // console.log(req.body)//json   
        // console.log(req.files)//files array 

        await Resturant.findByIdAndUpdate(req.user, { ...req.body, ...image, infoComplete: true })
        res.json({ message: "info success" })
    })
})
exports.addMenu = asyncHandler(async (req, res) => {
    menuUpload(req, res, async (err) => {
        console.log(req.body);
        console.log(req.files);
        //upload to cloudnary
        // if (typeof req.body.type !== "object") {
        if (!Array.isArray(req.body.type)) {
            const images = []
            for (const item of req.files) {
                const { secure_url } = await cloud.uploader.upload(item.path)
                images.push(secure_url)
            }
            await Menu.create({ ...req.body, resturant: req.user, image: images[0] })
            res.json({ message: "menu add success" })
        } else {
            const images = []
            for (const item of req.files) {
                const { secure_url } = await cloud.uploader.upload(item.path)
                images.push(secure_url)
            }

            const result = []
            const temp = {}
            for (let i = 0; i < req.body.type.length; i++) {
                for (const key in req.body) {
                    temp[key] = req.body[key][i]
                }
                result.push({ ...temp, image: images[i], resturant: req.user })
            }
            await Menu.create(result)
            res.json({ message: "menu add success" })
        }
    })
})
exports.getMenu = asyncHandler(async (req, res) => {
    const result = await Menu.find({ resturant: req.user })
    res.json({ message: "menu fetch success", result })
})
exports.deleteMenu = asyncHandler(async (req, res) => {
    //delete image from cloudinary
    const result = await Menu.findById(req.params.mid)
    //delete old image
    await cloud.uploader.destroy(path.basename(result.image, path.extname(result.image)))//cludinary vr pn delete karych asle

    // step 2 database
    await Menu.findByIdAndDelete(req.params.mid)
    res.json({ message: "menu delete success" })
})
exports.updateMenu = asyncHandler(async (req, res) => {
    updateMenuUpload(req, res, async (err) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "multer error" })

        }
        console.log(req.file);

        if (req.file) {
            const result = await Menu.findById(req.params.mid)

            //delete old image
            await cloud.uploader.destroy(path.basename(result.image, path.extname(result.image)))
            //upload new image
            const { secure_url } = await cloud.uploader.upload(req.file.path)
            //update database
            await Menu.findByIdAndUpdate(req.params.mid, { ...req.body, image: secure_url })
            res.json({ message: "menu update success" })
        } else {
            await Menu.findByIdAndUpdate(req.params.mid, { ...req.body })
            res.json({ message: "menu update success" })
        }
    })
})
exports.getResturantOrders = asyncHandler(async (req, res) => {
    const result = await Order
    .find({ resturant: req.user })
    .select("-resturant -createdAt -updatedAt -__V")
    .populate("customer","name address")
    .populate("items.dish","name type image price")
    .sort({createdAt: -1})
    res.json({ message:"order get success",result })
})
exports.updateResturantStatus = asyncHandler(async (req, res) => {
     await Order.findByIdAndUpdate(req.params.oid, {status:req.body.status})
    res.json({ message:"order status change success" })
})
//menu CRUD
//aaray ch datatype object asto
//string ch dadatype string asto
/*
 
*/