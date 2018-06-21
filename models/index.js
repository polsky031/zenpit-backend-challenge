const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const config = require('../config/dbconfig');  // we use node-config to handle environments

// initialize database connection
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password, {
        host: config.host,
        dialect: config.dialect,
        operatorsAliases: Op
    }
);

sequelize.authenticate().then(function (err) {
    if (err) console.log('Unable to connect to the database:', err);
    console.log('Connection has been established successfully.');
});

// load models
const models = ['tbl_device'];

models.forEach(function (model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// describe relationships
(function (m) {
    //can use with table that has relationship    
})(module.exports);

// export connection
module.exports.sequelize = sequelize;