export const getAllProducts = (req, res) => {
  res.json({
    data: [
      { id: 1, name: "iPhone", price: 999, brand: "Apple" },
      { id: 2, name: "Galaxy S21", price: 899, brand: "Samsung" },
      { id: 3, name: "Pixel 6", price: 799, brand: "Google" },
    ],
  });
};
export const getProductById = (req, res) => {
  const { id } = req.params;
  res.json({
    data: { id: id, name: "iPhone", price: 999, brand: "Apple" },
  });
};

export const createProduct = (req, res) => {
  res.status(201).json({
    message: "Product created successfully",
  });
};
export const updateProduct = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `Product with id ${id} updated successfully`,
  });
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `Product with id ${id} deleted successfully`,
  });
};