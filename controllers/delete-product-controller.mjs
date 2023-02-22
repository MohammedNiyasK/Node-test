import { Product } from "../model/schema.mjs";

const deleteProductController = async (req, res) => {
  const filter = req.params;
  console.log(filter)


  try {
    const product = await Product.findOneAndDelete(filter);
    if (!product) {
      return res.status(404).send("No product found");
    }
    res.send(product);
  } catch (error) {
    res.status(400).send(`Error detected: ${error}`);
  }
};

export default deleteProductController;
