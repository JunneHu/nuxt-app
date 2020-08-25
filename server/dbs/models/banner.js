import mongoose from 'mongoose'

const Schema = mongoose.Schema
const BannerSchema = new Schema({
    img: {
        allowNull: false,
        type: String
    },
    name: {
        type: String,
        require: true
    },
    page: String,
    position: String,
    linkType: {
        type: Number,
        default: 0   // 0 不跳转 1、商品 2、链接
    },
    linkUrl: String,  // 链接
    productId: String,  // 商品
    sort: {
        type: Number,
        default: 1
    },
    status: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('Banner', BannerSchema)
