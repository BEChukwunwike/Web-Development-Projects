const fs = require("fs");
fs.writeFile(test.txt, "How does this work", (err) => {
    if (err) throw err;
    console.log('Saved!');
  });