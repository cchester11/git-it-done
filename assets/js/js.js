var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#username');

var formSubmitHandler = function(event) {

  event.preventDefault();

  //get value from input element
  var username = nameInputEl.value.trim();

  if(username) {
    //use getUserRepos to find the name
    getUserRepos(username);
    //empty out the input element
    nameInputEl.value = '';
  } else {
    alert('Please enter a Github Username')
  }
  //log to ensure functionality
  console.log(event);
};

var displayRepos = function(repos, serachTerm) {
  console.log(repos);
  console.log(searchTerm);
};

//created a paremeter of x to be replaced by whatever information we need to fetch
var getUserRepos = function(x) {
  // format the github api url
  //var user is being plugged into the blank users/{user}/repos as a string to be read
  var apiUrl = "https://api.github.com/users/" + x + "/repos";

  // make a request to the url
  fetch(apiUrl).then(function(response) {
    return response.json()
  }).then(function(data) {
      console.log(data);
  });
};

userFormEl.addEventListener('submit', formSubmitHandler);