import { registerApi } from "./api";
import { registerCmd } from "./cmd";
import Config from "./config";

function main(): void {
  Config.register();
  registerApi();
  registerCmd();
}

main();
