const rescue = require('express-rescue');
const { SaleProduct } = require('../../models');
const saleSevice = require('../../services/sale/saleSevice');

const getSalesProducts = rescue(async (_req, res) => {
  const allSale = await SaleProduct.findAll();
  res.status(200).json(allSale);
});

// o create está no salesController

const getAll = async (_req, res) => {
  const getAllSalesProducts = await saleSevice.getAll();

  return res.status(200).json(getAllSalesProducts);
};


module.exports = { getSalesProducts, getAll };
