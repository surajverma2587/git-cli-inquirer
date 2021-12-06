const axios = require("axios");
const { printTable } = require("console-table-printer");

const {
  transformUserInfo,
  transformRepositories,
  transformRepoInfo,
} = require("./transformers");

const displayUserInfo = async (username) => {
  try {
    const url = `https://api.github.com/users/${username}`;

    const { data } = await axios.get(url);

    const userInfo = transformUserInfo(data);

    console.table(userInfo);

    return true;
  } catch (error) {
    console.log(`[ERROR]: Invalid username | ${error.message}`);
    return false;
  }
};

const listAllRepositories = async (username) => {
  const url = `https://api.github.com/users/${username}/repos`;

  const { data } = await axios.get(url);

  const repos = transformRepositories(data);

  printTable(repos);
};

const getAllRepos = async (username) => {
  const url = `https://api.github.com/users/${username}/repos`;

  const { data } = await axios.get(url);

  return data;
};

const displayRepoInfo = async (username, repoName) => {
  try {
    const url = `https://api.github.com/repos/${username}/${repoName}`;

    const { data } = await axios.get(url);

    const repoInfo = transformRepoInfo(data);

    console.table(repoInfo);

    return true;
  } catch (error) {
    console.log(`[ERROR]: Invalid repo name | ${error.message}`);
    return false;
  }
};

module.exports = {
  displayUserInfo,
  listAllRepositories,
  getAllRepos,
  displayRepoInfo,
};
