const express = require("express");
const cors = require("cors");
const db = require("./models");
const userRouter = require("./routes/Users");
const feedbackRouter = require("./routes/Feedback");

// Create the Express app
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/user", userRouter);
app.use("/api/feedback", feedbackRouter);

//Connection to the database
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000...");
  });
});
