(function() {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
		// determine which view (state) is loaded in the model view
		$stateProvider
			.state('landing', {
				url: '/',
				controller: 'LandingCtrl as landing',
				templateUrl: '/templates/landing.html'
			})
			.state('album', {
				url: '/album/:albumName',
				controller: 'AlbumCtrl as album',
				templateUrl: '/templates/album.html'
			})
			.state('collection', {
				url: '/collection',
				controller: 'CollectionCtrl as collection',
				templateUrl: '/templates/collection.html'
			});

	}

	angular
		.module('blocJams', ['ui.router'])
		.config(config);

})();