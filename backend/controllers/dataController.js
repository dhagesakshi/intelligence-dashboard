let dataPoints = [
];

// GET
exports.getData = (req, res) => {
  res.json(dataPoints);
};

// POST (for CSV/JSON/manual)
exports.uploadData = (req, res) => {
  const newData = req.body;
  dataPoints.push({ id: Date.now(), ...newData });
  res.json({ message: "Data added successfully" });
};
