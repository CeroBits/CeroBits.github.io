function sendMail() {
		var nameContacto = document.getElementById("name").value;
		var correoContacto = document.getElementById("email").value;
		var bodyCorreo = document.getElementById("message").value;

    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        "key": "eb1bbc0d6b53947904f738891d6e7013-us20",
        "message": {
          "from_email": correoContacto,
          "to": [
              {
                "email": "garon.santana@gmail.com",
                "name": "RECIPIENT NAME (OPTIONAL)",
                "type": "to"
              }
            ],
          "autotext": "true",
          "subject": bodyCorreo,
          "html": "YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!"
        }
      }
     }).done(function(response) {
       console.log(response); // if you"re into that sorta thing
     });
}
