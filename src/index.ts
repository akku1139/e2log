import { Handler } from "./handlers.ts";

export enum LogLevel {
  NOTSET   =  0,
  DEBUG    = 10,
  INFO     = 20,
  WARNING  = 30,
  ERROR    = 40,
  CRITICAL = 50,
}

class Logger {
  // アクセス修飾子?
  // https://typescriptbook.jp/reference/object-oriented/class/access-modifiers
  level: number = LogLevel.NOTSET;

  setLevel(level: number) {
    this.level = level;
  }
}

export function getLogger():Logger {
}

//export default
