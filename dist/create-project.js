"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = createProject;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
function createProject(projectName) {
    const projectPath = path_1.default.join(process.cwd(), projectName);
    if (fs_extra_1.default.existsSync(projectPath)) {
        console.error(`Project ${projectName} already exists.`);
        process.exit(1);
    }
    fs_extra_1.default.mkdirSync(projectPath, { recursive: true });
    fs_extra_1.default.mkdirSync(path_1.default.join(projectPath, "services/helloWorld"), {
        recursive: true,
    });
    // NestJS-like structure for TypeScript
    const helloWorldTsController = `// hello-world.controller.ts
export class HelloWorldController {
  constructor(private helloWorldService: HelloWorldService) {}
  getHello() {
    return this.helloWorldService.sayHello();
  }
}`;
    const helloWorldTsService = `// hello-world.service.ts
export class HelloWorldService {
  sayHello() {
    return 'Hello, World!';
  }
}`;
    const helloWorldTsModule = `// hello-world.module.ts
import { HelloWorldController } from "./hello-world.controller";
import { HelloWorldService } from "./hello-world.service";

export class HelloWorldModule {
  controllers = [HelloWorldController];
  providers = [HelloWorldService];
}`;
    fs_extra_1.default.writeFileSync(path_1.default.join(projectPath, "services/helloWorld/hello-world.controller.ts"), helloWorldTsController);
    fs_extra_1.default.writeFileSync(path_1.default.join(projectPath, "services/helloWorld/hello-world.service.ts"), helloWorldTsService);
    fs_extra_1.default.writeFileSync(path_1.default.join(projectPath, "services/helloWorld/hello-world.module.ts"), helloWorldTsModule);
    console.log(`Project ${projectName} created successfully with a default Hello World module.`);
}
