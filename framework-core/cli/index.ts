#!/usr/bin/env tsx
import { Command } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import { createProject } from "./create-project";
import { addResource } from "./create-resource";

const program = new Command();

program
  .name("nestpy")
  .description("A multi-language backend framework CLI tool")
  .version("1.0.0");

// Command to create a new project
program
  .command("create <project-name>")
  .description("Create a new project")
  .action((projectName) => {
    console.log(chalk.green(`Creating new project: ${projectName}...`));
    createProject(projectName);
  });

// Command to add a new resource with language selection
program
  .command("add <resource-name>")
  .description("Add a new resource (controller, service, etc.)")
  .action(async (resourceName) => {
    const { language } = await inquirer.prompt([
      {
        type: "list",
        name: "language",
        message: "Select the language for the resource:",
        choices: ["TypeScript", "Python"],
      },
    ]);
    addResource(resourceName, language);
  });

// Parse CLI arguments
program.parse(process.argv);
