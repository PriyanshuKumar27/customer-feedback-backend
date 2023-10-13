const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register User
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username: username } });
    if (user) {
      res.status(400).json({
        error:
          "User with same name already exists!! Please try different username",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      await Users.create({
        username: username,
        password: hashedPassword,
      });
      res.json({
        message: "Registration successful!! Please login...",
      });
    }
  } catch (error) {
    console.error(error.message);
  }
});

//Login User
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username } });
    if (!user) {
      res.status(400).json({
        error: "User does not exist. Please provide correct username!!",
      });
    } else {
      const bool = await bcrypt.compare(password, user.password);
      if (!bool) {
        res.status(400).json({
          error: "Username or Password is incorrect. Please try again!!",
        });
      } else {
        const accessToken = jwt.sign(
          { id: user.id, name: user.name },
          "SECRETKEY"
        );
        res.json({
          message: "Login successful!!",
          token: accessToken,
        });
      }
    }
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
