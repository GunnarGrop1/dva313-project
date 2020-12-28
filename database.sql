-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.5.8-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for cloudnative
CREATE DATABASE IF NOT EXISTS `cloudnative` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `cloudnative`;

-- Dumping structure for procedure cloudnative.AddNewUser
DELIMITER //
CREATE PROCEDURE `AddNewUser`(
	IN `UserName` VARCHAR(50),
	IN `Password` VARCHAR(50)
)
BEGIN
	INSERT user
	Values (UserName,PASSWORD);
	END//
DELIMITER ;

-- Dumping structure for procedure cloudnative.DeleteUSer
DELIMITER //
CREATE PROCEDURE `DeleteUSer`(
	IN `UserName` VARCHAR(50),
	IN `Password` VARCHAR(50)
)
BEGIN 
	DELETE FROM user where UserName = 'Roland' && Password ='123TR';
END//
DELIMITER ;

-- Dumping structure for table cloudnative.metric
CREATE TABLE IF NOT EXISTS `metric` (
  `name` varchar(50) NOT NULL COMMENT 'name of the metric (In AWS)',
  `display_name` varchar(50) NOT NULL COMMENT 'how to display this metric (client side)',
  `collection_status` bit(1) NOT NULL DEFAULT b'0' COMMENT 'whether or not this metric is currently being collected',
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table cloudnative.metric: ~2 rows (approximately)
/*!40000 ALTER TABLE `metric` DISABLE KEYS */;
INSERT INTO `metric` (`name`, `display_name`, `collection_status`) VALUES
	('CPUUtilization', 'CPU Utilization', b'1'),
	('DiskReadOps', 'Disk Read Ops', b'1'),
	('DiskWriteOps', 'Disk Write Ops', b'1'),
	('NetworkIn', 'Network In', b'1'),
	('NetworkOut', 'Network Out', b'1'),
	('NetworkPacketsIn', 'Network Packets In', b'1'),
	('NetworkPacketsOut', 'Network Packets Out', b'0'),
	('RAMUsage', 'RAM Usage', b'0');
/*!40000 ALTER TABLE `metric` ENABLE KEYS */;

-- Dumping structure for table cloudnative.role
CREATE TABLE IF NOT EXISTS `role` (
  `RoleID` int(11) NOT NULL,
  `RoleName` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`RoleID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table cloudnative.role: ~2 rows (approximately)
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` (`RoleID`, `RoleName`) VALUES
	(1, 'User'),
	(2, 'Admin');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;

-- Dumping structure for table cloudnative.roleuser
CREATE TABLE IF NOT EXISTS `roleuser` (
  `UserName` varchar(50) NOT NULL DEFAULT '',
  `RoleID` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`UserName`),
  KEY `FK2_RoleID_role` (`RoleID`),
  CONSTRAINT `FK1_UserName_User` FOREIGN KEY (`UserName`) REFERENCES `user` (`UserName`),
  CONSTRAINT `FK2_RoleID_role` FOREIGN KEY (`RoleID`) REFERENCES `role` (`RoleID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table cloudnative.roleuser: ~2 rows (approximately)
/*!40000 ALTER TABLE `roleuser` DISABLE KEYS */;
INSERT INTO `roleuser` (`UserName`, `RoleID`) VALUES
	('Sandra', 1),
	('Gunnar', 2);
/*!40000 ALTER TABLE `roleuser` ENABLE KEYS */;

-- Dumping structure for table cloudnative.user
CREATE TABLE IF NOT EXISTS `user` (
  `UserName` varchar(50) NOT NULL DEFAULT '',
  `Password` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`UserName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table cloudnative.user: ~7 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`UserName`, `Password`) VALUES
	('Emil', 'Lar55on'),
	('Gezim', 'Cak0'),
	('Gunnar', 'Hello1'),
	('Johan', 'Kar1sson'),
	('Roland', 'Pl@k@'),
	('Sandra', '123456'),
	('Ville', 'Hi5');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
