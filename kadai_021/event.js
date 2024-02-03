// btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById("btn");

// btnというidを持つHTML要素に対して、clickイベントが発生した際の処理を記述する
clickBtn.addEventListener("click",() => {
    // setTimeout関数を使用し、2秒後（2000ミリ秒後）にid:textの文字列を「ボタンをクリックしました」とう文字列に変更する
    setTimeout(() => {
    document.getElementById("text").textContent = "ボタンをクリックしました";
    }, 2000);
});    