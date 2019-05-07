/*var urlParams = new URLSearchParams(window.location.search);
var token = urlParams.get('code');
console.log("bearer token: "+token);
*/


try{
var urlParams = new URLSearchParams(window.location.search);
var authorizationBasic = urlParams.get('code');
var uri = "https://api.spotify.com/v1/search?q=";
var str = "bach";
var searchParam = encodeURIComponent(str);
var request = new XMLHttpRequest();
		request.open('GET', uri+searchParam+"&type=track", true);
		request.withCredentials = true;
		request.setRequestHeader('Authorization', 'Bearer '+authorizationBasic);
		request.send();
		request.onreadystatechange = function () {
		if (this.readyState === 4) {
			if (this.status === 200) {
			}
		}
	};
}
catch(error){
alert(error.message);
}
