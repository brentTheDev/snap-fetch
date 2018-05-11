function fetchCall() {
	fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1')
		.then(function(response) {

			//catch any requests that aren't 200 OK
			if(response.status !== 200) {
				alert('Sorry. Something happened, bro. Bacon must be somewhere else Status Code: ' . response.status);
				return;
			}

			//grab the response data and output to screen
			response.json().then(function(data) {
				document.getElementById("fetchCall").innerHTML = data;
			})
		})

		//catch any fetch errors here
		.catch(function(err) {
			alert('only you would make errors', err);
		})
}