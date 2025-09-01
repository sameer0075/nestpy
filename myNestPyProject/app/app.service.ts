import { PythonProxy } from "../../framework-core/decorators/python-proxy";

// app.service.ts
export class AppService {
  @PythonProxy("/hello")
  sayHello() {
    return 'Hello from Node.js!';
  }
}