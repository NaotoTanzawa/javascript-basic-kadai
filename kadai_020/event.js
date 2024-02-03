// btnというidを持つHTML要素を取得し、定数に代入する
const pushBtn = document.getElementById("btn");

// btnがクリックされたときの処理を定義する
pushBtn.addEventListener("click", ()=> {
//「ボタンをクリックしてください」という文字列を「ボタンをクリックしました」という文字列に書き換える
document.getElementById("text").textContent = "ボタンをクリックしました";
});