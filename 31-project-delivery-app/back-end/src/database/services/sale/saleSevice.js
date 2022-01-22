const { Sale, Product, User } = require('../../models');

const validateEntries = (entries) => {
const { totalPrice, deliveryAddress, deliveryNumber, status } = entries;
  if (!totalPrice || !deliveryAddress || !deliveryNumber || !status) {
    return {
    status: 404,
    message: "Entries not found",
    };
  }

  return true;
};

const getAll = async () => {
  const allSalesProducts = await Sale.findAll({ include: [
    { model: User, as: 'seller', attributes: { exclude: ['password'] } },
    { model: Product, as: 'products', attributes: { exclude: ['urlImage'] } },
  ] });

  return allSalesProducts;
};

module.exports = {
  validateEntries,
  getAll
}
