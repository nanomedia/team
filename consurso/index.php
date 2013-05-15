
<form action="controlador/nuevoAlumno.php" method="post">
<table width="200" border="1" cellspacing="4">
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>paterno</td>
    <td><label for="textfield"></label>
      <input type="text" name="txtpaterno" id="textfield"></td>
  </tr>
  <tr>
    <td>materno</td>
    <td><label for="textfield2"></label>
      <input type="text" name="txtmaterno" id="textfield2"></td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><label for="textfield3"></label>
      <input type="text" name="txtnombre" id="textfield3"></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td><input type="submit" name="button" id="button" value="Enviar"></td>
  </tr>
</table>

</form>
<div>
<form action="controlador/validarUsuario.php" method="post">
<table width="200" border="1" cellspacing="4">
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>usuario:</td>
    <td><label for="textfield4"></label>
      <input type="text" name="txtusuario" id="textfield4"></td>
  </tr>
  <tr>
    <td>clave:</td>
    <td><label for="textfield5"></label>
      <input type="password" name="txtclave" id="textfield5"></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><input type="submit" name="button2" id="button2" value="Enviar"></td>
    </tr>
</table>


</form>
</div>



