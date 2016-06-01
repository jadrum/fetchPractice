
function loadjson() {

// This one posts a body to a bin on requestb        
         
  fetch('http://requestb.in/pnq0lipn', {mode: 'no-cors', 'method':
    'POST', 'body': 'first=justin&last=drum'})
    .then(function(response) {
      if (response.type === 'opaque') {
        document.getElementById("json").innerHTML = 'Received a response, but its opaque so cant examine it';
        return;
      }
             
      if (response.status != 200) {
        document.getElementById("json").innerHTML = 'Problem status code: ' + response.status;
        return;
      }

      response.text().then(function(data) {
        document.getElementById("json").innerHTML = json;
      });
    }).catch(function(err) {
      document.getElementById("json").innerHTML = 'Fetch Error :-S' + err;
    });
}
