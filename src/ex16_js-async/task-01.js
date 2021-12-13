function fetchData(url, options = { method: 'GET', body: null }) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(options.method, url, true);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send(JSON.stringify(options.body));
  });
}

module.exports = fetchData;
