module.exports = function (sequelize, DataTypes) {
    const Club = sequelize.define("Club", {
        name: DataTypes.STRING,
    });
    return Club;
};

    