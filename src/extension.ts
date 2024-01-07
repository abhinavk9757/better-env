import * as vscode from "vscode";
import { CommandsInitializer } from "./commands";

export function activate(context: vscode.ExtensionContext) {
  CommandsInitializer.initializeCommands(context);
}

export function deactivate() {}
