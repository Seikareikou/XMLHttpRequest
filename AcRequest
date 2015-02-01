var AcRequest = function(method,url,data){
	this.method = method;
	this.url = url;
	this.data = data;
}
/*AcRequest.prototype.setData(data){
	
}*/
AcRequest.prototype.sendRequest = function(success, failed){
	var xhr = new XMLHttpRequest();
	var m = this.method,u = this.url, d = this.data;
	if (m === "GET"){
		if(d.length > 0){
			xhr.open("GET", u+"?"+d);
			} else {
            xhr.open(m, u);
            }
        xhr.send()
		} else if(m === "Post"){
			xhr.open("Post",u)
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Content-Length", d.length);
            xhr.send(d);
		}
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
            if(xhr.status == 200){
                success(xhr.responseText);
            } else {
                if(failed){
                    failed(xhr.status);
                }
            }
		}
	}
}
            
