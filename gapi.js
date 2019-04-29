//  'apiKey': 'AIzaSyBHBat1hx_r3UYAm-0hprKhheTe4fv2dEM',

try{	
	function startYoutube(query) {
    // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyBHBat1hx_r3UYAm-0hprKhheTe4fv2dEM',
    // clientId and scope are optional if auth is not required.
    //'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
    //'scope': 'profile',
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.request({
      'path': 'https://www.googleapis.com/youtube/v3/search?q='+query+'part=snippet&key=AIzaSyBHBat1hx_r3UYAm-0hprKhheTe4fv2dEM',
    })
  }).then(function(response) {
    console.log(response.result);
	var resultObject = response.result;
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
	    var query =  encodeURIComponent(document.getElementById("params").value;
		if(query)!=null){
		gapi.load('client', startYoutube);		
		}
        }
    }
}
catch(error){
	console.log(error.message);
	
}
 function searchParam(){			
			var query =  encodeURIComponent(document.getElementById("params").value);
			startYoutube(query);
		}
		

	
