// ===== Part A =====

// 영화 평균 평점
let sum = 0;
for (const i of rating){
    sum += i;
}
console.log("평균:", sum / rating.length);

// 최고 평점 영화의 제목과 평점
let maxA = 0;
for (const i of rating){
    if (rating[i] > rating[maxA]){
        maxA = i;
    }
}
console.log("최고 평점:", title[maxA], rating[maxA]);

// 8점 이상인 영화 수
let count = 0;
for (const i of rating){
    if (i >= 8){
        count += 1;
    }
}
console.log(`8점 이상인 영화 수: ${count}편`);

// 연도대별 영화 수
let count2020 = 0;
let count2010 = 0;
let count2000 = 0;
let countelse = 0;
for (let i = 0; i < years.length; i++){
    const decade = years[i] - (years[i] % 10);
    switch (decade){
        case 2020:
            count2020 += 1;
            break;
        case 2010:
            count2010 += 1;
            break;
        case 2000:
            count2000 += 1;
            break;
        default:
            countelse += 1;
            break;
    }
}
console.log(`2020년대 영화 수: ${count2020}편, 2010년대 영화 수: ${count2010}편, 2000년대 영화 수: ${count2000}편, 그 이전: ${countelse}편`);

// 누적 관객 100만 이상인 영화 제목
let bigA = "";
for (let i = 0; i < audiences.length; i++){
    if (audiences[i] >= 1000000){
        bigA += title[i] + " ";
    }else{
        bigA += "";
    }
}
if (bigA === "") {
    bigA = "없음";
}

console.log(`누적 관객 100만 이상인 영화 제목: ${bigA}`);