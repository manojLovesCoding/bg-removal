import multer from 'multer';

//CREATING MULTER MIDDLEWARE FOR PARSING FORMDATA
const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage })

export default upload