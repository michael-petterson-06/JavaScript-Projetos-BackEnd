module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    // id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    total_price: DataTypes.DECIMAL(9,2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    status: DataTypes.STRING,
    // user_id: { type: DataTypes.INTEGER, foreignKey: true },
    // seller_id: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    createdAt: 'sale_date',
    // updatedAt: 'updated',
    tableName: 'sales',
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'User' });
      Sale.belongsTo(models.User,
        { foreignKey: 'seller_Id', as: 'seller' });
  };
   
  return Sale;
};
