# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.18)
# Database: zenpit-local-db
# Generation Time: 2018-06-20 15:23:51 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table tbl_device
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tbl_device`;

CREATE TABLE `tbl_device` (
  `id` bigint(8) unsigned NOT NULL AUTO_INCREMENT,
  `device_id` bigint(8) NOT NULL,
  `device_name` varchar(100) NOT NULL DEFAULT '',
  `battery_status` varchar(100) NOT NULL DEFAULT '',
  `device_longitude` varchar(100) NOT NULL DEFAULT '',
  `device_latitude` varchar(100) NOT NULL DEFAULT '',
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
  `date_deleted` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tbl_device` WRITE;
/*!40000 ALTER TABLE `tbl_device` DISABLE KEYS */;

INSERT INTO `tbl_device` (`id`, `device_id`, `device_name`, `battery_status`, `device_longitude`, `device_latitude`, `date_created`, `date_updated`, `date_deleted`)
VALUES
	(15,1111,'samsung galaxy','new','11.11','12.23','2018-06-20 14:43:45',NULL,'2018-06-20 15:15:24'),
	(16,22222,'iphone X','bad condition','13.13','8.8','2018-06-20 14:45:16','2018-06-20 15:07:35',NULL);

/*!40000 ALTER TABLE `tbl_device` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
