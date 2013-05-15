/*
SQLyog Community v8.71 
MySQL - 5.5.8 : Database - bdpago
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bdpago` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `bdpago`;

/*Table structure for table `alumno` */

DROP TABLE IF EXISTS `alumno`;

CREATE TABLE `alumno` (
  `idalumno` int(11) NOT NULL AUTO_INCREMENT,
  `alu_paterno` varchar(30) DEFAULT NULL,
  `alu_materno` varchar(30) DEFAULT NULL,
  `alu_nombre` varchar(30) DEFAULT NULL,
  `idusuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`idalumno`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

/*Data for the table `alumno` */

insert  into `alumno`(`idalumno`,`alu_paterno`,`alu_materno`,`alu_nombre`,`idusuario`) values (1,'DIAZ','ARENAS','DANIEL',1),(2,'MARENGO','CRIBILLEROS','KARINA',NULL),(3,'DIAZ','ARENAS','OSCAR',NULL),(4,'velarde','olivera','jorge pedro lucio',NULL),(5,'diaz','arenas','daniel jesus',NULL),(8,'marengo','cribilleros ','karina',NULL),(9,'marengo','espinoza','mario enrique',NULL),(10,'ppp','ppp','pp',NULL),(11,'pruebA','PRUEBA','PRUEBA',NULL),(12,'pruebAAAAA','PRUEBAAAA','PRUEBAAA',NULL),(13,'sdsd','sdsdsd','sdsd',2),(14,'sd','sdsd','sdsd',1),(15,'sd','sdsd','sdsd',1),(16,'sd','sdsd','sdsd',1),(17,'sd','sdsd','sdsd',1),(18,'sd','sdsd','sdsd',1),(19,'santos','chavez','luis',1),(20,'sd','sdsd','sdsd',1),(21,'nanomedi','nano','petardas',1);

/*Table structure for table `asignacion` */

DROP TABLE IF EXISTS `asignacion`;

CREATE TABLE `asignacion` (
  `idasignacion` int(11) NOT NULL AUTO_INCREMENT,
  `idcurso` int(11) DEFAULT NULL,
  `idgrado` int(11) DEFAULT NULL,
  `idnivel` int(11) DEFAULT NULL,
  `idprofesor` int(11) DEFAULT NULL,
  `idseccion` int(11) DEFAULT NULL,
  PRIMARY KEY (`idasignacion`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `asignacion` */

insert  into `asignacion`(`idasignacion`,`idcurso`,`idgrado`,`idnivel`,`idprofesor`,`idseccion`) values (1,1,1,1,1,1);

/*Table structure for table `correlativo` */

DROP TABLE IF EXISTS `correlativo`;

CREATE TABLE `correlativo` (
  `idcorrelativo` int(11) NOT NULL AUTO_INCREMENT,
  `cor_objeto` varchar(40) DEFAULT NULL,
  `cor_numero` char(25) DEFAULT NULL,
  `cor_descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idcorrelativo`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `correlativo` */

/*Table structure for table `curso` */

DROP TABLE IF EXISTS `curso`;

CREATE TABLE `curso` (
  `idcurso` int(11) NOT NULL AUTO_INCREMENT,
  `cur_nombre` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`idcurso`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `curso` */

insert  into `curso`(`idcurso`,`cur_nombre`) values (1,'COMPUTACION');

/*Table structure for table `descripcion_obligacion` */

DROP TABLE IF EXISTS `descripcion_obligacion`;

CREATE TABLE `descripcion_obligacion` (
  `iddescripcionobligacion` int(11) NOT NULL AUTO_INCREMENT,
  `des_descripcion` varchar(40) NOT NULL,
  `des_fecha` char(10) NOT NULL,
  PRIMARY KEY (`iddescripcionobligacion`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `descripcion_obligacion` */

insert  into `descripcion_obligacion`(`iddescripcionobligacion`,`des_descripcion`,`des_fecha`) values (1,'MATRICULA','10/03/2009'),(2,'PRIMERA CUOTA','10/04/2009'),(3,'SEGUNDA CUOTA','10/05/2009'),(4,'TERCERA CUOTA','10/06/2009'),(5,'CUARTA CUOTA','10/07/2009'),(6,'QUINTA CUOTA','10/08/2009'),(7,'SEXTA CUOTA','10/09/2009');

/*Table structure for table `grado` */

DROP TABLE IF EXISTS `grado`;

CREATE TABLE `grado` (
  `idgrado` int(11) NOT NULL AUTO_INCREMENT,
  `gra_descripcion` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`idgrado`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `grado` */

insert  into `grado`(`idgrado`,`gra_descripcion`) values (1,'PRIMERO');

/*Table structure for table `matricula` */

DROP TABLE IF EXISTS `matricula`;

CREATE TABLE `matricula` (
  `idmatricula` int(11) NOT NULL AUTO_INCREMENT,
  `idalumno` int(11) DEFAULT NULL,
  `mat_fecha` char(10) DEFAULT NULL,
  `mat_estado` char(1) DEFAULT NULL,
  `idnivel` int(11) DEFAULT NULL,
  `idgrado` int(11) DEFAULT NULL,
  `idseccion` int(11) DEFAULT NULL,
  PRIMARY KEY (`idmatricula`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `matricula` */

insert  into `matricula`(`idmatricula`,`idalumno`,`mat_fecha`,`mat_estado`,`idnivel`,`idgrado`,`idseccion`) values (1,1,'10/10/2009','1',1,1,1),(2,2,'10/10/2009','1',1,1,1),(3,3,'10/10/2009','1',1,1,1),(4,4,'10/10/2009','1',1,1,1);

/*Table structure for table `nivel` */

DROP TABLE IF EXISTS `nivel`;

CREATE TABLE `nivel` (
  `idnivel` int(11) DEFAULT NULL,
  `niv_descripcion` varchar(60) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `nivel` */

insert  into `nivel`(`idnivel`,`niv_descripcion`) values (1,'PRIMARIA');

/*Table structure for table `nota` */

DROP TABLE IF EXISTS `nota`;

CREATE TABLE `nota` (
  `idnota` int(11) NOT NULL AUTO_INCREMENT,
  `idasignacion` int(11) DEFAULT NULL,
  `idalumno` int(11) DEFAULT NULL,
  `trimestre` varchar(2) DEFAULT NULL,
  `nota` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`idnota`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `nota` */

/*Table structure for table `obligacion` */

DROP TABLE IF EXISTS `obligacion`;

CREATE TABLE `obligacion` (
  `idobligacion` int(11) NOT NULL AUTO_INCREMENT,
  `iddescripcionobligacion` int(11) DEFAULT NULL,
  `obl_fecha` char(10) DEFAULT NULL,
  `obl_monto` double DEFAULT NULL,
  `idalumno` int(11) DEFAULT NULL,
  PRIMARY KEY (`idobligacion`)
) ENGINE=MyISAM AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;

/*Data for the table `obligacion` */

insert  into `obligacion`(`idobligacion`,`iddescripcionobligacion`,`obl_fecha`,`obl_monto`,`idalumno`) values (80,1,NULL,200,1),(81,2,NULL,200,1),(82,3,NULL,200,1),(83,4,NULL,200,1),(84,5,NULL,220,1),(85,6,NULL,200,1),(86,7,NULL,200,1),(87,1,NULL,300,2),(88,2,NULL,300,2),(89,3,NULL,300,2),(90,4,NULL,300,2),(91,5,NULL,300,2),(92,6,NULL,300,2),(93,7,NULL,300,2);

/*Table structure for table `profesor` */

DROP TABLE IF EXISTS `profesor`;

CREATE TABLE `profesor` (
  `idprofesor` int(11) NOT NULL AUTO_INCREMENT,
  `pro_datos` varchar(70) DEFAULT NULL,
  `pro_estado` char(1) DEFAULT NULL,
  `idusuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`idprofesor`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `profesor` */

insert  into `profesor`(`idprofesor`,`pro_datos`,`pro_estado`,`idusuario`) values (1,'Daniel diaz arenas','1',3);

/*Table structure for table `seccion` */

DROP TABLE IF EXISTS `seccion`;

CREATE TABLE `seccion` (
  `idseccion` int(11) NOT NULL AUTO_INCREMENT,
  `sec_descripcion` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idseccion`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `seccion` */

insert  into `seccion`(`idseccion`,`sec_descripcion`) values (1,'A');

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL AUTO_INCREMENT,
  `usu_usuario` varchar(40) DEFAULT NULL,
  `usu_clave` varchar(25) DEFAULT NULL,
  `usu_tipo` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `usuario` */

insert  into `usuario`(`idusuario`,`usu_usuario`,`usu_clave`,`usu_tipo`) values (3,'daniel','123','2');

/* Procedure structure for procedure `sp_insertar_alumno` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_insertar_alumno` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_insertar_alumno`(
      IN paterno varchar(30),
      IN materno VARCHAR(30),
      in nombres VARCHAR(30)   
    )
BEGIN
      insert into alumno values(0,paterno,materno,nombres,1);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_insertar_nota` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_insertar_nota` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_insertar_nota`(
  in codasigacion int(11),
  in codalumno int(11),
  in trimestre varchar(2),
  in nota varchar(4) 
)
BEGIN
	insert into nota
	values(0,
	codasigacion,
	codalumno,
	trimestre,
	nota);	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_insertar_obligacion` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_insertar_obligacion` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_insertar_obligacion`(
     IN codobligacion int(11),
     in fecha char(10),
     in monto double,
     in codalumno int(11)      
    )
BEGIN
 insert into obligacion values
 (0,
  codobligacion,
  fecha,
  monto,
  codalumno      
 );
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_mostrar_alumno` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_mostrar_alumno` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_mostrar_alumno`()
BEGIN
	SELECT idalumno,CONCAT(alu_paterno,' ',alu_materno,' ',alu_nombre) AS datos FROM ALUMNO;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_mostrar_descripcion_obligacion` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_mostrar_descripcion_obligacion` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_mostrar_descripcion_obligacion`()
BEGIN
	SELECT iddescripcionobligacion,des_descripcion, des_fecha FROM descripcion_obligacion;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_valida_usuario` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_valida_usuario` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_valida_usuario`(
	IN usu VARCHAR(50),
	IN cla VARCHAR(50)
	)
BEGIN
	DECLARE tempusu VARCHAR(50);
	declare tempcla VARCHAR(50);
	(SELECT usu_usuario into tempusu FROM usuario WHERE usu_usuario=usu);
	(SELECT usu_clave into tempcla FROM usuario WHERE usu_usuario=tempusu AND usu_clave=cla);
	SELECT 	CASE WHEN (tempusu IS NULL) THEN	
			"usuario incorrecto"
		     WHEN (tempcla IS NULL) THEN	
		        "clave incorrecta"
		     WHEN (tempusu=usu AND tempcla=cla) THEN	
		     CONCAT("Bienvenido: ",tempusu)
		END as respuesta;
    END */$$
DELIMITER ;

/*Table structure for table `listarasignacion` */

DROP TABLE IF EXISTS `listarasignacion`;

/*!50001 DROP VIEW IF EXISTS `listarasignacion` */;
/*!50001 DROP TABLE IF EXISTS `listarasignacion` */;

/*!50001 CREATE TABLE  `listarasignacion`(
 `idasignacion` int(11) ,
 `cur_nombre` varchar(30) ,
 `niv_descripcion` varchar(60) ,
 `gra_descripcion` varchar(40) ,
 `sec_descripcion` varchar(20) ,
 `idprofesor` int(11) 
)*/;

/*Table structure for table `valumno` */

DROP TABLE IF EXISTS `valumno`;

/*!50001 DROP VIEW IF EXISTS `valumno` */;
/*!50001 DROP TABLE IF EXISTS `valumno` */;

/*!50001 CREATE TABLE  `valumno`(
 `idalumno` int(11) ,
 `datos` varchar(92) 
)*/;

/*Table structure for table `vdesobli` */

DROP TABLE IF EXISTS `vdesobli`;

/*!50001 DROP VIEW IF EXISTS `vdesobli` */;
/*!50001 DROP TABLE IF EXISTS `vdesobli` */;

/*!50001 CREATE TABLE  `vdesobli`(
 `iddescripcionobligacion` int(11) ,
 `des_descripcion` varchar(40) ,
 `des_fecha` char(10) 
)*/;

/*View structure for view listarasignacion */

/*!50001 DROP TABLE IF EXISTS `listarasignacion` */;
/*!50001 DROP VIEW IF EXISTS `listarasignacion` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `listarasignacion` AS select `a`.`idasignacion` AS `idasignacion`,`c`.`cur_nombre` AS `cur_nombre`,`n`.`niv_descripcion` AS `niv_descripcion`,`g`.`gra_descripcion` AS `gra_descripcion`,`s`.`sec_descripcion` AS `sec_descripcion`,`a`.`idprofesor` AS `idprofesor` from ((((`asignacion` `a` join `curso` `c` on((`c`.`idcurso` = `a`.`idcurso`))) join `nivel` `n` on((`n`.`idnivel` = `a`.`idnivel`))) join `grado` `g` on((`g`.`idgrado` = `a`.`idgrado`))) join `seccion` `s` on((`s`.`idseccion` = `a`.`idseccion`))) */;

/*View structure for view valumno */

/*!50001 DROP TABLE IF EXISTS `valumno` */;
/*!50001 DROP VIEW IF EXISTS `valumno` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `valumno` AS (select `alumno`.`idalumno` AS `idalumno`,concat(`alumno`.`alu_paterno`,_utf8' ',`alumno`.`alu_materno`,_utf8' ',`alumno`.`alu_nombre`) AS `datos` from `alumno`) */;

/*View structure for view vdesobli */

/*!50001 DROP TABLE IF EXISTS `vdesobli` */;
/*!50001 DROP VIEW IF EXISTS `vdesobli` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vdesobli` AS (select `descripcion_obligacion`.`iddescripcionobligacion` AS `iddescripcionobligacion`,`descripcion_obligacion`.`des_descripcion` AS `des_descripcion`,`descripcion_obligacion`.`des_fecha` AS `des_fecha` from `descripcion_obligacion`) */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
