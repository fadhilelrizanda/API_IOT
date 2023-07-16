const mongoose = require("mongoose");

const peopleDetectSchema = new mongoose.Schema(
  {
    total: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const chickenSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const peopleDetectModel = mongoose.model("PeopleDetect", peopleDetectSchema);
const chickenModel = mongoose.model("Chicken", chickenSchema);

module.exports = {
  peopleDetectModel,
  chickenModel,
};
