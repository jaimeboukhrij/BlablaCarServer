const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = 10


const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'El email es obligatorio.'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (value) {
          return /^([^@]*@[^@]*)$/.test(value);
        },
        message: 'Invalid Email'
      }
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria.'],
    },

    firstName: {
      type: String,
      required: [true, 'El nombre es obligatoria.'],
      trim: true,
    },

    lastName: {
      type: String,
      required: [true, 'El apellido es obligatoria.'],
      trim: true,
    },

    avatar: {
      type: String,
      required: [true, 'El apellido es obligatoria.'],
      trim: true,
    },
    bornDate: {
      type: Date,
      required: [true, 'La fecha de nacimiento es obligatoria.'],
    },

  },
  {
    timestamps: true
  }
)

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(this.password, salt);
  this.password = hashedPassword;

  next();
});

const User = model("User", userSchema);

module.exports = User;
