module.exports = function (sequelize, DataTypes) {
    const Book = sequelize.define("Book", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
    });

    Book.associate = function (models){
        Book.belongsToMany(models.Club, {
            through: "club",
            // foreignKey: "clubId",
        });
    };
    return Book; 
};
 