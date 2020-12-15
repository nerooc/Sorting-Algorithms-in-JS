self.addEventListener('message', (e) => {
  let data = e.data.do;
  let url = e.data.url;
  switch (data) {
    case 'fetch':
      console.log('Pobieram dane!');

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          self.postMessage(JSON.stringify(data));
        })
        .catch((err) => console.log(err));

      break;
    default:
      console.log('Invalid access');
      self.postMessage('Closing web worker');
      self.close();
  }
});
