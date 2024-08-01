const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
//const { Image } = require('../models/image');
const {signupValidation, loginValidation} = require('../middleware/AuthValidation') 
//const multer = require('multer');
//const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
//const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
//const sharp = require('sharp');

// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })

// const bucketName = process.env.AWS_BUCKET_NAME;
// const bucketRegion = process.env.AWS_BUCKET_REGION;
// const accessKey = process.env.AWS_ACCESS_KEY;
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

// const s3 = new S3Client({
//     credentials: {
//         accessKeyId: accessKey,
//         secretAccessKey: secretAccessKey
//     },
//     region: bucketRegion
// })

router.post('/signup', signupValidation, upload.single('image'), async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email.toLowerCase() });
        if (user) {
            return res.status(409).json({ message: 'User already exists', success: false });
        }
        let iName='no image';
        // if (req.file) {
        //     const buffer = await sharp(req.file.buffer).resize({ height: 1080, width: 1920, fit: 'contain' }).toBuffer();
        //     iName = `${Date.now()}_${req.file.originalname}`;
        //     const params = {
        //         Bucket: bucketName,
        //         Key: iName,
        //         Body: buffer,
        //         Content: req.file.mimetype
        //     }
        //     const command = new PutObjectCommand(params);
        //     await s3.send(command);
        // }
        const userModel = await new User({
            name: req.body.name,
            email: req.body.email.toLowerCase(),
            password: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
            image: {
                imageName: iName
            }
        });
        await userModel.save();
        return res.status(201).json({ message: 'Signup Successful!', success: true })
    } catch (err) {
        res.status(500).json({ Success: false, message: err })
    }

});

router.post('/login', loginValidation, async (req, res) => {
    const user = await User.findOne({ email: req.body.email.toLowerCase() });
    if (!user) {
        return res.status(403).json({ success: false, message: 'User not found' });
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({
            userId: user._id,
            email : user.email,
            name : user.name
        }, process.env.SECRET, { expiresIn: '1d' }
        );
        res.status(200).json({ success: true, message: "Login Successful!", token, name: user.name, email: user.email })
    } else {
        res.status(400).json({ success: false, message: 'Incorrect password' })
    }
});

module.exports = router;