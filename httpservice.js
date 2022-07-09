const { reject } = require("assert");

function makePromiseCall(methodType, url, async = true, data = null) {
    return new Promise (function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        //console.log(methodType+ "State changed called at: "+showTime()+" Ready state: " + xhr.readyState+ " Status: "+xhr.status);
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201) 
                resolve(xhr.responseText);
        }   else if (xhr.status >= 400) {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            Console.log("Handle 400 Client Error or 500 Server Error at: " +showTime());
        }
    }
    xhr.onerror = function () {
        reject({
            status: this.status,
            statusText: Xhttp.statusText
        });
    };
    xhr.open(methodType, url, async); 
    if (data) {
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    } else xhr.send();
    console.log(methodType+" request sent to the server at: "+showTime());
    });
}