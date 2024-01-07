import * as vscode from "vscode";
import { CommandRunner, DecryptRun, GreetingsRunner } from "./runs";

type CommandsRunsMapping = { command: string; runner: CommandRunner }[];

export class CommandsInitializer {
  private static commandsRunsMapping: CommandsRunsMapping = [
    {
      command: "better-env.sayHello",
      runner: new GreetingsRunner(),
    },
    {
      command: "better-env.decrypt",
      runner: new DecryptRun(),
    },
  ];

  static initializeCommands(context: vscode.ExtensionContext) {
    for (const { command, runner } of CommandsInitializer.commandsRunsMapping) {
      const disposable = vscode.commands.registerCommand(command, runner.run);
      context.subscriptions.push(disposable);
    }
  }
}
