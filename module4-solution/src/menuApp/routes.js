(function() {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
	// Redirect to home page if no other URL matches
	$urlRouterProvider.otherwise('/');

	// Setup UI states
	$stateProvider

	// home page
	.state('home', {
		url: '/',
		templateUrl: 'src/menuApp/home.template.html'
	});

	// categories

	// items
}

})();