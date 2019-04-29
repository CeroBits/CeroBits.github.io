  // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady(id) {
        player = new YT.Player('player', {
          height: '220',
          width: '220',
          videoId: id,//'_ioc6sdgugo',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
	  
	    //////////////////////////////////////
	  function showHide(){
			var button = document.getElementById("ShowHide");
			switch (button.textContent) {
				case 'SHOW':
				button.textContent="HIDE";
				break;
				case 'HIDE':
				button.textContent="SHOW";
				break;
			}			
		}
		///key=AIzaSyBHBat1hx_r3UYAm-0hprKhheTe4fv2dEM	
		function searchParam(){
			
			var query =  encodeURIComponent(document.getElementById("params"));
			onYouTubeIframeAPIReady(query);
		}
	
