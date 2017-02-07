(function(angular){
	'use strict';

	// 创建电影模块
	var moduleMusicDetail = angular.module('app.music.detail',[
		'ngRoute',
		'app.services.http'
		])
	// 配置模块路由
		.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/music/:id',{
				templateUrl:'music/music-detail/view.html',
				controller:'MusicDetailController'
			});
		}]);
	// 创建电影模块内控制器
	moduleMusicDetail.controller('MusicDetailController',[
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		function($scope,$route,$routeParams,HttpService){
			$scope.music = {};

			// 异步请求方法
			HttpService.jsonp('https://api.douban.com/v2/'+'music/'+$routeParams.id,{},
				function(data){
					$scope.music = data;
					// $apply的作用就是让指定的表达式重新同步
					$scope.$apply();
				});
	}]);
})(angular);