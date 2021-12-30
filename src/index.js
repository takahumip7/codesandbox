/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let上書き";
// console.log(val2);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "山下",
//   age: 33,
// };
// val4.name = "yamashita";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = 'bird';
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "山下";
// const age = "33";
// // 従来の文字列
// const message1 = name + age + "です。";
// console.log(message1);
// // テンプレート文字列
// const message2 = `${name}${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来
// const func1 = function (str){
//   return str;
// }
// console.log(func1("func1です。"))

// // アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です。"));

// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(10,20));

/**
 * 分割代入
 */
// const myProfile = {
//   name:"山下",
//   age:33,
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const {name,age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['山下',33];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。}`;
// console.log(message3);

// const [name,age] = myProfile;
// const message4 = `名前は${name}です。${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("山下");

/**
 * スプレッド構文...
 */
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1 + num2 + arr3);

// 配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4)

/**
 * maplやfilterを使って配列
 */
// const nameArr = ["田中","山田","山下"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1 }番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index)=>console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if (name === "山下") {
//     return name
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

// const num = 1300;

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。';
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? '100を超えています。' : '許容範囲内です。';
// }
// console.log(checkSum(50,40));

/**
 * 論理演算子
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log('1か2はtrueになります。');
// }

// if (flag1 && flag2) {
//   console.log('1も2もtrueになります。');
// }

/**
 * 左側がfalseなら右側を返す。
 */
// const num = 100;
// const fee = num || '金額未設定です。';
// console.log(fee);

// && 左側がtrueなら右側を返す。
const num2 = 100;
const fee2 = num2 && '何か設定されました。';
console.log(fee2);
