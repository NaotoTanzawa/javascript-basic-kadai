// 変数numに1~15までのランダムな整数を代入する
let num=Math.floor(Math.random(1)*16);

// 変数numの値が３と５の倍数であるとき
if(num %3 === 0 && num %5 === 0){
    console.log("３と５の倍数です");
}

// 変数numの値が３の倍数であるとき
else if(num %3 === 0){
    console.log("３の倍数です");
    }

// 変数numの値が５の倍数であるとき
else if(num %5 ===0){
    console.log("５の倍数です");}

// それ以外のとき
else{console.log(num);}

