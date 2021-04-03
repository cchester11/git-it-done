var issuesContainerEl = document.querySelector('#issues-container');

var getRepoIssues = function (repoName) {
  var api_url = "https://api.github.com/repos/" + repoName + "/issues?direction=asc";

  fetch(api_url).then(function (response) {
    if(response.ok) {
      response.json().then(function (data) {
        displayIssues(data)
      })
    } else {
      alert('Your request failed.')
    }
  })
};

var displayIssues = function (issues) {
  if (issues.length === 0) {
    issuesContainerEl.textContent = "This repo has no open issues!";
    return;
  }
  for (var i = 0; i < issues.length; i ++) {
  //create a link to take users to issues in github
  var issuesEl = document.createElement('a');
  issuesEl.classList = "list-item flex-row justify-space-between align-center";
  issuesEl.setAttribute("href", issues[i].html_url);
  //target _blank opens the window in a new tab
  issuesEl.setAttribute("target", "_blank");

  //create a span for the issue title
  var titleEl = document.createElement('span');
  titleEl.textContent = issues[i].title;

  //append span to the list item
  issuesEl.appendChild(titleEl);

  var typeEl = document.createElement('span');

  //check if issue is an issue or pull request
  if (issues[i].pull_request) {
    typeEl.textContent = ('Pull Request')
  } else {
    typeEl.textContent = "(Issue)";
  }

  issuesEl.appendChild(typeEl)

  issuesContainerEl.appendChild(issuesEl);
  }
};