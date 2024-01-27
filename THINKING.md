# ログの3層構造

アプリケーション層 `logger.info()`
↓
スイッチング層 `level >= this.level` `handler.emit()`
↓
ハンドラー層 `console.log()`
