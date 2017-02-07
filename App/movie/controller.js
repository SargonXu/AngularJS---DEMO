(function(angular){
	'use strict';

	// 创建电影模块
	var module1 = angular.module('app.movie',[
		'ngRoute',
		'app.services.http',
		'app.movie.search'
		])
	// 配置模块路由
		.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/:category/:type/:page',{
				templateUrl:'movie/view.html',
				controller:'MovieController'
			});
		}]);
	// 创建电影模块内控制器
	module1.controller('MovieController',[
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		function($scope,$route,$routeParams,HttpService){
			// 每页显示条数
			var count = 10;
			// 当前页
			var page = 1;
			// 数据请求的开始数字
			var start = 0;

			$scope.loading = true;
			$scope.movie = {};
			$scope.message = "";
			$scope.title = "";
			$scope.data = [];
			$scope.total = 0;
			$scope.pages = 0;
			$scope.currentPage = parseInt($routeParams.page);
			$scope.hash = $routeParams.category+"/"+$routeParams.type;

			start = ($scope.currentPage -1)*count;

			// 异步请求方法
			function Ajax(){
				HttpService.jsonp('https://api.douban.com/v2/'+$scope.hash,{start:start,count:count,q:$routeParams.q},
					function(data){
						$scope.title = data.title;
						$scope.total = data.total;
						$scope.pages = Math.ceil($scope.total/count);
						$scope.data = data.subjects;
						$scope.loading = false;
						// $apply的作用就是让指定的表达式重新同步
						$scope.$apply();
					});
			}
			Ajax();

			$scope.updatePage = function(page){
				if (page >= 1 && page <= $scope.pages){
					$route.updateParams({page:page});
				}
			}
	}]);
	var moduleSearch = angular.module("app.movie.search",["app.services.http"]);
	moduleSearch.controller("MovieSearchController",["$scope","$route",function($scope,$route){
		$scope.input = "";
		$scope.search = function(){
			$route.updateParams({
				type:"search",
				q:$scope.input
			});
		};
	}]);
})(angular);