  var urlParams = new URLSearchParams(window.location.search);
  var token = urlParams.get('code');
  console.log("bearer token: "+token);