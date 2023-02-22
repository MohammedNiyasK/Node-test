import { Product, Category } from "../model/schema.mjs";
//Create a new product

const addProductController = async (req, res) => {
  const {
    productName,
    qtyPerUnit,
    unitPrice,
    unitInStock,
    discontinued,
    categoryId,
    categoryName,
  } = req.body;


  try {
    const product = new Product({
      productName,
      qtyPerUnit,
      unitPrice,
      unitInStock,
      discontinued,
      categoryId,
    });
    await product.save();

    const category = new Category({
      categoryName,
      categoryId
    })
    await category.save()

    res.status(200).send('documents added succesfully');
    //res.send('Hello')
  } catch (error) {
    res.status(400).send(error);
  }
};

export default addProductController;
