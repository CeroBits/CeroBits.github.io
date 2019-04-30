//  'apiKey': 'AIzaSyBHBat1hx_r3UYAm-0hprKhheTe4fv2dEM',


 var viewModel  = null;
 document.onreadystatechange = function () {
    if (document.readyState == "complete") {   		
		ko.applyBindings(viewModel);
	    }
}
viewModel = new ViewModelRespuesta();  	

function ViewModelRespuesta() {
	var self = this;
	self.dataResp=ko.observableArray([]);

				}
var Respuesta = function () {
	var self = this;
	self.titulo = null;
	self.videoId= null;
	self.imgurl = null;
	self.alertID = function () {
	alert(self.videoId);
	};  
}

try{	
	function startYoutube(query) {
    // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyCgThUu4OMEZ3QQlXI9enG60YMTVHXYv_8',
    // clientId and scope are optional if auth is not required.
    //'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
    //'scope': 'profile',
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.request({
      'path': 'https://www.googleapis.com/youtube/v3/search?q='+query+'&part=snippet&type=video,playlist'
    })
  }).then(function(response) {
    console.log(response.result);
	var resultObject = response.result;
	
			for(var i = 0 ; i<response.result.items.length; i++ ){
			var c = new Respuesta();
			c.titulo = response.result.items[i].snippet.title;
		    	if(typeof(response.result.items[0].id.videoId) =="undefined"){
			c.videoId = response.result.items[i].id.playlistId;
			}else{
			c.videoId = response.result.items[i].id.videoId;
			}
			c.imgurl = response.result.items[i].snippet.thumbnails.default.url;
			 viewModel.dataResp.push(c);
			}
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
document.onreadystatechange = function () {
    if (document.readyState == "complete") {		
		gapi.load('client', startYoutube);	
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
		
