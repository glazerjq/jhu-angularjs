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
		templateUrl: 'src/menuApp/templates/home.template.html'
	})

	// categories
	.state('categories', {
		url: '/categories',
		templateUrl: 'src/data/templates/categories-list.template.html',
		controller: 'DataController',
		resolve: {
			categories: ['MenuDataService', function(MenuDataService) {
				return MenuDataService.getAllCategories();
			}]
		}
	});

	// items
	// .state('items', {
	// 	url: '/items',
	// 	templateUrl: 'src/data/templates/items.template.html'
	// });
}

})();