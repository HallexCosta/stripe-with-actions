module.exports = {
  diff: true,
  color: true,
  exit: true,
  extension: ["js"],
  package: "./package.json",
  reporter: "spec",
  require: ["dotenv/config"],
  timeout: 0,
  spec: ["*.test.js"],
  ui: "bdd",
};
