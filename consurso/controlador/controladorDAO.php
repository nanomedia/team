<?php
class controladorDAO
{
//******************	
//***TABLA ALUMNO***
public function mostrarAlumno(alumno $alu){
$con=conexionBD::getInstancia();
$cod=$alu->getCodigo();
$con->conectar();
$rs=$con->consultar("select * from alumno where idalumno=".$cod."and ");
$con->desconectar();
return $rs;
}

public function insertarAlumno(alumno $alu){

$con=conexionBD::getInstancia();
$con->conectar();

$paterno=$alu->get_alu_paterno();
$materno=$alu->get_alu_materno();
$nombre=$alu->get_alu_nombre();

$con->ejecutar("CALL sp_insertar_alumno('".$paterno."','".$materno."','".$nombre."')");
$con->desconectar();	
	
}

public  function validaUsuario(usuario $usu){
$con=conexionBD::getInstancia();
$con->conectar();

$usuario=$usu->get_usu_usuario();
$clave=$usu->get_usu_clave();
$rs=$con->consultar("CALL sp_valida_usuario('".$usuario."','".$clave."')");
foreach($rs as $respuesta){
$rpta=$respuesta["respuesta"];
}
return $rpta;
$con->desconectar();	
}



}
?>