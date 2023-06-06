const readline = require("readline");
const { openaiMetaData } = require("./controllers/openaiController");

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .question("The project name is:", async (name) => {
    await openaiMetaData(name);
    rl.close();
  });
