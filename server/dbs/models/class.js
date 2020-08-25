import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ClassSchema = new Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    sort: {
        type: Number,
        default: 1
    },
    status:{
        type: Boolean,
        default: false
    }
})

export default mongoose.model('Class', ClassSchema)
