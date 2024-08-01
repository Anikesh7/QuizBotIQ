const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
//const { Image } = require('../models/image');
const {signupValidation, loginValidation} = require('../middleware/AuthValidation') 
//const multer = require('multer');
//const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
//const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
//const sharp = require('sharp');
const ensureAuthenticated = require('../middleware/AuthJwt');

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

// router.get('/', async (req, res) => {
//     const userList = await User.find().select('-password');

//     if (!userList) {
//         res.status(500).json({ success: false });
//     } else {
//         res.status(200).send(userList);
//     }
// });

router.get('/profile',ensureAuthenticated, async(req,res)=> {
    try{
        const user = await User.findOne({email : req.query.email}).select('-password');
        return res.status(200).json(user);
    }catch(err){
        
    }
    
});

router.put('/updateScore', ensureAuthenticated, async(req,res)=>{
    try {
        let user = await User.findOne({email : req.query.email});
        let scoresArray = [];
        if(user.scores.length != 0){
            scoresArray = user.scores;
        }
        scoresArray.push(req.body);
        user  = await User.findOneAndUpdate({email : req.query.email}, {scores: scoresArray});
        res.status(201).json({success: true, message: 'Score Added'});
    } catch (err) {
        res.status(500).json({success: false, message: err})
    }
})

// router.get('/:id', async (req, res) => {
//     const user = await User.findById(req.params.id).select('-password');

//     if (!user) {
//         res.status(404).json({ success: true });;
//     } else {
//         const getObjectParams = {
//             Bucket: bucketName,
//             Key: user.image.imageName
//         }
//         const command = new GetObjectCommand(getObjectParams);
//         const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
//         user.image.imageUrl = url;
//         res.status(200).send(user);
//     }
// })

// router.delete('/:id', async (req, res) => {
//     const user = await User.findByIdAndRemove(req.params.id);
//     if (!user) {
//         return res.status(404).json({ success: false, message: 'User not found' });
//     }
//     res.status(200).json({ success: true, message: 'User deleted' })
// });

// router.put('/:id', async (req, res) => {
//     const userExist = await User.findById(req.params.id);
//     if (!userExist) return res.status(404).json({ success: false, message: 'User not found' });
//     let newpassword;
//     if (req.body.password) {
//         newpassword = bcrypt.hashSync(req.body.password, 10);
//     } else {
//         newpassword = userExist.password;
//     }

//     const user = await User.findByIdAndUpdate(req.params.id, {
//         name: req.body.name,
//         email: req.body.email.toLowerCase(),
//         password: newpassword,
//         phone: req.body.phone,
//     });

//     res.status(200).json({ success: true, message: 'User updated' });
// })

module.exports = router;