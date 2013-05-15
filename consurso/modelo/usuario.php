<?php
class usuario{
private $idusuario;
private $usu_usuario;
private $usu_clave;
private $usu_tipo;

public function __set($valor,$dato){
switch($valor){
	case 'idusuario':$this->idusuario=$dato;break;
	case 'usu_usuario':$this->usu_usuario=$dato;break;
	case 'usu_clave':$this->usu_clave=$dato;break;
	case 'usu_tipo':$this->usu_tipo=$dato;break;
	}	
}
public function get_idusuario(){
	return $this->idusuario;
}
public function get_usu_usuario(){
	return $this->usu_usuario;
}
public function get_usu_clave(){
	return $this->usu_clave;
}
public function get_usu_tipo(){
	return $this->usu_tipo;
}
}
?>