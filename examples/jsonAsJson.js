function load() {
// This one fetches pure json, parses it, and prints a key to the screen

  var result_stuff = fetch('https://api.github.com/users/github')
  result_stuff.then(function(response) {
    console.log('response', response)
    console.log('header', response.headers.get('Content-Type'))
    return response.json()
  }).then(function(json) {
    document.getElementById("pract").innerHTML += json.bio;
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('failed', ex)
  })
}
