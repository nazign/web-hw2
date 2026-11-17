# 실습과제 #2 : 영화 데이터를 자바스크립트로
- 박세준 / 26 :
- 사이트 주소 : https://nazign.github.io/web-hw2/
- 사용한 API : TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 2026-10-25)
## 구현 항목 체크
- [ ✓ ] (요구사항 1~6의 번호와 제목을 그대로 옮겨 적고 체크, 보너스는 이름과 캡처 파일명)
- [ ✓ ] 1. Part A: data.js에 10칸짜리 배열 4개(titles, ratings, years, audiences). app.js에서 for와 if(또는 switch)로
계산한 A1~A5 다섯 줄이 콘솔에 찍힘.
- [ ✓ ] 2. Part B 함수 7개: movies 10건(키 8개, Part A와 같은 순서). average, best, filterByRating, sortBy, search,
formatNumber, yearsSince가 표의 입력과 출력대로 동작하고 자가 테스트 1~8번 통과.
- [ ✓ ] 3. Part C 응답 구조: tmdb.js에 now_playing 응답 전체가 const TMDB로 들어 있음. getList, averageBy로
C1, C2, 상위 5편 표, C4가 콘솔에 찍힘.
- [ ✓ ] 4. 출력: console-a.png(A1~A5), console-c.png(C1~C4와 표) 2장. 사이트 주소의 <pre id="out">에 Part B   
요약 3줄(textContent 한 번).
- [ ✓ ] 5. 코드 품질: 함수마다 "입력 ⇒ 출력" 주석, var 없이 const와 let만, 정렬과 필터 뒤에도 movies 원본
그대로, 같은 계산을 두 번 쓰지 않음(average가 averageBy를 부름), 하는 일이 드러나는 이름.
- [ ✓ ] 6. 제출 형식: 공개 저장소 web-hw2의 루트에 파일, Pages 동작, README에 자가 테스트 표와 생성형 AI
기록, 어느 파일에도 API 키 없음. 

## 자가 테스트 표 (2~8번도 Step 4의 표대로 이어 적기)
| 번호 | 호출 | 기대 결과 | 실제 결과 |
|---|---|---|---|
| 1 | formatNumber("1234567") | '1,234,567' | '1,234,567' |
| 2 | average(movies).toFixed(1) | '7.6' | '7.5' |
| 3 | best(movies).title | "인터스텔라" | "인터스텔라" | // 아 실수
| 4 | sortBy(movies, "rating", true)[0].title | "인터스텔라" | "인터스텔라" |
| 5 | filterByRating(movies, 8).length | '2' | '2' |
| 6 | search(movies, " 인터 ").length | "인터스텔라" | "인터스텔라" |
| 7 | yearsSince("2014-11-06") | '12' | '12' |
| 8 | 4번 실행 뒤 movies[0].title | "인터스텔라" | "인터스텔라" |

## 어려웠던 점 3가지와 해결
1. 누적 관객 100만 이상인 영화 제목을 출력할 때 100만 이상인 영화 제목이 없다면 "없음"을 출력해야 하는데 어떻게 작성해야 할 지 어려웠음 -> for문이 끝나고 밖에서 bigA === ""이라면 "없음"으로 해결된다는 것을 교재를 보고 해결함.
2. document.getElementById("out").textContent에서 어떤 내장함수를 사용해야 할 지 어려웠음 -> 내장 함수를 검색해서 어울리는 것으로 넣어 해결함.
3. averageBy(list, key)함수의 몸통에 무슨 내용을 넣어야 할 지 어려웠음 -> 위에 있는 average함수와 틀이 같은 내용을 넣으면 된다는 것을 꺠닫고 해결함. 
## 참고한 자료 (교재 절, MDN 페이지 제목, 검색어)
교재 9.3.3절, 길벗it, 검색어: js 내장 함수 
## 생성형 AI 사용 내역 (없으면 "없음")
- 질문 요지 : dateStr이 무슨 뜻인가?
- 답변 요약 : 날짜가 담긴 문자열 데이터를 인자로 전달한다는 뜻
- 채택 여부 : 채택