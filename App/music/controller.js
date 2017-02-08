(function(angular){
	'use strict';

	// 创建电影模块
	var module = angular.module('app.music',[
		'ngRoute',
		'app.services.http',
		'app.music.search'
		])
	// 配置模块路由
		.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/:category/:type/:kind/:page',{
				templateUrl:'music/view.html',
				controller:'MusicController'
			});
		}]);
	// 创建电影模块内控制器
	module.controller('MusicController',[
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		function($scope,$route,$routeParams,HttpService){
			// 每页显示条数
			var count = 8;
			// 当前页
			var page = 1;
			// 数据请求的开始数字
			var start = 0;

			$scope.loading = true;
			$scope.music = {};
			$scope.message = "";
			$scope.title = "";
			$scope.data = [];
			$scope.total = 0;
			$scope.pages = 0;
			$scope.currentPage = parseInt($routeParams.page);
			$scope.href="";
			start = ($scope.currentPage -1)*count;

			// 异步请求方法
			function Ajax(){
				HttpService.jsonp('https://api.douban.com/v2/music/search',{start:start,count:count,tag:$routeParams.kind},
					function(data){
						$scope.title = data.title;
						$scope.total = data.total;
						$scope.pages = Math.ceil($scope.total/count);
						$scope.data = data.musics;
						$scope.href="#/music/search/"+$routeParams.kind+"/"+$routeParams.page;
						$scope.loading = false;
						// $apply的作用就是让指定的表达式重新同步
						$scope.$apply();
					});
			}
			Ajax();

			$scope.updatePage = function(page){
				if(page >= 1 && page <= $scope.pages){
					$route.updateParams({page:page})
				}
			}
	}]);
	var moduleSearch = angular.module("app.music.search",["app.services.http"]);
	moduleSearch.controller("MusicSearchController",["$scope","$route",function($scope,$route){
		$scope.input = "";
		$scope.search = function(){
			$route.updateParams({
				kind:$scope.input
			});
		};
	}]);
})(angular);