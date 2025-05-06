// import fs from "fs-extra";
// import path from "path";
// import { execSync } from "child_process";
// import chalk from "chalk";

// export function createProject(projectName: string) {
//   const projectPath = path.join(process.cwd(), projectName);
//   if (fs.existsSync(projectPath)) {
//     console.error(chalk.red(`Project ${projectName} already exists.`));
//     process.exit(1);
//   }

//   fs.mkdirSync(projectPath, { recursive: true });
//   fs.mkdirSync(path.join(projectPath, "app"), { recursive: true });

//   // TypeScript files
//   const appController = `// app.controller.ts
// import { AppService } from "./app.service";

// export class AppController {
//   constructor(private appService: AppService) {}
//   getHello() {
//     return this.appService.sayHello();
//   }
// }`;
//   const appService = `// app.service.ts
// export class AppService {
//   sayHello() {
//     return 'Hello from Node!';
//   }
// }`;
//   const appModule = `// app.module.ts
// import { AppController } from "./app.controller";
// import { AppService } from "./app.service";

// export class AppModule {
//   controllers = [AppController];
//   providers = [AppService];
// }`;
//   const indexTs = `import { AppController } from "./app/app.controller";
// import { AppService } from "./app/app.service";

// const controller = new AppController(new AppService());
// console.log(controller.getHello());
// `;

//   // Python files
//   const controllerPy = `# app/controller.py
// from .service import AppService

// class AppController:
//     def __init__(self):
//         self.service = AppService()

//     def get_hello(self):
//         return self.service.say_hello()`;

//   const servicePy = `# app/service.py
// class AppService:
//     def say_hello(self):
//         return "Hello from Python!"`;

//   const mainPy = `# main.py
// from app.controller import AppController

// if __name__ == "__main__":
//     controller = AppController()
//     print(controller.get_hello())`;

//   // package.json
//   const packageJson = `{
//   "name": "${projectName}",
//   "version": "1.0.0",
//   "type": "module",
//   "scripts": {
//     "start": "tsx index.ts"
//   },
//   "dependencies": {
//     "ts-node": "^10.9.1"
//   }
// }`;

//   // requirements.txt
//   const requirements = `# Python dependencies
// `;

//   // Write files
//   fs.writeFileSync(path.join(projectPath, "index.ts"), indexTs);
//   fs.writeFileSync(path.join(projectPath, "package.json"), packageJson);
//   fs.writeFileSync(path.join(projectPath, "app/app.controller.ts"), appController);
//   fs.writeFileSync(path.join(projectPath, "app/app.service.ts"), appService);
//   fs.writeFileSync(path.join(projectPath, "app/app.module.ts"), appModule);
//   fs.writeFileSync(path.join(projectPath, "requirements.txt"), requirements);
//   fs.writeFileSync(path.join(projectPath, "main.py"), mainPy);
//   fs.writeFileSync(path.join(projectPath, "app/__init__.py"), "");
//   fs.writeFileSync(path.join(projectPath, "app/controller.py"), controllerPy);
//   fs.writeFileSync(path.join(projectPath, "app/service.py"), servicePy);

//   console.log(chalk.green(`✅ Project structure created.`));

//   // Install Node dependencies
//   try {
//     console.log(chalk.blue("📦 Installing Node.js dependencies..."));
//     execSync("npm install", { cwd: projectPath, stdio: "inherit" });
//   } catch (err) {
//     console.error(chalk.red("❌ Failed to install Node.js dependencies"));
//   }

//   // Set up Python environment
//   try {
//     console.log(chalk.blue("🐍 Setting up Python virtual environment..."));
//     execSync("python3 -m venv venv", { cwd: projectPath, stdio: "inherit" });
//     console.log(chalk.blue("📥 Installing Python dependencies..."));
//     execSync(`./venv/bin/pip install -r requirements.txt`, {
//       cwd: projectPath,
//       stdio: "inherit",
//     });
//   } catch (err) {
//     console.error(chalk.red("❌ Failed to set up Python environment"));
//   }

//   console.log(chalk.green(`🎉 ${projectName} created successfully.`));
//   console.log(chalk.yellow(`👉 To run Node: cd ${projectName} && npm start`));
//   console.log(chalk.yellow(`👉 To run Python: cd ${projectName} && ./venv/bin/python main.py`));
// }


// import fs from 'fs-extra';
// import path from 'path';
// import { execSync } from 'child_process';
// import chalk from 'chalk';

// export function createProject(projectName: string) {
//   const projectPath = path.join(process.cwd(), projectName);

//   if (fs.existsSync(projectPath)) {
//     console.error(chalk.red(`Project ${projectName} already exists.`));
//     process.exit(1);
//   }

