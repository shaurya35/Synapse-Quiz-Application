import express from "express";
const router = express.Router();

const {
  //question
  getAllQuestions,
  getQuestionById,
  createQuestions,
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
  updateHardQuestion
} = require("../controllers/adminController");


//admin panel route
router.get("/", (req, res) => {
  res.send("admin here");
});


//admin panel see all profiles
router.get("/all-profiles", (req, res) => {
  res.send("admin here- all profiles");
});


//admin profile see all questions
router.get("/questions", getAllQuestions);
router.get("/questions/:id", getQuestionById);
router.post("/questions", createQuestions);
router.delete("/questions/:id", deleteQuestion);
router.patch("/questions/:id", updateQuestion);


//admin panel easy
router.get("/questions/easy", getEasyQuestions);
router.get("/questions/easy/:id", getEasyQuestionsById);
router.put("/questions/easy", createEasyQuestion);
router.delete("/questions/easy/:id",deleteEasyQuestion);
router.patch("/questions/easy/:id",updateEasyQuestion);


//admin panel med
router.get("/questions/medium", getMedQuestions);
router.get("/questions/medium/:id",getMediumQuestionsById);
router.post("/questions/medium",createMediumQuestion);
router.delete("/questions/medium/:id",deleteMediumQuestion);
router.patch("/questions/medium/:id",updateMediumQuestion);


//admin panel hard
router.get("/questions/hard", getHardQuestions);
router.post("/questions/hard", getHardQuestionsById);
router.get("/questions/hard/:id", createHardQuestion);
router.delete("/questions/hard/:id", deleteHardQuestion);
router.patch("/questions/hard/:id", updateHardQuestion);


//module config
module.exports = router;
