function displayLevelInfo() {
	var levelEntry = (document.getElementById('levelInput').value);

		switch (levelEntry) {
		case "C":
			document.getElementById('displayLevel').innerHTML=
			"Category: Clothing";
			break;

		case "E":
			document.getElementById('displayLevel').innerHTML=
			"Category: Electronics";
			break;

		case "B":
			document.getElementById('displayLevel').innerHTML=
			"Category: Books";
			break;	

		default:
			window.alert("Invalid Section Number");

		}
}
