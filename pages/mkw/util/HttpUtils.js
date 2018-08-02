export default class HttpUtils {
    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(result => resolve(result))
                .then(error => reject(error));
        })
    }

    static post(url, data) {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'post',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            fetch(url, options)
                .then(response => response.json())
                .then(result => resolve(result))
                .then(error => reject(error));
        })
    }
}