//   fs.mkdirSync(projectPath, { recursive: true });
//   fs.mkdirSync(path.join(projectPath, 'app'), { recursive: true });

//   // TypeScript files (Node.js setup with Express API)
//   const appController = `// app.controller.ts
// import { AppService } from "./app.service";

// export class AppController {
//   constructor(private appService: AppService) {}
//   getHello() {
//     return this.appService.sayHello();
//   }
// }`;
  
//   const appService = `// app.service.ts
// export class AppService {
//   sayHello() {
//     return 'Hello from Node.js!';
//   }
// }`;
  
//   const appModule = `// app.module.ts
// import { AppController } from "./app.controller";
// import { AppService } from "./app.service";

// export class AppModule {
//   controllers = [AppController];
//   providers = [AppService];
// }`;
  
//   const indexTs = `import express from 'express';
// import { AppController } from './app/app.controller';
// import { AppService } from './app/app.service';

// const app = express();
// const port = 3000;

// const controller = new AppController(new AppService());

// app.get('/node/hello', (req, res) => {
//   res.send(controller.getHello());
// });

// app.listen(port, () => {
//   console.log(\`✅ Node.js server running at http://localhost:\${port}/node/hello\`);
// });
// `;

//   // Python files (Flask setup for Python Hello World API)
//   const controllerPy = `# app/controller.py
// from flask import Flask, jsonify
// from .service import AppService

// app = Flask(__name__)
// service = AppService()

// @app.route('/python/hello', methods=['GET'])
// def get_hello():
//     return jsonify(message=service.say_hello())

// if __name__ == "__main__":
//     app.run(debug=True)
// `;

//   const servicePy = `# app/service.py
// class AppService:
//     def say_hello(self):
//         return "Hello from Python!"
// `;

//   const mainPy = `# main.py
// from app.controller import app

// if __name__ == "__main__":
//     app.run(debug=True)
// `;

//   // package.json with concurrently added for running both Node.js and Python servers
//   const packageJson = `{
//   "name": "${projectName}",
//   "version": "1.0.0",
//   "type": "module",
//   "scripts": {
//     "start": "concurrently \\"tsx index.ts\\" \\"./venv/bin/python main.py\\""
//   },
//   "dependencies": {
//     "express": "^4.18.2",
//     "ts-node": "^10.9.1",
//     "concurrently": "^7.4.0"
//   }
// }`;

//   // requirements.txt (for Python dependencies)
//   const requirements = `Flask==2.2.2`;

//   // Write files
//   fs.writeFileSync(path.join(projectPath, 'index.ts'), indexTs);
//   fs.writeFileSync(path.join(projectPath, 'package.json'), packageJson);
//   fs.writeFileSync(path.join(projectPath, 'app/app.controller.ts'), appController);
//   fs.writeFileSync(path.join(projectPath, 'app/app.service.ts'), appService);
//   fs.writeFileSync(path.join(projectPath, 'app/app.module.ts'), appModule);
//   fs.writeFileSync(path.join(projectPath, 'requirements.txt'), requirements);
//   fs.writeFileSync(path.join(projectPath, 'main.py'), mainPy);
//   fs.writeFileSync(path.join(projectPath, 'app/__init__.py'), '');
//   fs.writeFileSync(path.join(projectPath, 'app/controller.py'), controllerPy);
//   fs.writeFileSync(path.join(projectPath, 'app/service.py'), servicePy);

//   console.log(chalk.green(`✅ Project structure created.`));

//   // Install Node dependencies
//   try {
//     console.log(chalk.blue("📦 Installing Node.js dependencies..."));
//     execSync("npm install", { cwd: projectPath, stdio: "inherit" });
//   } catch (err) {
//     console.error(chalk.red("❌ Failed to install Node.js dependencies"));
//   }

//   // Set up Python environment
//   try {
//     console.log(chalk.blue("🐍 Setting up Python virtual environment..."));
//     execSync("python3 -m venv venv", { cwd: projectPath, stdio: "inherit" });
//     console.log(chalk.blue("📥 Installing Python dependencies..."));
//     execSync(`./venv/bin/pip install -r requirements.txt`, {
//       cwd: projectPath,
//       stdio: "inherit",
//     });
//   } catch (err) {
//     console.error(chalk.red("❌ Failed to set up Python environment"));
//   }

//   console.log(chalk.green(`🎉 ${projectName} created successfully.`));
//   console.log(chalk.yellow(`👉 To run both Node.js and Python: cd ${projectName} && npm start`));
// }


// import fs from 'fs-extra';
// import path from 'path';
// import { execSync } from 'child_process';
// import chalk from 'chalk';

// export function createProject(projectName: string) {
//   const projectPath = path.join(process.cwd(), projectName);

