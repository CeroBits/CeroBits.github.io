try{
var urlParams = new URLSearchParams(window.location.search);
var authorizationBasic = urlParams.get('code');
var uri = "https://api.spotify.com/v1/search?type=track&q=";
var str = "bach";
var searchParam = encodeURIComponent(str);
var request = new XMLHttpRequest();
		request.open('GET', uri+searchParam, true);
		request.withCredentials = true;
		request.setRequestHeader('Authorization', 'Bearer ' +
		authorizationBasic);
		request.send();
		request.onreadystatechange = function () {
		if (request.readyState === 4) {
		alert(request.responseText);
		}
	};
}
catch(error){
alert(error.message);
}
