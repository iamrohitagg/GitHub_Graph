import { simpleGit } from "simple-git";
import { writeFile } from "jsonfile";
import moment from "moment";
import random from "random";

const FILE_PATH = "./data.json";

// Initialize simple-git for your repo
const git = simpleGit("/Users/user/source/repos/GitHub_Graph");

const makeCommit = async (n) => {
  if (n === 0) {
    try {
      await git.push("origin", "master", "main", "Jashwin", { "-u": null });
      console.log("All changes pushed to remote repository");
    } catch (err) {
      console.error("Error pushing to remote:", err);
    }
    return;
  }

  const x = random.int(0, 54); // weeks
  const y = random.int(0, 6); // days
  const DATE = moment()
    .subtract(0, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = { date: DATE };
  console.log("Committing for date:", DATE);

  try {
    await writeFile(FILE_PATH, data);

    await git.add([FILE_PATH]);
    await git.commit(DATE, { "--date": DATE });

    console.log(`Committed: ${DATE}`);
    await makeCommit(n - 1); // recursive call
  } catch (err) {
    console.error("Error during commit process:", err);
  }
};

// Start committing
makeCommit(120);
