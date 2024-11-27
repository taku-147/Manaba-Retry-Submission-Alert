# Manaba-Retry-Submisssion-Alert
Manabaで提出する際、再提出可能か否かを確認して、警告を出すChrome拡張機能です。
<br>「再提出を許可しない」場合はその部分が赤く点滅します。
<br>また、その課題では、提出する前に警告を出すようにしています。

![画面収録-2024-11-26-15.52.33.gif](Example-image/%E7%94%BB%E9%9D%A2%E5%8F%8E%E9%8C%B2-2024-11-26-15.52.33.gif)
![スクリーンショット 2024-11-26 15.56.36.png](Example-image/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-26%2015.56.36.png)

## 使い方
1.Releaseチャンネルから``Manaba-Retry-Submisssion-Alert.X.X.X.zip``をダウンロードし、解凍
<br>2.Chromeで拡張機能設定``chrome://extensions/``を開く
<br>3.右上のデベロッパーモードを有効に 
<br>4.「パッケージ化されていない拡張機能を読み込む」を選択し、展開したディレクトリごと選択

以上

## トラブルシューティング
Q.拡張機能が動いてねーぞ！
<br>A.今回の拡張機能は「*.manaba.jp」から始まるURLと、「manaba.tsukuba.ac.jp」から始まるURLだけで動作するようにしています。
<br>自分の大学に合わせて、``manifest.json``の``"matches"``を変更してください。
<br>例:```https://room.chuo-u.ac.jp/```の場合は```"matches": ["*://room.chuo-u.ac.jp/*"]```に

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

### Permissions
- **Commercial use**: You can use this project for commercial purposes.
- **Modification**: You can modify the code as you wish.
- **Distribution**: You can share this project freely.
- **Private use**: You can use this project in private.

### Limitations
- **Liability**: The author is not responsible for any damages caused by using this project.
- **Warranty**: This project is provided "as-is," without any warranty of any kind.
