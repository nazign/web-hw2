// ===== Part A =====

// 영화 평균 평점
let sum = 0;
for (const i of rating){
    sum += i;
}
console.log("A1 평균 평점:", sum / rating.length);

// 최고 평점 영화의 제목과 평점
let maxA = 0;
for (const i of rating){
    if (rating[i] > rating[maxA]){
        maxA = i;
    }
}
console.log("A2 최고 평점:", title[maxA], rating[maxA]);

// 8점 이상인 영화 수
let count = 0;
for (const i of rating){
    if (i >= 8){
        count += 1;
    }
}
console.log(`A3 8점 이상인 영화 수: ${count}편`);

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
console.log(`A4 2020년대: ${count2020}편, 2010년대: ${count2010}편, 2000년대: ${count2000}편, 그 이전: ${countelse}편`);

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

console.log(`A5 누적 관객 100만 이상: ${bigA}`);

// ===== Part B =====

// average : 영화 배열 ⇒ 평균 평점(숫자)
function average(list) {
     return averageBy(list, "rating");
}
// console.log("평균:", average(movies));

// best(list) : 영화 배열 ⇒ 최고 평점 객체
function best(list) {
    let top = list[0];
    for (const m of list) {
        if (m.rating > top.rating) {
            top = m;
        }
    }
    return top;
}
// console.log("최고:", best(movies).title);

// filterByRating(list, min) : 배열, 숫자 ⇒ 새 배열
function filterByRating(list, min) {
    return list.filter(m => m.rating >= min);
}
// console.log("8점 이상:", filterByRating(movies, 8).length + "편");

// sortBy : 영화 배열, 키 이름, 내림차순 여부 ⇒ 정렬한 새 배열(원본은 그대로)
function sortBy(list, key, desc) {
    const copy = [...list];
    copy.sort((a, b) => {
        const sign = desc ? -1 : 1;
        if (typeof a[key] === "string") return a[key].localeCompare(b[key]) * sign;
        return (a[key] - b[key]) * sign;
    });

    return copy;
}
// search(list, keyword) : 배열, 문자열 ⇒ 새 배열
function search(list, keyword){
    let listDic = [];
    keyword =  keyword.trim().toLowerCase()
    for (const m of list){
        if(m.title.toLowerCase().includes(keyword)){
            listDic.push({...m});
        }
    }
    return listDic;
}

// formatNumber(n) : 숫자나 숫자 문자열 ⇒ "1,234,567" 
function formatNumber(n) {
    return Number(n).toLocaleString("ko-KR");
}

// yearsSince(dateStr) : "2014-11-06" ⇒ 올해까지 몇 년(숫자)
function yearsSince(dateStr){
    let presentYear = 2026;
    let pastYear = dateStr.slice(0, 4);
    pastYear = parseInt(pastYear);
    return presentYear - pastYear;
}

const bestMovie = best(movies);
const bestAudienceMoive = sortBy(movies, "audience", true)[0];
// console.log(best(movies))
document.getElementById("out").textContent =
`전체 ${movies.length}편, 평균 평점 ${average(movies).toFixed(1)}점\n최고 평점 ${bestMovie.title} (${bestMovie.rating}점, 개봉한 지 ${yearsSince(bestMovie.date)}년)\n관객 1위 ${bestAudienceMoive.title} (누적 ${formatNumber(bestAudienceMoive.audience)}명)`;

// ===== Part C =====
function getList(data){
    return data.results;
}
function averageBy(list, key){
    let sum = 0;
    for (const m of list) {
        sum += m[key];
    }
    return sum / list.length;
}

console.log(`C1 page ${TMDB.page}, total_pages ${TMDB.total_pages}, total_results ${TMDB.total_results}, 이번 응답 ${getList(TMDB).length}`)
console.log(`C2 상영작 평균 평점 ${averageBy(getList(TMDB), "vote_average").toFixed(1)}`);
console.table(sortBy(getList(TMDB), "vote_average", true).slice(0, 5), ["title",
"release_date", "vote_average"]);
console.log(`C4 ${search(getList(TMDB), "Heart").length}`);

// 자가 진단    
// console.log(formatNumber(1234567));
// console.log(average(movies).toFixed(1));
// console.log(best(movies).title);
// console.log(sortBy(movies, "rating", true)[0].title);
// console.log(filterByRating(movies, 8).length);
// console.log(search(movies, " 인터 ").length);
// console.log(yearsSince("2014-11-06"));
// console.log(movies[0].title);
