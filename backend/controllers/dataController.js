let dataPoints = [
  {
    id: 1,
    type: "OSINT",
    lat: 19.0760,
    lng: 72.8777,
    info: "News report",
    image: "https://via.placeholder.com/100"
  }
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