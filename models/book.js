module.exports = function (sequelize, DataTypes) {
    const Book = sequelize.define("Book", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
    });
    return Book; 
};
 