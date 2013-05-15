<?
include_once"../modelo/conexionBD.php";
include_once"../modelo/usuario.php";
include_once"controladorDAO.php";
$dao=new controladorDAO();
$usu=new usuario();
$usu->usu_usuario=$_POST["txtusuario"];
$usu->usu_clave=$_POST["txtclave"];
echo "<script language=\"javascript\"> alert(\"".$dao->validaUsuario($usu)."\");</script>";
?>