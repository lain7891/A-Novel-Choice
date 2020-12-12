module.exports = function (sequelize, DataTypes) {
    const CLub = sequelize.define("Club", {
        name: DataTypes.STRING,
    });
};

    return CLub;