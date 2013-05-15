<?php
class alumno{
private $idalumno;
private $alu_paterno;	
private $alu_materno;
private $alu_nombre;

	public function __set($valor,$dato)
	{
	switch($valor)	
		{
		case 'idalumno':$this->idalumno=$dato;break;
		case 'alu_paterno':$this->alu_paterno=$dato;break;
		case 'alu_materno':$this->alu_materno=$dato;break;
		case 'alu_nombre':$this->alu_nombre=$dato;break;
		
		}
	}
	
	public function get_idalumno(){
		return $this->idalumno;
		}
	public function get_alu_paterno(){
		return $this->alu_paterno;
		}
	public function get_alu_materno(){
		return $this->alu_materno;
		}
	public function get_alu_nombre(){
		return $this->alu_nombre;
		}			
	
}

?>