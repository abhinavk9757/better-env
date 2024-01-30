import { en } from "./dictionary";

export enum Languages {
  "ENG" = "en",
}

export class I8 {
  private static currentLang: Languages = Languages.ENG;

  public static setCurrentLang(lang: Languages) {
    this.currentLang = lang;
  }

  private static getDict() {
    switch (this.currentLang) {
      case Languages.ENG:
      default:
        return en;
    }
  }

  public static ts(key: string) {
    if (!key) {
      return "";
    }
    const dict = this.getDict();
    return dict[key] || key;
  }
}
