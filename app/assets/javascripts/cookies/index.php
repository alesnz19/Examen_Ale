    <!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Guardar y recuperar Cookies</title>
	<link rel="stylesheet" type="text/css" href="css/default.css"/>
	<link rel="stylesheet" type="text/css" href="css/zeion.cookies.css"/>
	<style type="text/css">
	</style>
</head>
<body>
	<div class="page">
		<div class="content">
			<h1>Guardar y Recuperar Cookies con Javascript</h1>
			<hr />
			<p class="description">Este es un ejemplo pr&aacute;ctico del mecanismo para grabar y recuperar cookies. Utiliza este formulario para grabar algunas cookies y observa aquellas disponibles en el contenedor en la parte inferior.</p>
			<table>
				<tr>
					<td>Nombre:</td>
					<td><input id="txtNombre" type="text" size="50" required /></td>
				</tr>
				<tr>
					<td>Valor:</td>
					<td><input id="txtValor" type="text" size="50" required /></td>
				</tr>
				<tr>
					<td>Caducidad:</td>
					<td>
						<select id="ddlCaducidad">
							<option value="0" selected>Caduca al cerrar el explorador</option>
							<option value="5">5 minutos</option>
							<option value="10">10 minutos</option>
							<option value="NONE">No caduca</option>
						</select>
					</td>
				</tr>
				<tr>
					<td></td>
					<td><input type="button" value="Agregar" onclick="agregar();" /></td>
				</tr>
			</table>
		</div>
		<div id="cookies"></div>
		<div class="footer">Eduardo Ferr&oacute;n { Zeion Software }</div>
	</div>
	<script type="text/javascript" src="js/jquery.1.9.1.min.js"></script>
	<script type="text/javascript" src="js/zeion.cookies.js"></script>
	<script type="text/javascript">
	
		// esta rutina se ejecuta cuando jquery esta listo para trabajar
		var manager;
		$(function() 
		{
			// creamos una instancia del manejador de cookies
			manager = new zs_CookieManager();
			
			// agregamos el contenedor para desplegar las cookies actualmente registradas:
			manager.showCookies("#cookies");
		});
		
		// agrega una nueva cookie a la colección
		function agregar()
		{
			var nombre = $("#txtNombre").val();
			var valor = $("#txtValor").val();
			var caducidad = $("#ddlCaducidad").val();
			
			// asegúrate de tener los datos completos
			if ($.trim(nombre) == "")
			{
				alert("Necesitas especificar el nombre para la cookie");
				$("#txtNombre").focus();
				return;
			}
			if ($.trim(valor) == "")
			{
				alert("Necesitas especificar el valor para la cookie");
				$("#txtValor").focus();
				return;
			}
			
			// para efectos demostrativos, vamos a generar varias opciones
			switch (caducidad)
			{
				case "5": caducidad = 5 * 60; break;
				case "10": caducidad = 10 * 60; break;
				case "NONE": caducidad = Infinity; break;
				default: caducidad = false;
			}
			
			manager.add(nombre, valor, caducidad);
			manager.showCookies("#cookies");
			
			// limpiamos el formulario
			$("#txtValor").val("");
			$("#txtNombre").val("").focus();
		}
		
	</script>
</body>
</html>