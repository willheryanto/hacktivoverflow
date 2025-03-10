const mongoose = require('mongoose')
const { generateHash } = require('../helpers/bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: [
      { validator: isEmail, msg: 'Invalid email format' },
      { validator: isEmailUnique, msg: 'Email already registered' }
    ]
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password length must be between 6 and 12'],
    maxlength: [12, 'Password length must be between 6 and 12']
  },
  tags: {
    type: String
  }
})

function isEmailUnique(value) {
  return mongoose.models['User'].findOne({ email: value })
    .then(found => {
      if (found) return false
      else return true
    })
}

function isEmail(value) {
  let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  return regex.test(value)
}


userSchema.pre('save', function () {
  this.password = generateHash(this.password)
})

module.exports = mongoose.model('User', userSchema)