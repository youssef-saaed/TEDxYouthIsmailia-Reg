var URL=window.location.href;
var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
    return params;
}
var params=getParams(URL);
if (!(params.id=="" && params.refN=="" && params.name=="" && params.email=="" && params.phone=="" && params.status=="")){
    window.addEventListener('DOMContentLoaded', (event) => {
        document.getElementsByTagName("h2")[0].innerHTML+=Math.trunc(params.id);
        document.getElementsByTagName("h2")[1].innerHTML+=Math.trunc(params.refN);
        document.getElementsByTagName("h2")[2].innerHTML+=params.name;
        document.getElementsByTagName("h2")[3].innerHTML+=params.email;
        document.getElementsByTagName("h2")[4].innerHTML+=Math.trunc(params.phone);
        document.getElementsByTagName("h2")[5].innerHTML+=params.status;
        document.getElementsByTagName("input")[0].addEventListener('click',(event)=>{
            window.location.replace("update.php?id="+params.id)
        })
    });
    
}else{
    window.addEventListener('DOMContentLoaded', (event) => {
        document.getElementsByTagName("h1")[0].innerHTML="Not Found";
        document.getElementsByTagName("h1")[0].style.marginBottom="35px";
        document.getElementsByClassName("data")[0].remove();
        document.getElementsByTagName("form")[0].remove();
    });
}

