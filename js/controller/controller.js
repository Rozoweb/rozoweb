angular
	.module('catalogoModule', [])
	
	.controller('catalogoCtrl', function($scope){
		$scope.nuevoPais = {};
		$scope.Negocios = [
		
		{
			'categoria': 'Supermercado',
			'nombreNegocio': 'Supermercados ARA',
			'descripcion': 'Productos de consumo masivo y canasta familiar',
			'Telefono': '3133077251 - 3103595583',
			'Telefono2': '3128445744',
		},
		{
			'categoria': 'Supermercado',
			'nombreNegocio': 'Supermercado Belalcazar',
			'descripcion': 'Productos de consumo masivo y canasta familiar',
			'Telefono': '3012673579 - 3224920204',
			'Telefono2': '3187162232'
		},
		{
			'categoria': 'Supermercado',
			'nombreNegocio': 'Tiendas D1',
			'descripcion': 'Productos de consumo masivo y canasta familiar',
			'Telefono': '313 3077251 - 310 3595583',
			'Telefono2': '3128445744',
		},
		{
			'categoria': 'Drogueria',
			'nombreNegocio': 'Drogas Super Descuento',
			'descripcion': 'Productos farmacéuticos',
			'Telefono': '3206860550 - 3155047052',
			'Telefono2': '3206664833 - 3232240802',
		},
		{
			'categoria': 'Drogueria',
			'nombreNegocio': 'Drogueria el parque',
			'descripcion': 'Productos farmacéuticos',
			'Telefono': '3136659153',
			'Telefono2': '-',
		},
		{
			'categoria': 'Drogueria',
			'nombreNegocio': 'Drogueria Claudia',
			'descripcion': 'Productos farmacéuticos',
			'Telefono': '3185066463',
			'Telefono2': '-',
		},
		{
			'categoria': 'Drogueria',
			'nombreNegocio': 'Droguería la Botica de la Abuela',
			'descripcion': 'Productos farmacéuticos',
			'Telefono': '3136122315',
			'Telefono2': '-',
		},
		{
			'categoria': 'Drogueria',
			'nombreNegocio': 'Droguería Interdrogas',
			'descripcion': 'Productos farmacéuticos',
			'Telefono': '3128785290',
			'Telefono2': '8891010',
		},
		{
			'categoria': 'Restaurante',
			'nombreNegocio': 'Broaster Chicken',
			'descripcion': 'Pollo asado, pollo apanado, consomé, arróz con pollo, entre otros.',
			'Telefono': '3206125902',
			'Telefono2': '3188555669',
		},
		{
			'categoria': 'Restaurante',
			'nombreNegocio': 'Almuerzos',
			'descripcion': 'Almuerzos caseros, sancocho de gallina, pollo, carne de cerdo, res, entre otros.',
			'Telefono': '3168714359',
			'Telefono2': '3185229984',
		},
		{
			'categoria': 'Agricolas',
			'nombreNegocio': 'AgroCampo ',
			'descripcion': 'Productos del agro para mascotas, concentrados, medicamentos y accesorios',
			'Telefono': '3147010261',
			'Telefono2': '310 310 3110',
		},
		{
			'categoria': 'Avicolas',
			'nombreNegocio': 'CerPollo',
			'descripcion': 'Pollo campesino y carne de cerdo',
			'Telefono': '3146094406',
			'Telefono2': '-',
		},
		{
			'categoria': 'Avicolas',
			'nombreNegocio': 'Pollos Doña Carmen',
			'descripcion': 'Pollo campesino',
			'Telefono': '3187734261',
			'Telefono2': '-',
		},
		{
			'categoria': 'Trámites',
			'nombreNegocio': 'Masivos Rozo ',
			'descripcion': 'Generación de certificados, antecedentes, pines y afiliación a plataformas de entretenimiento digital (Netflix, Spotify, Amazon, DirecTV, etc), recargas, SOAT, fotocopias, impresiones y más.',
			'Telefono': '3174924081',
			'Telefono2': '-',
		}
		

		];		
		
	});



