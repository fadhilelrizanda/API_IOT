const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
});

const chickenSchema = new mongoose.Schema({
  condition: {
    required: true,
    type: Number,
  },
  relay1: {
    required: true,
    type: Number,
  },
  relay2: {
    required: true,
    type: Number,
  },
  relay3: {
    required: true,
    type: Number,
  },
  startTime: {
    required: true,
    type: Number,
  },
  endTime: {
    required: true,
    type: Number,
  },
});

const dataModel = mongoose.model("Data", dataSchema);
const chickenModel = mongoose.model("Chicken", chickenSchema);

module.exports = {
  dataModel,
  chickenModel,
};
