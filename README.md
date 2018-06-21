# README #


### Zenpit Backend  ###

* Developer -> Chris Pol

# To use the API

# upload the database file from project directory -> database -> zenpit-local-db_2018-06-20.sql

# configure the mysql environment into project local config file
# zenpit-backend-challenge -> config -> dbconfig.js

# open a terminal, go to project directory then run "npm install"

# after installation, you may now run command "gulp"

# you may use any api tool to test it like Postman

### API -> Zenpit Mobile Device Management

# http://127.0.0.1:5001/zenpit/device/add [POST]
# params
# device_id | device_name | battery_status | device_longitude | device_latitude


# http://127.0.0.1:5001/zenpit/device/getall [GET]


# http://127.0.0.1:5001/zenpit/device/get?deviceid=1111 [GET]


# http://127.0.0.1:5001/zenpit/device/update [POST]
# params
# id | device_id | device_name | battery_status | device_longitude | device_latitude


# http://127.0.0.1:5001/zenpit/device/remove?deviceid=1111 [GET]

# EOF