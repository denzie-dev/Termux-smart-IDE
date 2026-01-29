const { exec } = require("child_process");

module.exports = (path) => {
  return new Promise((resolve) => {
    exec(`npx eslint ${path} --format json`, (err, stdout) => {
      if (err) return resolve({ errors: true });
      resolve(JSON.parse(stdout || "[]"));
    });
  });
};
