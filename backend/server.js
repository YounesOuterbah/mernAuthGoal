// Server
const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const color = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// error handler
app.use(errorHandler);

// PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server runinng on port ${PORT}`));
