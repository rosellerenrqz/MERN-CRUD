const mongoose = require("mongoose");
const { Schema } = mongoose;

const TopicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;
