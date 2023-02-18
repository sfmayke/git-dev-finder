const getGitUser = () =>
  fetch('https://api.github.com/users/octocat').then((res) => res.json());

export default getGitUser;
