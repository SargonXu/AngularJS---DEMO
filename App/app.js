'use strict';
// 主模块入口，注入依赖模块
angular.module('app',[
	'ngRoute',
	'app.directives.autoFocus',
	'app.movie.detail',
	'app.movie',
	'app.music',
	'app.music.detail',
	'app.book',
	'app.book.detail'
	])
// 配置路由默认转向地址
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.otherwise({redirectTo:'/movie/in_theaters/1'});
	}]);
