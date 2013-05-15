<?php
include_once"controladorDAO.php";
include_once"../modelo/conexionBD.php";
include_once"../modelo/alumno.php";

$dao=new controladorDAO();
$alu=new alumno();

$alu->alu_paterno=$_POST["txtpaterno"];
$alu->alu_materno=$_POST["txtmaterno"];
$alu->alu_nombre=$_POST["txtnombre"];

$dao->insertarAlumno($alu);
//foreach($dao->mostrarAlumno($alu) as $resp){
//$combo.="<option>".$resp["alu_paterno"]."</option>";
//}
?>