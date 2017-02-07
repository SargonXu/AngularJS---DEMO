(function(angular){
	'use strict';

	// 创建电影模块
	var moduleMovieDetail = angular.module('app.book.detail',[
		'ngRoute',
		'app.services.http'
		])
	// 配置模块路由
		.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/book/subject/detail/1/:id',{
				templateUrl:'book/book-detail/view.html',
				controller:'BookDetailController'
			});
		}]);
	// 创建电影模块内控制器
	moduleMovieDetail.controller('BookDetailController',[
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		function($scope,$route,$routeParams,HttpService){
			$scope.book = {};

			// 异步请求方法
			HttpService.jsonp('https://api.douban.com/v2/book/'+$routeParams.id,{},
				function(data){
					$scope.book = data;
					// $apply的作用就是让指定的表达式重新同步
					$scope.$apply();
				});
	}]);
})(angular);