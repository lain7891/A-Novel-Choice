module.exports = function (sequelize, DataTypes) {
    const Book = sequelize.define("Book", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
    });
    Book.associate = function (models){
        Book.belongsTo(models.Club, {
            through: "book",
            foreignKey: "clubId",
        });
    };
    return Book; 
};
