(function (angular) {
	'use strict';
	var app = angular.module('toDoMvc',['ngRoute','app.controllers.main','app.service.main']);

	app.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/:status?',{
				controller:'MainController',
				templateUrl:'main_template'
			})
			.otherwise({redirectTo:'/'});
	}]);


	// myApp.controller('MainController',['$scope','$route','$routeParams',function($scope,$route,$routeParams){
	// 	// 输入框内容
	// 	$scope.text = "";

	// 	// todolist列表
	// 	$scope.todolist = [{
	// 		id:1,
	// 		content:"吃早饭",
	// 		completed:true
	// 	},{
	// 		id:2,
	// 		content:"锻炼",
	// 		completed:false
	// 	},{
	// 		id:3,
	// 		content:"学习",
	// 		completed:false
	// 	}];

	// 	// 添加todolist项
	// 	$scope.add = function(){
 //      if(!$scope.text){
 //        return;
 //      }
	// 		$scope.todolist.push({
	// 			id:getId(),
	// 			content:$scope.text,
	// 			completed:false
	// 		});
	// 		$scope.text = "";
	// 	};

	// 	// 删除todolist项
	// 	$scope.remove = function(id){
	// 		for(var i=0;i<$scope.todolist.length;i++){
	// 			if(id === $scope.todolist[i].id){
	// 				$scope.todolist.splice(i,1);
	// 				break;
	// 			}
	// 		}
	// 	};

	// 	// 清空已完成todolist项
	// 	$scope.clear = function(){
	// 		for(var i=0;i<$scope.todolist.length;i++){
	// 			if($scope.todolist[i].completed){
	// 				$scope.todolist.splice(i,1);
	// 				i=i-1;
	// 			}
	// 		}
	// 	};

 //    // clear按钮的显示
 //    $scope.display = function(){
 //      for(var i=0;i<$scope.todolist.length;i++){
 //        if($scope.todolist[i].completed){
 //          return true;
 //        }
 //        return false;
 //      }
 //    };

	// // 全选切换
	// var check = true;
	// $scope.toggleAll = function(){
	// 	for(var i=0;i<$scope.todolist.length;i++){
	// 		$scope.todolist[i].completed = check;
	// 	}
	// 	check = !check;
	// };

	// $scope.currentEditingId = -1;
	// // 编辑选项
	// $scope.editing = function(id){
	// 	$scope.currentEditingId = id;
	// }

	// //保存编辑项
	// $scope.save = function(){
	// 	$scope.currentEditingId=-1;
	// };

	// // 生成新添加todolist项id函数
	// function getId(){
	// 	var newId = Math.random();
	// 	for(var i=0;i<$scope.todolist.length;i++){
	// 		if(newId === $scope.todolist[i].id){
	// 			newId = getId();
	// 			break;
	// 		}
	// 	}
	// 	return newId;
	// }

 //    // 筛选按钮是否选中
    

 //    // 筛选所用字符串
 //    $scope.selector = {};

 //    // $scope.$location = $location;
    
 //    var status = $routeParams.status;

	// switch(status){
		
 //    	case '/active':
 //    		$scope.selector = {completed:false};
 //    		break;
 //    	case '/completed':
 //    		$scope.selector = {completed:true};
 //    		break;
 //    	default:
 //    		$route.updateParams({status:''});
 //    		$scope.selector = {};
	// }

 //    $scope.equalCompare = function(source,target){
 //    	return source === target;
 //    };

	// }]);
	
})(angular);
