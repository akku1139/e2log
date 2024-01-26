import { Handler } from "./handlers.ts";

export { LogLevel } from "./loglevel.ts";
import { LogLevel } from "./loglevel.ts";

class Logger {
  // アクセス修飾子?
  // https://typescriptbook.jp/reference/object-oriented/class/access-modifiers
  level: number = LogLevel.NOTSET;

  constructor() {

  }

  setLevel(level: number) {
    this.level = level;
  }

  isEnabledFor(level: number): boolean {
    return level >= this.level;
  }

  getEffectiveLevel(): number {

  }
}

export function getLogger(): Logger {
}

//export default
