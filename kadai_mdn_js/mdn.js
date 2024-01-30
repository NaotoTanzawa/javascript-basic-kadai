// アロー関数を定義する引数にformatを設定
const getDate = (format) => {
// 現在の日付を取得（Dateオブジェクトを使用）
const date = new Date();
// 年の取得: getFullYear() メソッド
const year = date.getFullYear();
// 月の取得: getMonth() メソッド、0から始まるため、+1する
const month = date.getMonth() + 1;
// 日の取得: getDate() メソッド
const day = date.getDate();

// 引数formatの値が"year"、"month"、"day"のいずれかの場合,年月日を出力する。If（論理演算子「||」）は常にtrueになるはず
if (format === "year"||format === "month"||format === "day") {
    console.log(year + "年" + month + "月" + day + "日");
    }
};

//関数を呼び出し
getDate("day");



