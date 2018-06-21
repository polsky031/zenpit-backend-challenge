const crypto = require('crypto');
const _ = require('lodash');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const models = require('../models');

const Device = models.tbl_device;

module.exports = {
    postAddDevice: function (req, res) {
        
        if(!req.body) {
            res.status(200).send({ 
                result: 0, 
                title: "Zenpit! Mobile Device Management",
                message: "Problem occured. Please contact admin." 
            });
            return;
            
        }

        let device_id = req.body.device_id;
        let device_name = req.body.device_name;
        let battery_status = req.body.battery_status;
        let device_longitude = req.body.device_longitude;
        let device_latitude = req.body.device_latitude;

        Device.create({
            device_id: device_id,
            device_name: device_name,
            battery_status: battery_status,
            device_longitude: device_longitude,
            device_latitude: device_latitude
        }).then(function (dev_detail) {

            if (dev_detail.dataValues.id === null) {
                    res.status(200).send({ 
                        result: 0, 
                        title: "Zenpit! Mobile Device Management",
                        message: "Your device has not been added successfully." 
                    });
                    return;
            } else {
                    res.status(200).send({ 
                        result: 1, 
                        title: "Zenpit! Mobile Device Management",
                        message: "Zenpit! Your device has been added successfully!" 
                    });
                    return;

            }
        });

    },
    getAllDevice: function (req, res) {

        let deviceData = [];

        Device.findAll({ where: { 
            date_deleted : { [Op.eq]: null } 
        } }).then(function (dev) {

            _.each(dev, function (value, key, obj) {

                deviceData.push({
                    id: value.id,
                    device_id: value.device_id,
                    device_name: _.startCase(_.toLower(value.device_name)),
                    battery_status: value.battery_status,
                    device_longitude: value.device_longitude,
                    device_latitude: value.device_latitude
                });

            });

            res.status(200).send({ 
                total: deviceData.length, 
                data: deviceData
            });
            return;

        });

    },
    getDeviceById: function (req, res) {

        let id = req.query.deviceid;
        let deviceData = [];

        if(!id){
            res.status(200).send({ 
                result: 0, 
                title: "Zenpit! Mobile Device Management",
                message: "No device found." 
            });
            return;
        }

        Device.findOne({ where: { 
            device_id: { [Op.eq]: id }, 
            date_deleted : { [Op.eq]: null } 
        } }).then(function (dev) {
            
            if (!dev) {
                res.status(200).send({ 
                    result: 0, 
                    title: "Zenpit! Mobile Device Management",
                    message: "No device found." 
                });
                return;
            }

            res.status(200).send({ 
                id: dev.dataValues.id,
                device_id: dev.dataValues.device_id,
                device_name: _.startCase(_.toLower(dev.dataValues.device_name)),
                battery_status: dev.dataValues.battery_status,
                device_longitude: dev.dataValues.device_longitude,
                device_latitude: dev.dataValues.device_latitude
            });
            return;

        });

    },

    getRemoveDeviceById: function(req, res){

        let id = req.query.deviceid;

        if(!id){
            res.status(200).send({ 
                result: 0, 
                title: "Zenpit! Mobile Device Management",
                message: "No device found to remove." 
            });
            return;
        }

        Device.update({ date_deleted: Date.now() }, { where: { device_id: { [Op.eq]: id } } })
        .then(function (result) {
            
            if (result.length > 0) {

                res.status(200).send({
                    result: 1,
                    message: 'Mobile device has been successfully removed!',
                });
                return;
            }


        }, function (rejectedPromiseError) { });

    },
    postUpdateDevice: function(req, res){

        let id = req.body.id;
        let device_id = req.body.device_id;
        let device_name = req.body.device_name;
        let battery_status = req.body.battery_status;
        let device_longitude = req.body.device_longitude;
        let device_latitude = req.body.device_latitude;

        Device.update({
            device_id: device_id,
            device_name: device_name,
            battery_status: battery_status,
            device_longitude: device_longitude,
            device_latitude: device_latitude,
            date_updated: Date.now() 
        }, { where: { id: { [Op.eq]: id } } })
        .then(function (result) {

            if (result.length > 0) {

                res.status(200).send({
                    result: 1,
                    message: 'Mobile device has been successfully updated!',
                });
                return;
            }


        }, function (rejectedPromiseError) { });

    }

}