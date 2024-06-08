var base = "https://api.waifu.pics";
var type = "nsfw";
var cat = "trap";

async function fetchit() {
	try {
		var response = await fetch(base + "/" + type + "/" + cat);

		// Check if the response is ok
		if (!response.ok) {
			throw new Error('Network response was not ok ' + response.statusText);
		}

		// Parse the response as JSON
		var data = await response.json();

		// Log the data
		console.log(data);

		// Create an img element
		const ele = document.createElement("img");

		// Set the src attribute to the URL from the response
		ele.src = data.url;

		// Append the img element to the document body
		document.body.appendChild(ele);
	} catch (error) {
		console.error('Fetch operation failed:', error);
	}
}

function makeimgs() {
	var x = 0 

	while ( x < 11) {
		x++
		fetchit();
	}
}
