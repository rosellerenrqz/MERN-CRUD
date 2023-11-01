const Topic = require("../models/Topic");

const getTopic = async (req, res) => {
  const topic = await Topic.find();
  res.json({ topic });
};

const getTopicById = async (req, res) => {
  const id = req.params.id;
  const topic = await Topic.findById(id);

  res.json({ topic });
};

const createTopic = async (req, res) => {
  const { title, description } = req.body;
  const topic = await Topic.create({ title, description });

  res.json({ topic });
};

const updateTopic = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  await Topic.findByIdAndUpdate(id, { title, description });

  const topic = await Topic.findById(id);

  res.json({ topic });
};

const deleteTopic = async (req, res) => {
  const id = req.params.id;
  await Topic.findByIdAndDelete({ _id: id });

  res.json({ success: "Deleted Topic Successfully" });
};

module.exports = {
  getTopic,
  getTopicById,
  createTopic,
  updateTopic,
  deleteTopic,
};
