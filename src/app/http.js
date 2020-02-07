export class Http {
    static fetchData(url) {
        return new Promise((resolve, reject) => {
            const HTTP = new XMLHttpRequest();
            HTTP.open('GET', url);
            HTTP.onreadystatechange = function() {
                if (HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200) {
                    const RESPONSE_DATA = JSON.parse(HTTP.responseText);
                    resolve(RESPONSE_DATA);
                } else if (HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 404) {
                    const ERROR_DATA = JSON.parse(HTTP.responseText);
                    reject(ERROR_DATA.message);
                }
            };
            HTTP.send();
        });
    }
}