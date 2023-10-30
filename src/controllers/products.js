const getAllProducts = async (req, res) => {
  res.status(200).send({ msg: "all products is running" });
};
const getAllProductsTesting = async (req, res) => {
  res.status(200).send({ msg: "all products testing is running" });
};

module.exports = { getAllProducts, getAllProductsTesting };
