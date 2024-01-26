// 変数numに1~10000までのランダムな整数を代入する
let num=Math.floor(Math.random(1)*10001);

// 変数numの値を出力する
console.log(num);

// 変数numの値が３の倍数であるとき
if(num %3 === 0){
    console.log("３の倍数です");
}

// 変数numの値が５の倍数であるとき
if(num %5 === 0){
    console.log("５の倍数です")};

// 変数numの値が５の倍数であるとき
if(num %3 === 0 && num %5 === 0){
    console.log("３と５の倍数です");

}