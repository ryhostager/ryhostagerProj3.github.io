generatePasswords = function() {
	document.body.style.backgroundColor = "lightblue";
	tt = document.createElement("table");
	tt.setAttribute('id', 'pwTable');
	tt.setAttribute('border', '1');
	t = document.querySelector("#pwTable");
	trow = document.createElement("tr");
    td = document.createElement("td");
	contents = document.createTextNode(Date());
	td.appendChild(contents);
	td.onclick = clickon;
	trow.appendChild(td);
	t.appendChild(trow);
}