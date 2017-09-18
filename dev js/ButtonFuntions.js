var obj, Id, Name, Provider, Url, Length;
function employeeDetails() {
  document.getElementById("ContentDisplayer").innerHTML ="hi  I am from employee";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET','empJson.json',true);
    xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			console.log(xmlhttp.responseText);
            obj = JSON.parse(xmlhttp.responseText);
			console.log(obj);
            Id = obj.id;
			console.log(Id);
			Name = obj.name;
			Provider = obj.provider;
			Url = obj.url;
        }
    };
	xmlhttp.send(null);
	details();
	function details() {
		
		Length = obj.length;
		console.log(length);
	}
}
function companyDetails() {
  document.getElementById("ContentDisplayer").innerHTML ="hi I am from company";
}

