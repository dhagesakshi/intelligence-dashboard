const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// routes
const dataRoutes = require("./routes/dataRoutes");
app.use("/api/data", dataRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));