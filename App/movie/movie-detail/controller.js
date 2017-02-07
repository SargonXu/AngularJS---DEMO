(function(angular){
	'use strict';

	// 创建电影模块
	var moduleMovieDetail = angular.module('app.movie.detail',[
		'ngRoute',
		'app.services.http'
		])
	// 配置模块路由
		.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/movie/subject/:id',{
				templateUrl:'movie/movie-detail/view.html',
				controller:'MovieDetailController'
			});
		}]);
	// 创建电影模块内控制器
	moduleMovieDetail.controller('MovieDetailController',[
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		function($scope,$route,$routeParams,HttpService){
			$scope.movie = {};

			// 异步请求方法
			HttpService.jsonp('https://api.douban.com/v2/'+'movie/'+$routeParams.id,{},
				function(data){
					$scope.movie = data;
					// $apply的作用就是让指定的表达式重新同步
					$scope.$apply();
				});
	}]);
})(angular);