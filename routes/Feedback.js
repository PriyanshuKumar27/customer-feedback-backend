const express = require("express");
const router = express.Router();
const { Feedback } = require("../models");

//Create feedback
router.post("/create", async (req, res) => {
  const { name, email, company, comments } = req.body;

  try {
    const newFeedback = await Feedback.create({
      name: name,
      email: email,
      company: company,
      comments: comments,
    });
    res.json({
      message: "Feedback created successfully",
      data: newFeedback,
    });
  } catch (error) {
    console.error(error.message);
  }
});

//Get all feedback
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll();
    res.json(feedbacks);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
