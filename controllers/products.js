const getAllProdcutsStatic = async (req, res) => {
  res.status(200).json({msg: 'products testing routes'})
}

const getAllProdcuts = async (req, res) => {
  res.status(200).json({msg: 'products routes'})
}

module.exports = {
  getAllProdcutsStatic,
  getAllProdcuts
}