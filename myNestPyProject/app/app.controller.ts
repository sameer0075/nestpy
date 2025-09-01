// app.controller.ts
import { AppService } from "./app.service";

export class AppController {
  constructor(private appService: AppService) {}
  getHello() {
    return this.appService.sayHello();
  }
}