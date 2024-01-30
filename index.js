const jsonfile = require("jsonfile");

const moment = require("moment");
const simpleGit = require("simple-git");

const random = require("random");
const FILE_PATH = "./data.json";

// const git: SimpleGit = simpleGit('https://github.com/iamrohitagg/GitHub_Graph.git');

const makeCommit = (date, commitsLeft) => {
  if (commitsLeft === 0) {
    return simpleGit().push();
  }

  const DATE = date.format();
  const data = { date: DATE };
  console.log(DATE);
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, () => {
        if (commitsLeft % 30 === 0) {
          makeCommit(date.add(1, "d"), commitsLeft - 1);
        } else {
          makeCommit(date, commitsLeft - 1);
        }
      })
      .push();
  });
};

const startDate = moment("1970-01-01");
const endDate = moment();
const totalDays = endDate.diff(startDate, "days");
const totalCommits = totalDays * 30;

makeCommit(startDate, totalCommits);
