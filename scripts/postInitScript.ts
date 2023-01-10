#!/usr/bin/env ts-node
// #!/usr/bin/env node

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Please enter bundle identifier for ios and android: ",
  (name) => {
    console.log(`Hey there ${name}!`);
    readline.close();
  }
);
