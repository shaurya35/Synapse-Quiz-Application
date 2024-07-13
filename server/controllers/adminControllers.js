//mongoose config
const Question = require("../models/questionModel");
const mongoose = require("mongoose");

/*questionController*/

// get all questions
const getAllQuestions = async (req, res) => {
  const questions = await Question.find({}).sort({ createdAt: -1 });
  res.status(200).json(questions);
};

// get question by id
const getQuestionById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findById(id);
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

// delete question
const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findOneAndDelete({ _id: id });
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

// update question
const updateQuestion = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

/* easyQuestionController*/

// get easy questions
const getEasyQuestions = async (req, res) => {
  const questions = await Question.find({ level: "easy" }).sort({ createdAt: -1 });
  res.status(200).json(questions);
};

// get easy questions by id
const getEasyQuestionsById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findOne({ _id: id, level: "easy" });
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

//delete easy question
const deleteEasyQuestion = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findOneAndDelete({ _id: id, level: "easy" });
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

//update easy question
const updateEasyQuestion = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findOneAndUpdate(
    { _id: id, level: "easy" },
    {
      ...req.body,
    }
  );
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

/*medium questionController*/

// get med questions
const getMedQuestions = async (req, res) => {
  const question = await Question.find({ level: "medium" }).sort({ createdAt: -1 });
  res.status(200).json(question);
};

//get med question by id
const getMediumQuestionsById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findOne({ _id: id, level: "medium" });
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

//delete med question
const deleteMediumQuestion = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findOneAndDelete({
    _id: id,
    level: "medium",
  });
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

//update medium question
const updateMediumQuestion = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findOneAndUpdate(
    { _id: id, level: "medium" },
    {
      ...req.body,
    }
  );
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

/* hard questionController*/

// get hard questions
const getHardQuestions = async (req, res) => {
  const question = await Question.find({ level: "hard" }).sort({ createdAt: -1 });
  res.status(200).json(question);
};

//get hard question from id
const getHardQuestionsById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findOne({ _id: id, level: "hard" });
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

//delete hardquestions
const deleteHardQuestion = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findOneAndDelete({ _id: id, level: "hard" });
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

//update hard questions
const updateHardQuestion = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findOneAndUpdate(
    { _id: id, level: "hard" },
    {
      ...req.body,
    }
  );
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

/*create questionController*/

// create questions
const createQuestion = async (req, res) => {
  const { level, content, code, options } = req.body;

  try {
    const question = await Question.create({ level, content, code, options });
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//create easy question
const createEasyQuestion = async (req, res) => {
  const { content, code, options } = req.body;

  try {
    const question = await Question.create({
      level: "easy",
      content,
      code,
      options,
    });
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//create medium question
const createMediumQuestion = async (req, res) => {
  const { content, code, options } = req.body;

  try {
    const question = await Question.create({
      level: "medium",
      content,
      code,
      options,
    });
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//create hard question
const createHardQuestion = async (req, res) => {
  const { content, code, options } = req.body;

  try {
    const question = await Question.create({
      level: "hard",
      content,
      code,
      options,
    });
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  //question
  getAllQuestions,
  getQuestionById,
  createQuestion,
  deleteQuestion,
  updateQuestion,

  //easy question
  getEasyQuestions,
  getEasyQuestionsById,
  createEasyQuestion,
  deleteEasyQuestion,
  updateEasyQuestion,

  //medium question
  getMedQuestions,
  getMediumQuestionsById,
  createMediumQuestion,
  deleteMediumQuestion,
  updateMediumQuestion,

  //hard questions
  getHardQuestions,
  getHardQuestionsById,
  createHardQuestion,
  deleteHardQuestion,
  updateHardQuestion,
};
