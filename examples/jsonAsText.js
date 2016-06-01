// This one fetches pure json as text instead, and prints the text to the
// screen

function loadtext() {
  result = fetch('https://api.github.com')
 
  result.then(function(response) {
  //          document.getElementById("pract").innerHTML = response.text();
    console.log('response', response)
    console.log('header', response.headers.get('Content-Type'))
    return response.text()
  }).then(function(text) {
    document.getElementById("pract").innerHTML = text;
  }).catch(function(ex) {
    console.log('failed', ex)
  })
}
