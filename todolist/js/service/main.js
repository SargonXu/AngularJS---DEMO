(function(angular){
	angular.module('app.service.main',[])
		.service('MainService',['$window',function($window){
			var storage = $window.localStorage;
			var todolist = storage["todolist"]? JSON.parse(storage["todolist"]):[];

			// 生成新添加todolist项id函数
			function getId(){
				var newId = Math.random();
				for(var i=0;i<todolist.length;i++){
					if(newId === todolist[i].id){
						newId = getId();
						break;
					}
				}
				return newId;
			}

			this.save = function(){
				storage["todolist"] = JSON.stringify(todolist);
				// return todolist;
			};

			this.get = function(){
				return todolist;
			};

			// 添加todolist项
			this.add = function(text){
				todolist.push({
					id:getId(),
					content:text,
					completed:false
				});
				this.save();
			};

			// 删除todolist项
			this.remove = function(id){
				for(var i=0;i<todolist.length;i++){
					if(id === todolist[i].id){
						todolist.splice(i,1);
						break;
					}
				}
				this.save();
			};

			// 清空已完成todolist项
			this.clear = function(){
				for(var i=0;i<todolist.length;i++){
					if(todolist[i].completed){
						todolist.splice(i,1);
						i=i-1;
					}
				}
				this.save();
			};

		    // clear按钮的显示
		    this.display = function(){
		      for(var i = 0; i < todolist.length; i++){
		        if(todolist[i].completed){
		          return true;
		        }
		      }
		        return false;
		    };

			// 全选切换
			var check = true;
			this.toggleAll = function(){
				for(var i = 0; i < todolist.length; i++){
					todolist[i].completed = check;
				}
				this.save();
				check = !check;
			};

		}]);
})(angular);