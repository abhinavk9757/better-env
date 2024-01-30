import * as vscode from "vscode";
import { projName } from "../constants";
import { CommandRunner, DecryptRunner, GreetingsRunner } from "./runs";
import { ChooseKeyRunner } from "./runs/chooseKey";

type CommandsRunsMapping = {
  command: string;
  runner: new () => CommandRunner;
}[];

export class CommandsInitializer {
  private static commandsRunsMapping: CommandsRunsMapping = [
    {
      command: `${projName}.sayHello`,
      runner: GreetingsRunner,
    },
    {
      command: `${projName}.decrypt`,
      runner: DecryptRunner,
    },
    {
      command: `${projName}.chooseKey`,
      runner: ChooseKeyRunner,
    },
  ];

  static initializeCommands(context: vscode.ExtensionContext) {
    for (const { command, runner } of CommandsInitializer.commandsRunsMapping) {
      const runnerInstance = new runner();
      const disposable = vscode.commands.registerCommand(
        command,
        runnerInstance.run
      );
      context.subscriptions.push(disposable);
    }
  }
}