//   if (fs.existsSync(projectPath)) {
//     console.error(chalk.red(`Project ${projectName} already exists.`));
//     process.exit(1);
//   }

//   fs.mkdirSync(projectPath, { recursive: true });
//   fs.mkdirSync(path.join(projectPath, 'app'), { recursive: true });

//   // TypeScript files (Node.js setup with Express API)
//   const appController = `// app.controller.ts
// import { AppService } from "./app.service";

// export class AppController {
//   constructor(private appService: AppService) {}
//   getHello() {
//     return this.appService.sayHello();
//   }
// }`;
  
//   const appService = `// app.service.ts
// export class AppService {
//   sayHello() {
//     return 'Hello from Node.js!';
//   }
// }`;
  
//   const appModule = `// app.module.ts
// import { AppController } from "./app.controller";
// import { AppService } from "./app.service";

// export class AppModule {
//   controllers = [AppController];
//   providers = [AppService];
// }`;
  
//   const indexTs = `import express from 'express';
// import { AppController } from './app/app.controller';
// import { AppService } from './app/app.service';

// const app = express();
// const port = 3000;

// const controller = new AppController(new AppService());

// app.get('/node/hello', (req, res) => {
//   res.send(controller.getHello());
// });

// app.listen(port, () => {
//   console.log(\`✅ Node.js server running at http://localhost:\${port}/node/hello\`);
// });
// `;

//   // Python files (Flask setup for Python Hello World API)
//   const controllerPy = `# app/controller.py
// from flask import Flask, jsonify
// from .service import AppService

// app = Flask(__name__)
// service = AppService()

// @app.route('/python/hello', methods=['GET'])
// def get_hello():
//     return jsonify(message=service.say_hello())

// if __name__ == "__main__":
//     app.run(debug=True)
// `;

//   const servicePy = `# app/service.py
// class AppService:
//     def say_hello(self):
//         return "Hello from Python!"
// `;

//   const mainPy = `# main.py
// from app.controller import app

// if __name__ == "__main__":
//     app.run(debug=True)
// `;

//   // package.json with concurrently added for running both Node.js and Python servers
//   const packageJson = `{
//   "name": "${projectName}",
//   "version": "1.0.0",
//   "type": "module",
//   "scripts": {
//     "start": "concurrently \\"tsx index.ts\\" \\"./venv/bin/python main.py\\""
//   },
//   "dependencies": {
//     "express": "^4.18.2",
//     "ts-node": "^10.9.1",
//     "concurrently": "^7.4.0"
//   }
// }`;

//   // requirements.txt (for Python dependencies)
//   const requirements = `Flask==2.2.2
// Werkzeug==2.2.2`;

//   // Write files
//   fs.writeFileSync(path.join(projectPath, 'index.ts'), indexTs);
//   fs.writeFileSync(path.join(projectPath, 'package.json'), packageJson);
//   fs.writeFileSync(path.join(projectPath, 'app/app.controller.ts'), appController);
//   fs.writeFileSync(path.join(projectPath, 'app/app.service.ts'), appService);
//   fs.writeFileSync(path.join(projectPath, 'app/app.module.ts'), appModule);
//   fs.writeFileSync(path.join(projectPath, 'requirements.txt'), requirements);
//   fs.writeFileSync(path.join(projectPath, 'main.py'), mainPy);
//   fs.writeFileSync(path.join(projectPath, 'app/__init__.py'), '');
//   fs.writeFileSync(path.join(projectPath, 'app/controller.py'), controllerPy);
//   fs.writeFileSync(path.join(projectPath, 'app/service.py'), servicePy);

//   console.log(chalk.green(`✅ Project structure created.`));

//   // Install Node dependencies
//   try {
//     console.log(chalk.blue("📦 Installing Node.js dependencies..."));
//     execSync("npm install", { cwd: projectPath, stdio: "inherit" });
//   } catch (err) {
//     console.error(chalk.red("❌ Failed to install Node.js dependencies"));
//   }

//   // Set up Python environment
//   try {
//     console.log(chalk.blue("🐍 Setting up Python virtual environment..."));
//     execSync("python3 -m venv venv", { cwd: projectPath, stdio: "inherit" });
//     console.log(chalk.blue("📥 Installing Python dependencies..."));
//     execSync(`./venv/bin/pip install -r requirements.txt`, {
//       cwd: projectPath,
//       stdio: "inherit",
//     });
//   } catch (err) {
//     console.error(chalk.red("❌ Failed to set up Python environment"));
//   }

//   console.log(chalk.green(`🎉 ${projectName} created successfully.`));
//   console.log(chalk.yellow(`👉 To run both Node.js and Python: cd ${projectName} && npm start`));
// }


