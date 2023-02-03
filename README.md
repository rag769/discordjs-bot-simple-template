# discordjs-bot-simple-template

## Overview
discord.js で作る DISCORD BOT の簡単なテンプレートのようなもの

## Requirement
* Node.js 16.9.0 or newer is required


## Usage
### 初回のみ
1. Code -> Download ZIP でダウンロードして適当に展開
1. .env-example を .env にリネームし、DISCORD_TOKEN に BOT の token を設定 (ファイルは無視して環境変数でも可)
1. 必要であれば config.js でBOT呼出のPrefixを変更
1. モジュールのロード
   ```
   $ cd discordjs-bot-simple-template
   $ npm ci
   ```


### 実行
```
$ cd discordjs-bot-simple-template
$ node app.js
```

### イベント処理追加
./events/イベント名.js で管理します。 (ファイル名はイベント名である必要があります)

対応しているイベント、ハンドラの引数等の詳細はdiscord.jsのリファレンスを確認してください。

**ハンドラの引数の最後にClientが入ります**

### コマンド処理追加
デフォルトでは `$コマンド名` で呼出します。  
**$を別のものにしたいときは config.js の prefix を変更します。**

各コマンドは ./commands/*.js で登録します。
ファイル名は何でも良いですが、ファイル中にコマンド名($.conf.name)を記載します。

例えば commands/dice.js は次のように設定されているため、 `$サイコロ` で呼び出せます
```
  conf: {
      name: 'サイコロ',
  },
```

## Licence

[MIT](https://github.com/rag769/discordjs-bot-simple-template/blob/main/LICENSE)