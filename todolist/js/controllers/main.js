(function(angular){

	var controllers = angular.module('app.controllers.main',['app.service.main'])

	controllers.controller('MainController',['$scope','$route','$routeParams','MainService',function($scope,$route,$routeParams,MainService){
		// 输入框内容
		$scope.text = "";

		// todolist列表
		$scope.todolist = MainService.get();

		// 添加todolist项
		$scope.add = function(){
	        if(!$scope.text){
	        	return;
	        }
			MainService.add($scope.text);
			$scope.text = "";
		};

		// 删除todolist项
		$scope.remove = function(id){
			MainService.remove(id);
		};

		// 清空已完成todolist项
		$scope.clear = MainService.clear;

	    // clear按钮是否显示
	    $scope.display = MainService.display;
		// 全选切换
		$scope.toggleAll = function(){
			MainService.toggleAll();
		};

	    $scope.toggle = MainService.save;

		$scope.currentEditingId = -1;
		// 编辑选项
		$scope.editing = function(id){
			$scope.currentEditingId = id;
		}

		//保存编辑项
		$scope.save = function(){
			$scope.currentEditingId=-1;
		};

		/*// 生成新添加todolist项id函数
		function getId(){
			var newId = Math.random();
			for(var i=0;i<$scope.todolist.length;i++){
				if(newId === $scope.todolist[i].id){
					newId = getId();
					break;
				}
			}
			return newId;
		}*/

	    // 筛选按钮是否选中
	    

	    // 筛选所用字符串
	    $scope.selector = {};

	    // $scope.$location = $location;
	    
	    var status = $routeParams.status;

		switch(status){
			
	    	case 'active':
	    		$scope.selector = {completed:false};
	    		break;
	    	case 'completed':
	    		$scope.selector = {completed:true};
	    		break;
	    	default:
	    		$route.updateParams({status:''});
	    		$scope.selector = {};
		}

	    $scope.equalCompare = function(source,target){
	    	return source === target;
	    };

	}]);
})(angular);