import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';

export function createProject(projectName: string) {
  const projectPath = path.join(process.cwd(), projectName);

  if (fs.existsSync(projectPath)) {
    console.error(chalk.red(`Project ${projectName} already exists.`));
    process.exit(1);
  }

  fs.mkdirSync(projectPath, { recursive: true });
  fs.mkdirSync(path.join(projectPath, 'app'), { recursive: true });

  // TypeScript files (Node.js setup with Express API)
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
    return 'Hello from Node.js!';
  }
}`;
  
  const appModule = `// app.module.ts
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

export class AppModule {
  controllers = [AppController];
  providers = [AppService];
}`;
  
  const indexTs = `import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';

const app = express();
const port = 3000;

const controller = new AppController(new AppService());

// Proxy Python requests to the Flask server
app.use('/python', createProxyMiddleware({
  target: 'http://127.0.0.1:5000', // Flask server URL
  changeOrigin: true,
  pathRewrite: {
    '^/python': '', // Remove '/python' prefix before forwarding to Flask
  },
}));

// Node.js route
app.get('/node/hello', (req, res) => {
  res.send(controller.getHello());
});

// Start the server
app.listen(port, () => {
  console.log(\`✅ Node.js server running at http://localhost:\${port}/node/hello\`);
  console.log(\`✅ Flask server (via proxy) running at http://localhost:\${port}/python/hello\`);
});
`;

  // Python files (Flask setup for Python Hello World API)
  const controllerPy = `# app/controller.py
from flask import Flask, jsonify
from .service import AppService

app = Flask(__name__)
service = AppService()

@app.route('/hello', methods=['GET'])
def get_hello():
    return jsonify(message=service.say_hello())

if __name__ == "__main__":
    app.run(debug=True)
`;

  const servicePy = `# app/service.py
class AppService:
    def say_hello(self):
        return "Hello from Python!"
`;

  const mainPy = `# main.py
from app.controller import app

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Ensure Flask listens on port 5000
`;

  // package.json with concurrently added for running both Node.js and Python servers
  const packageJson = `{
  "name": "${projectName}",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "concurrently \\"tsx index.ts\\" \\"./venv/bin/python main.py\\""
  },
  "dependencies": {
    "express": "^4.18.2",
    "ts-node": "^10.9.1",
    "concurrently": "^7.4.0",
    "http-proxy-middleware": "^2.0.0"
  }
}`;

  // requirements.txt (for Python dependencies)
  const requirements = `Flask==2.2.2`;

  // Write files
  fs.writeFileSync(path.join(projectPath, 'index.ts'), indexTs);
  fs.writeFileSync(path.join(projectPath, 'package.json'), packageJson);
  fs.writeFileSync(path.join(projectPath, 'app/app.controller.ts'), appController);
  fs.writeFileSync(path.join(projectPath, 'app/app.service.ts'), appService);
  fs.writeFileSync(path.join(projectPath, 'app/app.module.ts'), appModule);
  fs.writeFileSync(path.join(projectPath, 'requirements.txt'), requirements);
  fs.writeFileSync(path.join(projectPath, 'main.py'), mainPy);
  fs.writeFileSync(path.join(projectPath, 'app/__init__.py'), '');
  fs.writeFileSync(path.join(projectPath, 'app/controller.py'), controllerPy);
  fs.writeFileSync(path.join(projectPath, 'app/service.py'), servicePy);

  console.log(chalk.green(`✅ Project structure created.`));

  // Install Node dependencies
  try {
    console.log(chalk.blue("📦 Installing Node.js dependencies..."));
    execSync("npm install", { cwd: projectPath, stdio: "inherit" });
  } catch (err) {
    console.error(chalk.red("❌ Failed to install Node.js dependencies"));
  }

  // Set up Python environment
  try {
    console.log(chalk.blue("🐍 Setting up Python virtual environment..."));
    execSync("python3 -m venv venv", { cwd: projectPath, stdio: "inherit" });
    console.log(chalk.blue("📥 Installing Python dependencies..."));
    execSync(`./venv/bin/pip install -r requirements.txt`, {
      cwd: projectPath,
      stdio: "inherit",
    });
    console.log(chalk.blue("🔧 Upgrading Flask and Werkzeug..."));
    execSync(`./venv/bin/pip install --upgrade Flask Werkzeug`, {
      cwd: projectPath,
      stdio: "inherit",
    });
  } catch (err) {
    console.error(chalk.red("❌ Failed to set up Python environment"));
  }

  console.log(chalk.green(`🎉 ${projectName} created successfully.`));
  console.log(chalk.yellow(`👉 To run both Node.js and Python: cd ${projectName} && npm start`));
}
