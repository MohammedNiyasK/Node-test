import { Product, Category } from "../model/schema.mjs";

const readProductController = async (req, res) => {
  const filter = req.params;

  try {
    const product = await Product.findOne(filter);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default readProductController;
