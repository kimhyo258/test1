function request(request_url, method, callback){
    const xhr = new XMLHttpRequest();
    xhr.open(method, request_url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                callback(xhr.responseText)
            }
        }
    };
}