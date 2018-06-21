module.exports = function (sequelize, DataTypes) {
    return sequelize.define('tbl_device', {
        id: {
            type: DataTypes.BIGINT(8),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        device_id: { type: DataTypes.BIGINT(8) },
        device_name: { type: DataTypes.STRING },
        battery_status: { type: DataTypes.STRING },
        device_longitude: { type: DataTypes.STRING },
        device_latitude: { type: DataTypes.STRING },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        date_updated: { type: DataTypes.DATE, allowNull: true },
        date_deleted: { type: DataTypes.DATE, allowNull: true }
    }, { freezeTableName: true, timestamps: false });
}