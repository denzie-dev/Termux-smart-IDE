const lint = require("./lint");
const scan = require("./scan");

module.exports = async function analyze(repoPath) {
  const lintResult = await lint(repoPath);
  const scanResult = await scan(repoPath);

  return {
    lint: lintResult,
    security: scanResult,
    timestamp: new Date().toISOString()
  };
};
