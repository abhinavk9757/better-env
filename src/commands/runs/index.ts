import { DecryptRunner } from "./decrypt";
import { GreetingsRunner } from "./greetings";

export interface CommandRunner {
  run (...arg: any[]): any;
}

export { DecryptRunner , GreetingsRunner };
