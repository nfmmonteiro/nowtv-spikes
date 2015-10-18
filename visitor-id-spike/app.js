angular.module('app', []);

angular.module('app').controller('MainCtrl', function($scope, $http) {

	$scope.fetchVisitorId = function(event) {
		event.preventDefault();

		$http({method: 'JSONP', url: 'http://metrics.sky.com/id?callback=JSON_CALLBACK'})
			.then(fetchVisitorIdSuccess)
			.catch(fetchVisitorIdFailure);
	};

	function fetchVisitorIdSuccess(response) {
		var cookie  = {
				name: 's_vi',
				value: '[CS]v1|' + response.data.id + '[CE]',
				domain: '.nowtv.com',
				expires: getExpirationDate()
			};
		setCookie(cookie);
		console.log('s_vi: ', cookie.value);
	}

	function fetchVisitorIdFailure(error) {
		alert('error');
		console.error(error);
	}

	function getExpirationDate() {
		// the same as metris.sky.com (2 years)
		var expiration = new Date();
		expiration.setDate(expiration.getDate() - 1);
		expiration.setYear(expiration.getFullYear() + 2);
		return new Date(expiration);
	}

	function setCookie(cookie) {
	    var expires = 'expires=' + cookie.expires.toUTCString(),
	    	domain  = 'domain=' + cookie.domain;
	    document.cookie = cookie.name + '=' + cookie.value + '; ' + expires + ';' + domain;
	}

});