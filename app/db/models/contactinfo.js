'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ContactInfo.belongsTo(models.Contact, { foreignKey: 'contact_id' })
    }
  }
  ContactInfo.init({
    data: DataTypes.STRING,
    type: DataTypes.STRING,
    contactId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'ContactInfo',
    underscored: true,
    paranoid:true,
    tableName: "contact_infos"
  });
  return ContactInfo;
};