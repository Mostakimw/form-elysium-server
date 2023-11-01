const connectToMongoDB = require("../config/db");

const saveFormData = async (req, res) => {
  const client = await connectToMongoDB();
  const formCollection = client.db("formElysium").collection("forms");

  try {
    const formData = req.body;
    const result = await formCollection.insertOne(formData);
    return res.status(200).send(result);
  } catch (err) {
    console.error("Error saving form data:", err);
    res.status(500).json({ error: "An error occurred while saving form data" });
  }
};

module.exports = { saveFormData };
