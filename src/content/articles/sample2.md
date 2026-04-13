---
title: "オブジェクト指向(クラス)"
author: "dedot-3799"
pubDate: "2026-03-19"
description: "書けているか見るためのテスト記事です"
tags: ["OOP", "クラス", "解説記事"]
---

## オブジェクト指向プログラミング(OOP)とは？

　オブジェクト指向とは、プログラムを「プロパティ(変数)とメソッド(関数)」の集まりとして捉える考え方です。C#のほか、JavaやC++など多くのプログラミング言語で採用されています。

## 4つの基本原則

### 1. カプセル化

カプセル化とは、直接的な変数の書き換えを防ぐことです。変数などをカプセル化することで、他のオブジェクトからデータが不正に書き換わることを防ぎ、バグを防ぐことができます。

C#では、基本的に`private`をつけることでカプセル化します。

#### 使用例

例えば、以下のように「HPが0未満になってはいけない時」に、`TakeDamage()`メソッドを呼び出すことで、安全に変数の変更が可能になります。

```cs
public class Player : MonoBehaviour {
    // privateにして外部から直接触らせない（カプセル化）
    [SerializeField] private int hp = 100;

    // HPを取得するためのプロパティ
    public int Hp => hp;

    // HPを変更するための専用メソッド
    public void TakeDamage(int damage) {
        hp -= damage;
        if (hp < 0) hp = 0; // 「HPがマイナスにならない」というルールを守れる
    }
}
```

Unityでは`[SerializeField]`をつけることで、変数がUnityのインスペクター画面に表示されるため、直接コードを書き換えることなくインスペクター画面変数を書き換えられます。ゲームのバランス調整などに非常に有効です。

#### プロパティ

上記の例はもっと簡単に書くことができます。

プロパティを使うことで、代入される値に「チェック」を入れることができます。

```cs
private int hp = 100; // 本物のデータはprivateで隠す（バッキングフィールドといいます）

public int Hp
{
    get { return hp; } // 値を読み出す時の処理
    set
    {
        // value には代入しようとした値が入っている
        if (value < 0) hp = 0; // マイナスにはさせない
        else hp = value;

        Debug.Log($"HPが更新されました：{hp}"); // ログも出せたり
    }
}
```

この書き方は、後述の自動実装プロパティとは異なり、値の加工やログを出すことなどが可能です。

#### 自動実装プロパティ

特に条件がない時などに有効な方法です。

```cs
// 外からは読めるけど、書き込みはこのクラス内だけにする
public int Score { get; private set; }
```

#### 読み取り専用プロパティ

計算結果だけを返したい時に簡単に書けます。

```cs
private int currentExp = 50;
private int nextLevelExp = 100;

// 現在の経験値の割合（%）を返すだけのプロパティ
public float ExpProgress => (float)currentExp / nextLevelExp;
```
