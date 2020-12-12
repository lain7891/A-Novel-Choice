module.exports = function (sequelize, DataTypes) {
    const Club = sequelize.define("Club", {
        name: DataTypes.STRING,
    });
    Club.associate = function (models){
        Club.hasMany(models.Book, {
            foreignKey: "bookId",
        });
    };
    return Club;
};

    