import { useState } from "react";
import axios from "axios";

const UploadPanel = () => {
  const [form, setForm] = useState({
    type: "",
    lat: "",
    lng: "",
    info: "",
    image: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.lat || !form.lng) {
      alert("Latitude and Longitude required");
      return;
    }

    axios.post("http://localhost:5000/api/data/upload", form)
      .then(() => {
        alert("Data added successfully");
        window.location.reload(); // simple refresh
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      <input name="type" placeholder="Type (OSINT/HUMINT/IMINT)" onChange={handleChange} />
      <input name="lat" placeholder="Latitude" onChange={handleChange} />
      <input name="lng" placeholder="Longitude" onChange={handleChange} />
      <input name="info" placeholder="Info" onChange={handleChange} />
      <input name="image" placeholder="Image URL" onChange={handleChange} />

      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
        Add Data
      </button>
    </div>
  );
};

export default UploadPanel;