const FILE_PATH = "./data.json";
const simpleGit = require("simple-git");
const jsonfile = require("jsonfile");
const moment = require("moment");
const random = require("random");

const makeCommit = async (n, year) => {
  if (n === 0) return simpleGit().push();

  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const DATE = moment()
    .subtract(year, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();
  const data = {
    date: DATE,
  };
  console.log(DATE);

  await new Promise((resolve) => {
    jsonfile.writeFile(FILE_PATH, data, () => {
      simpleGit()
        .add([FILE_PATH])
        .commit(DATE, { "--date": DATE }, async () => {
          await makeCommit(--n, year);
          resolve();
        })
        .push();
    });
  });
};

(async () => {
  for (let year = 0; year < 54; year++) {
    await makeCommit(20000, year);
    console.log(`Year ${year} completed.`);
  }
})();

