import * as vscode from "vscode";
import { CommandRunner } from "..";

export class GreetingsRunner implements CommandRunner {
  run() {
    vscode.window.showInformationMessage("Hello World from better-env! Edited");
  }
}
