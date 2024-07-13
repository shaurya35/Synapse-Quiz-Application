const express = require("express");
const router = express.Router();

const {
  //questions
  getAllQuestions,
  getQuestionById,
  createQuestion,
  deleteQuestion,
  updateQuestion,

  //easyquesitons
  getEasyQuestions,
  getEasyQuestionsById,
  createEasyQuestion,
  deleteEasyQuestion,
  updateEasyQuestion,

  //mediumquestions
  getMedQuestions,
  getMediumQuestionsById,
  createMediumQuestion,
  deleteMediumQuestion,
  updateMediumQuestion,
  
  //hardquestions
  getHardQuestions,
  getHardQuestionsById,
  createHardQuestion,
  deleteHardQuestion,
  updateHardQuestion,
} = require("../controllers/adminControllers");

// Admin panel route
router.get("/", (req, res) => {
  res.send("admin here");
});

// Admin panel see all profiles
router.get("/all-profiles", (req, res) => {
  res.send("admin here- all profiles");
});

// Admin panel easy questions
router.get("/questions/easy", getEasyQuestions);
router.get("/questions/easy/:id", getEasyQuestionsById);
router.post("/questions/easy", createEasyQuestion);
router.delete("/questions/easy/:id", deleteEasyQuestion);
router.patch("/questions/easy/:id", updateEasyQuestion);

// Admin panel medium questions
router.get("/questions/medium", getMedQuestions);
router.get("/questions/medium/:id", getMediumQuestionsById);
router.post("/questions/medium", createMediumQuestion);
router.delete("/questions/medium/:id", deleteMediumQuestion);
router.patch("/questions/medium/:id", updateMediumQuestion);

// Admin panel hard questions
router.get("/questions/hard", getHardQuestions);
router.get("/questions/hard/:id", getHardQuestionsById);
router.post("/questions/hard", createHardQuestion);
router.delete("/questions/hard/:id", deleteHardQuestion);
router.patch("/questions/hard/:id", updateHardQuestion);

// Admin panel all questions
router.get("/questions", getAllQuestions);
router.get("/questions/:id", getQuestionById);
router.post("/questions", createQuestion);
router.delete("/questions/:id", deleteQuestion);
router.patch("/questions/:id", updateQuestion);

// Export the router
module.exports = router;
