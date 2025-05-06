import fs from "fs-extra";
import path from "path";

export function addResource(resourceName: string, language: string) {
  const resourcePath = path.join(process.cwd(), "app", resourceName);
  if (fs.existsSync(resourcePath)) {
    console.error(`Resource ${resourceName} already exists.`);
    process.exit(1);
  }
  fs.mkdirSync(resourcePath, { recursive: true });
  if (language === "TypeScript") {
    const controller = `// ${resourceName}.controller.ts
export class ${resourceName}Controller {
  constructor(private ${resourceName.toLowerCase()}Service: ${resourceName}Service) {}
  handleRequest() {
    return this.${resourceName.toLowerCase()}Service.process();
  }
}`; 
    const service = `// ${resourceName}.service.ts
export class ${resourceName}Service {
  process() {
    return '${resourceName} service processing';
  }
}`;
    const module = `// ${resourceName}.module.ts
import { ${resourceName}Controller } from "./${resourceName}.controller";
import { ${resourceName}Service } from "./${resourceName}.service";

export class ${resourceName}Module {
  controllers = [${resourceName}Controller];
  providers = [${resourceName}Service];
}`;
    fs.writeFileSync(
      path.join(resourcePath, `${resourceName}.controller.ts`),
      controller
    );
    fs.writeFileSync(
      path.join(resourcePath, `${resourceName}.service.ts`),
      service
    );
    fs.writeFileSync(
      path.join(resourcePath, `${resourceName}.module.ts`),
      module
    );
  } else if (language === "Python") {
    const controller = `# ${resourceName}/controller.py
from .service import ${resourceName}Service

class ${resourceName}Controller:
    def __init__(self):
        self.service = ${resourceName}Service()
    
    def handle_request(self):
        return self.service.process()`;

    const service = `# ${resourceName}/service.py
class ${resourceName}Service:
    def process(self):
        return "${resourceName} service processing"`;

    fs.writeFileSync(path.join(resourcePath, "controller.py"), controller);
    fs.writeFileSync(path.join(resourcePath, "service.py"), service);
    fs.writeFileSync(path.join(resourcePath, "__init__.py"), "");
  }
  console.log(`Resource ${resourceName} created successfully in ${language}.`);
}
