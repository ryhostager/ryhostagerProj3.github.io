generatePasswords = function() {
	document.body.style.backgroundColor = "lightblue";
	//tt = document.createElement("table");
	t = document.querySelector("#pwTable");
	trow = document.createElement("tr");
    td = document.createElement("td");
	contents = document.createTextNode("HI");
	td.appendChild(contents);
	td.onclick = clickon;
	trow.appendChild(td);
	t.appendChild(trow);
}