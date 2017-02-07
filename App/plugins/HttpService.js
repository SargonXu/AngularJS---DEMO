(function(angular){
	var http = angular.module('app.services.http',[]);
	http.service('HttpService', ['$window','$document', function($window,$document){
		this.jsonp = function(url,data,callback){
			
			// 随机一个随机数，然后转成一窜数字字符串
			var numberString = Math.random().toString().replace('.','');
			// 请求中传入的回调函数名
			var callbackName = 'my_callback'+numberString;
			// 将该回调函数挂在window对象下全局可访问，并将该函数指向作为参数传入的callback函数
			$window[callbackName] = callback;
			// 拼接出请求数据转换后的字符串形式
			var queryString = url.indexOf('?') == -1? '?' : '&';
			for(var key in data){
				queryString += key + '=' + data[key]+'&'
			}
			queryString += 'callback' + '=' + callbackName;
			// 动态创建一个script元素进行跨域请求
			var scriptElement = $document[0].createElement('script');
			scriptElement.src = url + queryString;
			$document[0].body.appendChild(scriptElement);
		};
	}])
})(angular);