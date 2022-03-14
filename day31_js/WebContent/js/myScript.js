window.onload = function() {
	/* alert("innerHTML : " + document.body.innerHTML +'\n'
			   + "innerText : " + document.body.innerText ); */

	//const
	//let
	var list = '';
	list += "<ul>";
	list += "<li>Hello</li>";
	list += "<li>Hi</li>";
	list += "<li>Good-By</li>";
	list += "</ul>";

	//document.body.innerHTML = list;
	document.getElementById('div').innerHTML = list;
	//alert(list);
}

function countIncrease() {
	var spanObj = document.getElementById('countSpan');
	spanObj.innerHTML = parseInt(spanObj.innerHTML) + 1;
}
