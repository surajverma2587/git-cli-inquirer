const generateActionChoices = (username) => {
  return [
    {
      name: `Display information about ${username}`,
      value: "aboutUser",
    },
    {
      name: `List all repositories for ${username}`,
      value: "allRepos",
    },
    {
      name: `List 10 recently created repositories for ${username}`,
      value: "recentlyCreated",
    },
    {
      name: `List 10 recently updated repositories for ${username}`,
      value: "recentlyUpdated",
    },
    {
      name: `List all followers of ${username}`,
      value: "allFollowers",
    },
    {
      name: "Find a repository by name",
      value: "findRepo",
    },
    {
      name: "Enter a different username",
      value: "differentUser",
    },
    {
      name: "Exit the app",
      value: "exit",
    },
  ];
};

const generateRepoActionChoices = (username) => {
  return [
    {
      name: `Select a repository from a list for ${username}`,
      value: "byList",
    },
    {
      name: `Enter repository name for ${username}`,
      value: "byName",
    },
    {
      name: "Go back to main options",
      value: "mainOptions",
    },
  ];
};

const generateRepoChoices = (repos) => {
  return repos.map((repo) => {
    return {
      name: repo.name,
      value: repo.name,
    };
  });
};

module.exports = {
  generateActionChoices,
  generateRepoActionChoices,
  generateRepoChoices,
};
