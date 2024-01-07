import { DecryptRun } from "./decrypt";
import { GreetingsRunner } from "./greetings";

export interface CommandRunner {
  run (...arg: any[]): any;
}

export { DecryptRun, GreetingsRunner };
