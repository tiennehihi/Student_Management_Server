const { Schema, model } = require('mongoose')

const TeacherModel = new Schema({
  mgv: {
    type: String,
    required: true,
    unique: true, // Đảm bảo mgv là duy nhất
  },
  fullname: String,
  password: String,
  isGV: Boolean,
  isAdmin: Boolean,
  classrooms: {
    type: Schema.Types.ObjectId,
    ref: 'Classroom',
  },
  faculty: {
    type: Schema.Types.ObjectId,
    ref: 'Faculty',  // Liên kết với khoa
    required: true,
  },
})

const Teacher = model("Teacher", TeacherModel)
module.exports =  Teacher