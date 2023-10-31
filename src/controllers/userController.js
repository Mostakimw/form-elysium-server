const connectToMongoDB = require("../config/db");

const createUser = async (req, res) => {
  const { email, name } = req.body;
  try {
    const client = await connectToMongoDB();
    const usersCollection = client.db("formElysium").collection("users");
    const existingUser = await usersCollection.findOne({ email: email });

    // check if user exist
    if (existingUser) {
      return res.status(409).send({ message: "User already exists" });
    }

    const result = await usersCollection.insertOne({ email, name });

    // send result
    if (result.insertedCount === 1) {
      return res.status(201).send({ message: "User created" });
    }
    // return res.status(500).json({ message: "Failed to create user" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createUser };
