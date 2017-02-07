(function(angular){
	'use strict';
	angular.module('app.directives.autoFocus',[])
		.directive('autoFocus', ['$location', function($location){
			// Runs during compile
			var path = $location.path();
			return {
				restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
				link: function($scope, iElm, iAttrs, controller) {
					var aHref = iElm.children().attr('href');
					var type = aHref.replace(/#(\/.+\/.+?)\/\d+/,'$1');
					if(path.startsWith(type)){
						iElm.addClass('active');
					}
					iElm.on('click',function(){
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');
					});
				}
			};
		}]);
})(angular);