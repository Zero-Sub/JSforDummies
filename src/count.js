<!doctype html>
<html>
<head>
<title>Hello, HTML!</title>
<script>
function countToTen() {
	var count = 0;
	while (count <10) {
		count++;
		document.getElementById("theCount ").innerHTML += count + "<br>";
		
	}
}
Code-Line Before Listing Code </script>
</head>
<body onload="countToTen();">
<hl>Let's Count to Ten with JavaScript!</hl>
<p id="the Count"></p>
</body>
</html>
