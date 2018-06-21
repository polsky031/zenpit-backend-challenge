const express = require('express');
const deviceController = require('../controllers/deviceController.js');

let router = express.Router();

router.route('/device/add').post(deviceController.postAddDevice);
router.route('/device/update').post(deviceController.postUpdateDevice);

router.route('/device/remove').get(deviceController.getRemoveDeviceById);
router.route('/device/getall').get(deviceController.getAllDevice);
router.route('/device/get').get(deviceController.getDeviceById);

module.exports = router;