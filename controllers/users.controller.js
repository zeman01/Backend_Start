export const getUserById = (req, res) => {
  const params = req.params;
  res.json({
    data: { id: params.id, name: "Jaman", email: "hgsah@jhdbs.sj", age: 24 },
  });
}

export const createUser = (req, res) => {
  res.status(201).json({
    message: "User created successfully",
  });
}

export const updateUser = (req, res) => {
  const {id} = req.params;
  res.status(200).json({
    message: `User with id ${id} updated successfully`,
  });
}

export const deleteUser = (req, res) => {
  const {id} = req.params;
  res.status(200).json({
    message: `User with id ${id} deleted successfully`,
  });
}