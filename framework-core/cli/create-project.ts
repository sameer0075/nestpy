import fs from "fs-extra";
import path from "path";

export function createProject(projectName: string) {
  const projectPath = path.join(process.cwd(), projectName);
  if (fs.existsSync(projectPath)) {
    console.error(`Project ${projectName} already exists.`);
    process.exit(1);
  }
  fs.mkdirSync(projectPath, { recursive: true });
  fs.mkdirSync(path.join(projectPath, "app"), { recursive: true });

  // NestJS-like structure for TypeScript
  const appController = `// app.controller.ts
import { AppService } from "./app.service";

export class AppController {
  constructor(private appService: AppService) {}
  getHello() {
    return this.appService.sayHello();
  }
}`;
  const appService = `// app.service.ts
export class AppService {
  sayHello() {
    return 'Hello, World!';
  }
}`;
  const appModule = `// app.module.ts
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

export class AppModule {
  controllers = [AppController];
  providers = [AppService];
}`;
  const packageJson = `{
    "name": "${projectName}",
    "version": "1.0.0",
    "type": "module",
    "main": "index.ts",
    "scripts": {
      "start": "ts-node index.ts"
    },
    "dependencies": {
      "ts-node": "^10.9.1"
    }
  }`;
  const requirements = `# Python dependencies
flask`;

  const indexTs = `import { AppModule } from "./app/app.module";

console.log("Application started with AppModule:", AppModule);
`;

  const mainPy = `from app.controller import AppController

if __name__ == "__main__":
    controller = AppController()
    print(controller.get_hello())`;
  fs.writeFileSync(path.join(projectPath, "main.py"), mainPy);

  fs.writeFileSync(path.join(projectPath, "index.ts"), indexTs);
  fs.writeFileSync(path.join(projectPath, "package.json"), packageJson);
  fs.writeFileSync(
    path.join(projectPath, "app/app.controller.ts"),
    appController
  );
  fs.writeFileSync(path.join(projectPath, "app/app.service.ts"), appService);
  fs.writeFileSync(path.join(projectPath, "app/app.module.ts"), appModule);
  fs.writeFileSync(path.join(projectPath, "requirements.txt"), requirements);

  console.log(
    `Project ${projectName} created successfully with a default app structure.`
  );
}
