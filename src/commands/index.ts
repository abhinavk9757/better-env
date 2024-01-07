import * as vscode from "vscode";
import { CommandRunner, DecryptRun, GreetingsRunner } from "./runs";

type CommandsRunsMapping = { command: string; runner: new () => CommandRunner }[];

export class CommandsInitializer {
  private static commandsRunsMapping: CommandsRunsMapping = [
    {
      command: "better-env.sayHello",
      runner: GreetingsRunner,
    },
    {
      command: "better-env.decrypt",
      runner: DecryptRun,
    },
  ];

  static initializeCommands(context: vscode.ExtensionContext) {
    for (const { command, runner } of CommandsInitializer.commandsRunsMapping) {
      const runnerInstance = new runner()
      const disposable = vscode.commands.registerCommand(command, runnerInstance.run);
      context.subscriptions.push(disposable);
    }
  }
}
