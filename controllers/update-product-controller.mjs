import { Product } from "../model/schema.mjs";

const updateProductController = async (req, res) => {
  const filter = req.params;

  const update = req.body;

  try {
    const product = await Product.findOneAndUpdate(filter, update, {
      new: true,
    });
    if (!product) {
      return res.status(404).send("No product found");
    }
    res.send(product);
  } catch (error) {
    res.status(400).send(`Error detected: ${error}`);
  }
};

export default updateProductController;
