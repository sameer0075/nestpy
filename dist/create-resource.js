"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addResource = addResource;
// framework-core/cli/commands/addResource.ts
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
function addResource(resourceName, language) {
    const resourcePath = path_1.default.join(process.cwd(), "services", resourceName);
    if (fs_extra_1.default.existsSync(resourcePath)) {
        console.error(`Resource ${resourceName} already exists.`);
        process.exit(1);
    }
    fs_extra_1.default.mkdirSync(resourcePath, { recursive: true });
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
        fs_extra_1.default.writeFileSync(path_1.default.join(resourcePath, `${resourceName}.controller.ts`), controller);
        fs_extra_1.default.writeFileSync(path_1.default.join(resourcePath, `${resourceName}.service.ts`), service);
        fs_extra_1.default.writeFileSync(path_1.default.join(resourcePath, `${resourceName}.module.ts`), module);
    }
    else if (language === "Python") {
        const controller = `# ${resourceName}_controller.py
from ${resourceName}_service import ${resourceName}Service

class ${resourceName}Controller:
    def __init__(self):
        self.service = ${resourceName}Service()

    def handle_request(self):
        return self.service.process()`;
        const service = `# ${resourceName}_service.py
class ${resourceName}Service:
    def process(self):
        return "${resourceName} service processing"`;
        const module = `# ${resourceName}_module.py
from ${resourceName}_controller import ${resourceName}Controller
from ${resourceName}_service import ${resourceName}Service

class ${resourceName}Module:
    controllers = [${resourceName}Controller()]
    services = [${resourceName}Service()]`;
        fs_extra_1.default.writeFileSync(path_1.default.join(resourcePath, `${resourceName}_controller.py`), controller);
        fs_extra_1.default.writeFileSync(path_1.default.join(resourcePath, `${resourceName}_service.py`), service);
        fs_extra_1.default.writeFileSync(path_1.default.join(resourcePath, `${resourceName}_module.py`), module);
    }
    console.log(`Resource ${resourceName} created successfully in ${language}.`);
}
