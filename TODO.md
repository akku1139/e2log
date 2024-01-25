# TODOs
[ ] Easyであること

[ ] loggerの名前空間

[ ] ログを発行したファイルをわかるように
何ならスタックトレースとか出ても嬉しい

[ ] consoleのラッパー (移行を容易にするため)
https://qiita.com/morrr/items/09738dabb5e0a544922b

[ ] Python compatible
厳密な互換を目指すわけではない。
https://docs.python.org/ja/3/library/logging.html

[ ] XMRigのようにかっこいいログ、カラーリング
`[2024-01-26 00:35:58.974]  net      new job from jp.moneroocean.stream:10032 diff 200849 algo rx/0 height 171800`

[ ] タイムゾーン対応
VPSとかPaaSとかで動かすために、現地時間だけでなくあらゆるタイムゾーンに変換できるように。
```js
TZ.Asia.Tokyo // === 9
```

[ ] stdout/stderr?
JSにそんな概念があるかは不明
