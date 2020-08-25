import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ProductSchema = new Schema({
    mainTitle: {
        type: String,
        unique: true,
        require: true
    },
    subTitle: String,
    img: {
        type: String,
        require: true
    },
    faceValue: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    desc: String,
    status: {
        type: Boolean,
        default: false
    },
    sort: {
        type: Number,
        default: 1
    },
    classId: {  // 所属分类id
        type: String,
        require: true
    }
})

export default mongoose.model('Product', ProductSchema)