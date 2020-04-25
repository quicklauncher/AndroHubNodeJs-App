<script>
	// Your web app's Firebase configuration
	 var firebaseConfig = {
          apiKey: "AIzaSyBdG1InVWd_nf9L0A77rL23L_hRRnYKNPI",
        authDomain: "androhub-2b873.firebaseapp.com",
        databaseURL: "https://androhub-2b873.firebaseio.com",
        projectId: "androhub-2b873",
        storageBucket: "androhub-2b873.appspot.com",
        messagingSenderId: "515237248825",
        appId: "1:515237248825:web:8a891adee8182b4802f2e8",
        measurementId: "G-1T5M7KETK3"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);

	var myName = prompt("Enter your name");
</script>
	
<!-- create a form to send message -->      
<form onsubmit="return sendMessage();">
	<input id="message" placeholder="Enter message" autocomplete="off">

	<input type="submit">
</form>
	
<script>
	function sendMessage() {
		// get message
		var message = document.getElementById("message").value;

		// save in database
		firebase.database().ref("messages").push().set({
			"sender": myName,
			"message": message
		});

		// prevent form from submitting
		return false;
	}
</script>