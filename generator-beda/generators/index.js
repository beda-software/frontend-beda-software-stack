const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    const { action } = await this.prompt([
      {
        type: "list",
        name: "action",
        message: "What do you want to create",
        choices: ["Project", "React Native Container", "nothing"],
      },
    ]);

    if (action === "Project") {
      this.composeWith(require.resolve("./app"));
    }

    if (action === "React Native Container") {
      this.composeWith(require.resolve("./rn-container"));
    }
  }
};
