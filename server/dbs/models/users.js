import mongoose from 'mongoose'

const Schema = mongoose.Schema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    allowNull: false,
    require: true
  },
  password: {
    type: String,
    allowNull: false
  }
})

export default mongoose.model('User', UserSchema)
