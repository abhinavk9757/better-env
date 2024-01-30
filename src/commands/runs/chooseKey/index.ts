import * as vscode from "vscode";
import { CommandRunner } from "..";
import { I8 } from "../../../intl";

export class ChooseKeyRunner implements CommandRunner {
  async run() {
    vscode.window.showInformationMessage(I8.ts("CHOOSE_KEY_INFO"));

    const selectionRes = await vscode.window.showOpenDialog({
      openLabel: I8.ts("CHOOSE_KEY_OPEN_LABEL"),
      canSelectFiles: true,
      canSelectMany: false,
      canSelectFolders: false,
    });

    if (!selectionRes?.[0]?.fsPath) {
      vscode.window.showErrorMessage(I8.ts("CHOOSE_KEY_ERROR"));
      return;
    }

    const filePath = selectionRes[0].fsPath;
    vscode.window.showInformationMessage(`File Chosen ${filePath}`);
  }
}
