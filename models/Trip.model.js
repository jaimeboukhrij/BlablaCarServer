const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {

    origin: {
      type: {
        name: String,
        id: String
      },
      required: true
    },
    destination: {
      type: {
        name: String,
        id: String
      },
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    hourDeparture: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    passengers: {
      type: Number,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    hourArrival: {
      type: String,
      required: true
    },
    pets: {
      type: Boolean,
      required: true
    },
    smoke: {
      type: Boolean,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true
    },

    request: {
      type: [Schema.Types.ObjectId]
    }



  },
  {
    timestamps: true
  }
)



const Trip = model("Trip", userSchema);

module.exports = Trip;
