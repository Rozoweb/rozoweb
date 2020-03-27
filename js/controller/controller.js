angular
	.module('catalogoModule', [])
	
	.controller('catalogoCtrl', function($scope){
		$scope.Negocios = [
		
		{
			'categoria': 'Supermercado',
			'image' : 'img/ara.jpeg',
			'nombreNegocio': 'Supermercados ARA',
			'descripcion': 'Productos de consumo masivo y canasta familiar',
			'Telefono': '3133077251 - 3103595583',
			'Telefono2': '3128445744',
		},
		{
			'categoria': 'Supermercado',
			'image' : 'img/belalcazar.jpeg',
			'nombreNegocio': 'Supermercado Belalcazar',
			'descripcion': 'Productos de consumo masivo y canasta familiar',
			'Telefono': '3012673579 - 3224920204',
			'Telefono2': '3187162232'
		},
		{
			'categoria': 'Supermercado',
			'image' : 'img/d1.jpeg',
			'nombreNegocio': 'Tiendas D1',
			'descripcion': 'Productos de consumo masivo y canasta familiar',
			'Telefono': '313 3077251',
			'Telefono2': '310 3595583',
		},
		{
			'categoria': 'Drogueria',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Drogas Super Descuento',
			'descripcion': 'Productos farmacéuticos',
			'Telefono': '3206860550 - 3155047052',
			'Telefono2': '3206664833 - 3232240802',
		},
		{
			'categoria': 'Drogueria',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Drogueria el parque',
			'descripcion': 'Productos farmacéuticos',
			'Telefono': '3136659153',
			'Telefono2': '-',
		},
		{
			'categoria': 'Drogueria',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Drogueria Claudia',
			'descripcion': 'Productos farmacéuticos',
			'Telefono': '3185066463',
			'Telefono2': '-',
		},
		{
			'categoria': 'Drogueria',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Droguería la Botica de la Abuela',
			'descripcion': 'Productos farmacéuticos',
			'Telefono': '3136122315',
			'Telefono2': '-',
		},
		{
			'categoria': 'Drogueria',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Droguería Interdrogas',
			'descripcion': 'Productos farmacéuticos',
			'Telefono': '3128785290',
			'Telefono2': '',
		},
		{
			'categoria': 'Drogueria',
			'image' : 'img/eldescuento.jpeg',
			'nombreNegocio': 'Droguería El descuento',
			'descripcion': 'Productos farmacéuticos',
			'Telefono': '313 6659153',
			'Telefono2': '',
		},
		{
			'categoria': 'Restaurante',
			'image' : 'img/broaster.jpg',
			'nombreNegocio': 'Broaster Chicken',
			'descripcion': 'Pollo asado, pollo apanado, consomé, arróz con pollo, entre otros.',
			'Telefono': '3206125902',
			'Telefono2': '3188555669',
		},
		{
			'categoria': 'Restaurante',
			'image' : 'img/brasascali.jpeg',
			'nombreNegocio': 'Asadero Brasas Cali',
			'descripcion': 'Pollo asado, pollo apanado, entre otros.',
			'Telefono': '312 6649974',
			'Telefono2': '',
		},
		{
			'categoria': 'Restaurante',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Almuerzos',
			'descripcion': 'Almuerzos caseros, sancocho de gallina, pollo, carne de cerdo, res, entre otros.',
			'Telefono': '3168714359',
			'Telefono2': '3185229984',
		},
		{
			'categoria': 'Restaurante',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Broaster Chicken',
			'descripcion': 'Pollo asado, pollo apanado, consomé, arróz con pollo, entre otros.',
			'Telefono': '3206125902',
			'Telefono2': '3188555669',
		},
		{
			'categoria': 'Agricolas',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'AgroCampo ',
			'descripcion': 'Productos del agro para mascotas, concentrados, medicamentos y accesorios',
			'Telefono': '3147010261',
			'Telefono2': '310 310 3110',
		},
		{
			'categoria': 'Carnicos',
			'nombreNegocio': 'Productos cárnicos',
			'image' : 'img/domicilio.png',
			'descripcion': 'Pollo campesino',
			'Telefono': '3113691402',
			'Telefono2': '-',
		},
		{
			'categoria': 'Carnicos',
			'nombreNegocio': 'La abundancia',
			'image' : 'img/abundancia.jpg',
			'descripcion': 'productos carnicos, carne fresca.',
			'Telefono': '311 3691402',
			'Telefono2': '-',
		},
		{
			'categoria': 'Avicolas',
			'image' : 'img/cerpollo.jpeg',
			'nombreNegocio': 'CerPollo',
			'descripcion': 'Pollo campesino y carne de cerdo',
			'Telefono': '3146094406',
			'Telefono2': '-',
		},
		{
			'categoria': 'Avicolas',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Pollos Doña Carmen',
			'descripcion': 'Pollo campesino',
			'Telefono': '3187734261',
			'Telefono2': '-',
		},
		{
			'categoria': 'Aseo y hogar',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Cristalería y variedades SurtiHogar',
			'descripcion': 'Productos para el aseo del hogar',
			'Telefono': '3127649165',
			'Telefono2': '3146739901',
		},
		{
			'categoria': 'Aseo y hogar',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Almacén Plastiaseo ',
			'descripcion': 'Productos desechables',
			'Telefono': '3182854255',
			'Telefono2': '-',
		},
		{	
			'categoria': 'Comidas rápidas',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Productos de choclo Maizal Roceño',
			'descripcion': 'Arepas, masa, envueltos de choclo, arepa de huevo, chuzos, chorizos, jugo natural',
			'Telefono': '3155373787',
			'Telefono2': '3117156854',
		},
		{
			'categoria': 'Sorpresas y desayunos',
			'image' : 'img/desayunosmeli.jpeg',
			'nombreNegocio': 'Desayunos & Antojitos Meli',
			'descripcion': 'Desayunos sospresa, mediamañana, media tarde, ancheta, guacal, bouquet de globos Meli',
			'Telefono': '317 3144823181',
			'Telefono2': '-',
		},
		{	
			'categoria': 'Comidas rápidas',
			'image' : 'img/escarchados.jpeg',
			'nombreNegocio': 'Escarchados',
			'descripcion': 'Arepa de maíz cruda, hamburguesa, salchipapa y chorizo',
			'Telefono': '3155291008',
			'Telefono2': '-',
		},
		{	
			'categoria': 'Comidas rápidas',
			'image' : 'img/lamona.jpeg',
			'nombreNegocio': 'Comidas rapidas la Mona',
			'descripcion': 'Hamburguesas, colitas cubanas, perros calientes, choriperros',
			'Telefono': '321 8116697',
			'Telefono2': '-',
		},
		{
			'categoria': 'Panaderia',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Panadería Rozo Pan',
			'descripcion': 'Panadería',
			'Telefono': '3147045051',
			'Telefono2': '3146186960',
		},
		{
			'categoria': 'Panaderia',
			'image' : 'img/pandis.jpg',
			'nombreNegocio': 'Panadería Pandis',
			'descripcion': 'Pan tajado, pan perro, pan hamburguesa',
			'Telefono': '316 4982602',
			'Telefono2': '',
		},
		{
			'categoria': 'Heladeria',
			'image' : 'img/fantasilandia.png',
			'nombreNegocio': 'Fantasilandia Frozen',
			'descripcion': 'Heladería',
			'Telefono': '317 6396825',
			'Telefono2': '-',
		},
		{	
			'categoria': 'Comidas rápidas',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Aquí es QUINA',
			'descripcion': 'Asados y comidas rápidas',
			'Telefono': '3173135699',
			'Telefono2': '-',
		},
		{	
			'categoria': 'Comidas rápidas',
			'image' : 'img/marcos.jpeg',
			'nombreNegocio': 'Comidas rapidas donde Marcos',
			'descripcion': 'Perros calientes, hamburguesas, chorizos',
			'Telefono': '312 6468002',
			'Telefono2': '-',
		},
		{	
			'categoria': 'Comidas rápidas',
			'image' : 'img/dfrutas.jpg',
			'nombreNegocio': 'Dfrutas',
			'descripcion': 'Perros calientes, hamburguesas, heladeria, jugos naturales.',
			'Telefono': '322 8240887',
			'Telefono2': '-',
		},
		{	
			'categoria': 'Comidas rápidas',
			'image' : 'img/perroloco.jpeg',
			'nombreNegocio': 'Perro loco',
			'descripcion': 'Perros calientes, hamburguesas, chorizos, colitas y más',
			'Telefono': '315 7465115',
			'Telefono2': '-',
		},
		{
			'categoria': 'Heladeria',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Dream Heladería',
			'descripcion': 'Heladería',
			'Telefono': '3165397091',
			'Telefono2': '-',
		},
		{
			'categoria': 'Tienda',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Tienda y revueltería el Paisa',
			'descripcion': 'Productos de la canasta familiar',
			'Telefono': '3215206513',
			'Telefono2': '-',
		},
		{
			'categoria': 'Barbería',
			'image' : 'img/yepe.jpeg',
			'nombreNegocio': 'Yepe barber shop',
			'descripcion': 'Peluqueria yepe barber shop, depilacion cejas, cortes americanos, figuras, corte con tijera',
			'Telefono': '301 3250450',
			'Telefono2': '-',
		},
		{
			'categoria': 'Quesera',
			'image' : 'img/queseralaprimavera.jpg',
			'nombreNegocio': 'Quesera y salsamentaria',
			'descripcion': 'Lacteos, huevos, carnes frías, desechables, y más',
			'Telefono': '315 6571204',
			'Telefono2': '-',
		},
		{
			'categoria': 'Tramites',
			'image' : 'img/domicilio.png',
			'nombreNegocio': 'Masivos Rozo ',
			'descripcion': 'Generación de certificados, antecedentes, pines y afiliación a plataformas de entretenimiento digital (Netflix, Spotify, Amazon, DirecTV, etc), recargas, SOAT, fotocopias, impresiones y más.',
			'Telefono': '3174924081',
			'Telefono2': '-',
		},

		];		
		
	});



