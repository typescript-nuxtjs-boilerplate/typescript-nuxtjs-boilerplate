const fs = require('fs');

fs.copyFile(`.env.${process.argv[2]}`, '.env', (err) => {
  if (err) {
    console.log(err.stack);
    return;
  }

  console.log(`Done. .env.${process.argv[2]} to .env`);
});
