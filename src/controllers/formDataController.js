const connectToMongoDB = require("../config/db");

// save form data to db
const saveFormData = async (req, res) => {
  const client = await connectToMongoDB();
  const formCollection = client.db("formElysium").collection("forms");

  try {
    const formData = req.body;
    const result = await formCollection.insertOne(formData);
    return res.status(200).send(result);
  } catch (err) {
    console.error("Error saving form data:", err);
    res.status(500).send({ error: "An error occurred while saving form data" });
  }
};

//get all form data from db
const getFormData = async (req, res) => {
  const userEmail = req.query.email;
  const client = await connectToMongoDB();
  const formCollection = client.db("formElysium").collection("forms");
  try {
    const result = await formCollection.find({ user: userEmail }).toArray();
    return res.status(200).send(result);
  } catch (err) {
    console.error("Error saving form data:", err);
    res
      .status(500)
      .send({ error: "An error occurred while getting form data" });
  }
};

const getSpecificFormData = async (req, res) => {
  const formId = req.query.formId;
  const client = await connectToMongoDB();
  const formCollection = client.db("formElysium").collection("forms");

  try {
    const result = await formCollection.findOne({ formId: formId });
    if (!result) {
      return res.status(404).send({ error: "Form data not found" });
    }
    return res.status(200).send(result);
  } catch (err) {
    console.error("Error getting specific form data:", err);
    res
      .status(500)
      .send({ error: "An error occurred while getting specific form data" });
  }
};

const deleteFormData = async (req, res) => {
  const formId = req.query.formId;
  const client = await connectToMongoDB();
  const formCollection = client.db("formElysium").collection("forms");

  try {
    const result = await formCollection.deleteOne({ formId: formId });
    if (!result) {
      return res.status(404).send({ error: "Form data not found" });
    }
    return res.status(200).send(result);
  } catch (err) {
    console.error("Error deleting specific form data:", err);
    res
      .status(500)
      .send({ error: "An error occurred while deleting specific form data" });
  }
};
module.exports = {
  saveFormData,
  getFormData,
  getSpecificFormData,
  deleteFormData,
};
