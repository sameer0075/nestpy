"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
const create_project_1 = require("./create-project");
const create_resource_1 = require("./create-resource");
const program = new commander_1.Command();
program
    .name("nestpy")
    .description("A multi-language backend framework CLI tool")
    .version("1.0.0");
// Command to create a new project
program
    .command("create <project-name>")
    .description("Create a new project")
    .action((projectName) => {
    console.log(chalk_1.default.green(`Creating new project: ${projectName}...`));
    (0, create_project_1.createProject)(projectName);
});
// Command to add a new resource with language selection
program
    .command("add <resource-name>")
    .description("Add a new resource (controller, service, etc.)")
    .action(async (resourceName) => {
    const { language } = await inquirer_1.default.prompt([
        {
            type: "list",
            name: "language",
            message: "Select the language for the resource:",
            choices: ["TypeScript", "Python"],
        },
    ]);
    (0, create_resource_1.addResource)(resourceName, language);
});
// Parse CLI arguments
program.parse(process.argv);
