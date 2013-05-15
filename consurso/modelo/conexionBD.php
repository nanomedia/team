<?php
class conexionBD
{
private $servidor="localhost";
private $usuario="root";
private $clave="";	
private $bd="bdpago";
private $cn=null;

private static $instancia=null;
    
		public static function getInstancia(){
		if(is_null(self::$instancia)){
			self::$instancia=new conexionBD();
			}
		return self::$instancia;
		}
		
	public function conectar(){
	$this->cn=mysql_connect($this->servidor,$this->usuario,$this->clave)or die(mysql_error());
	mysql_select_db($this->bd,$this->cn)or die(mysql_error());	
	}
	public function desconectar(){
	$this->cn=mysql_close();
	}
	public function consultar($sql){
	$lista=array();
	$rs=mysql_query($sql,$this->cn);
	if($rs)
		{
		while($fila=mysql_fetch_assoc($rs)){
			$lista[]=$fila;			
			}
		mysql_free_result($rs);
		}return $lista;
	}
	public function ejecutar($sql){
	mysql_query($sql,$this->cn);
	}

}
?>