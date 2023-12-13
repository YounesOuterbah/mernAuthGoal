// Server
const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const app = express();

app.use(express.json());

// Routes
app.use("/api/goals", require("./routes/goalRoutes"));

// error handler
app.use(errorHandler);

// PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server runinng on port ${PORT}`));
