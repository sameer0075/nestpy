// app.module.ts
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

export class AppModule {
  controllers = [AppController];
  providers = [AppService];
}