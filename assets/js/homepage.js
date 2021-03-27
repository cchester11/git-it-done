var getUserRepos = function(user) {
  // format the github api url
  //var user is being plugged into the blank users/{user}/repos as a string to be read
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a request to the url
  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
};

getUserRepos('cchester11');