// 祝日の一覧を表示する
const holidays = ["正月","成人の日","建国記念日","天皇誕生日",
"春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日",
"スポーツの日","文化の日","勤労感謝の日"] ;

// for文を使って、祝日の一覧を表示する
for(let i=0; i<holidays.length; i++){
    console.log(holidays[i]);
}

// while文を使って、祝日の一覧を表示する
let i = 0;
while (i < holidays.length) {
    const holiday = holidays[i];
    console.log(holiday);
    i++;
}