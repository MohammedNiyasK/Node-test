import { Product, Category } from "../model/schema.mjs";

const readAllProductController = async (req, res) => {
  try {
    const products = await Product.aggregate([
        {
          $lookup: {
            from: "Category",
            localField: "categoryId",
            foreignField: "categoryId",
            as: "category"
          },
          
        },
        
      ]);
   
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default readAllProductController;
