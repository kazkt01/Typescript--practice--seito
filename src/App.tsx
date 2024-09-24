import { useState } from "react";
import "./App.css";

function App() {
  // memoへ

  // // オブジェクトの型定義
  // const user = {
  //   userId: 1,
  //   name: "Mike",
  //   age: 25,
  //   email: "mike@gmail.com",
  //   isActive: true,
  // };

  // // ここでオブジェクトの型定義をしている
  // interface UserProps {
  //   userId: number;
  //   name: string;
  //   age: number;
  //   email: string;
  //   isActive: boolean;
  // }
  // // この様に管理者の型を追加で定義したいといった時extends で対応する。
  // interface AdminUser extends UserProps {
  //   role: string; //"admin","Leader","manager"
  // }

  // // それを活用してこの引数にくるオブジェクトの型は、UserPropsに従わなければならないと型を定義できる。
  // const createAccount = (accountInfo: AdminUser) => {
  //   //
  // };
  // // そして、このcreateAccounの内容を記述するが型通りでなければエラーが出る
  // createAccount({
  //   userId: 1,
  //   name: "Mike",
  //   age: 25,
  //   email: "mike@gmail.com",
  //   isActive: true,
  //   // UserPropsからAdminUserに変えるだけで下のroleというプロップスが
  //   // ないと動作しないようにできる。
  //   role: "leader",
  // });

  // // interfaceをtypeといった形で書くこともできる。
  // type UserProps = {
  //   userId: number;
  //   name: string;
  //   age: number;
  //   email: string;
  //   isActive: boolean;
  // };
  // // interfaceでいうextendでの方拡張をtypeでやるとこうなる。
  // type AdminUserPrps = UserProps & {
  //   role: string; //"admin","Leader","manager"
  // };

  // // ただ厳密にいうとtypeとinterfaceは、扱える値が微妙に違うらしいが
  // // 基本interfaceを使った方がextendの書き方がわかりやすいのでinterfaceを
  // // セイト先生はよく使うらしい。

  // typeScriptによるclassの定義？

  class User {
    // classの型定義をする場合、２行目から直ぐに描き始めよう。
    userId: number;
    name: string;
    age: number;
    email: string;
    isActive: boolean;

    constructor(
      userId: number,
      name: string,
      age: number,
      email: string,
      isActive: boolean
    );
   public getProfile(): string {
      return `Name:${this.name},Age:${this.age}`;
    }

    // インスタンスの作成
    user = new User(1, "Mike", 25, "mike@gmail.com", true);
    user.getProfile();

    // public,private,protected は、メソッドに対して使うもの
  }

  // 独自のあび
  // 初期状態の設定
  const [active, setActive] = useState(false);
  const onClickFire = () => {
    return setActive(!active);
  };

  return (
    <>
      <h1>TypeSCriptの学習</h1>
      <div>こんにちは！{name}さん</div>

      <div className="heart-box">
        {/* この暮らすネームの箇所は、activeがtrueの時"heart-fire"というclassNameをつけて
         falseの時は、classNameをはずすという設定なので””から文字にしている。*/}
        <span className={active ? "heart-fire " : ""}>🩷</span>
      </div>

      <button onClick={onClickFire}>ボタン</button>
    </>
  );
}

export default App;
