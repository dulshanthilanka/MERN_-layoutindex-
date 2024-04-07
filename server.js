const express = require('express');
const cors = require('cors');
const collection = require('./mongo');
const app = express();

app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
  try {
    const { serial, name, address, phone, devices, type, status } = req.body;
    const newDetails = new collection({
      serial, name, address, phone, devices, type, status
    });
    await newDetails.save();
    res.status(201).json({ message: "Data stored successfully" });
  } catch (error) {
    console.error("Error storing data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/update/:serial", async (req, res) => {
  try {
    const { name, address, phone, devices, type, status } = req.body;
    const serial = req.params.serial;
    await collection.findOneAndUpdate({ serial: serial }, { $set: { name, address, phone, devices, type, status } });
    res.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.delete("/delete/:serial", async (req, res) => {
  try {
    const serial = req.params.serial;
    await collection.deleteOne({ serial: serial });
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Node API is running on port ${PORT}`);
});
