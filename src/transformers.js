const transformUserInfo = (data) => {
  const userInfo = {
    login: data.login,
    id: data.id,
    avatar_url: data.avatar_url,
    html_url: data.html_url,
    name: data.name,
    company: data.company,
    location: data.location,
    bio: data.bio,
    followers: data.followers,
    following: data.following,
    public_repos: data.public_repos,
  };

  return userInfo;
};

const transformRepositories = (repos) => {
  return repos.map((repo) => {
    return {
      name: repo.name,
      url: repo.html_url,
    };
  });
};

const transformRepoInfo = (repo) => {
  return {
    name: repo.name,
    url: repo.html_url,
    owner: repo.owner.login,
    issues: repo.open_issues,
  };
};

module.exports = {
  transformUserInfo,
  transformRepositories,
  transformRepoInfo,
};
