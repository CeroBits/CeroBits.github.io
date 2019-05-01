var apiKey ="AIzaSyCvHWpUvF8M4USwUEWpfZfM5CgY6Q3wa74";


 var viewModel  = null;
viewModel = new ViewModelRespuesta();  
// 1. Load the JavaScript client library.	
 document.onreadystatechange = function () {
    if (document.readyState == "complete") { 
		gapi.load('client', startYoutube);	
		ko.applyBindings(viewModel);
	    }
}
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
	player.loadVideoById(videoId);
	};  
} 
try{	
	function startYoutube(query) {
		if(typeof(query)=="undefined"){
		query = "";
		}
    // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': apiKey,
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
	viewModel.dataResp(null);
			for(var i = 0 ; i<response.result.items.length; i++ ){
				var c = new Respuesta();
				c.titulo = response.result.items[i].snippet.title;
					if(typeof(response.result.items[i].id.videoId) =="undefined"){
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
}
catch(error){
	console.log(error.message);
	
}
//////////////////////////////////////////
 function searchParam(){			
			var query =  encodeURIComponent(document.getElementById("params").value);
			startYoutube(query);
		}
//////////////////////////////////////////////////