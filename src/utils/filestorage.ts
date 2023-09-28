import { diskStorage } from "multer"
import {v4 as uuidv4} from 'uuid'
export const fileStorage = {
    storage: diskStorage({
        destination: 'uploads',
        filename: (req, file, cb) => {
            const ext = file.originalname.split('.')[1]
            const filename = uuidv4().concat(`.${ext}`)
            cb(null, filename)
        }
    })
}