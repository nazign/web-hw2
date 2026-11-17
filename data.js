// part A
const title = ["인터스텔라", "아이언맨", "마션", "겨울왕국", "레미제라블", "극장판 치이카와: 인어 섬의 비밀", "암살자(들)", "실낙원", "타짜: 벨제붑의 노래", "클레이페이스"];

const rating = [8.4, 7.7, 7.7, 7.2, 7.2, 7.2, 7.4, 7.2, 8.0, 7.0, 7.5];

const years = [2014, 2008, 2015, 2013, 2012, 2026, 2026, 2026, 2026, 2026];

const audiences = [0, 0, 0, 0, 0, 2248126, 3374510, 104874, 1999477, 77153];

// 관객 수 100만 이상이 없을 때 const audiences = [0, 0, 0, 0, 0, 0, 0, 104874, 0, 77153];

// Part B : 영화 객체 10건(Part A와 같은 순서)
const movies = [
    {
        title: "인터스텔라", year: 2014, date: "2014-11-04", rating: 8.4,
        audience: 0, poster: "gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg", type: "mine", rank: null
    },
    {
        title: "아이언맨", year: 2008, date: "2008-04-30", rating: 7.7,
        audience: 0, poster: "gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg", type: "mine", rank: null
    },
    {
        title: "마션", year: 2015, date: "2015-09-30", rating: 7.7  ,
        audience: 0, poster: "gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg", type: "mine", rank: null
    },
    {
        title: "겨울왕국", year: 2013, date: "2013-11-20", rating: 7.2,
        audience: 0, poster: "gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg", type: "mine", rank: null
    },
    {
        title: "레미제라블", year: 2012, date: "2012-12-18", rating: 7.2,
        audience: 0, poster: "gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg", type: "mine", rank: null
    },

    {
        title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.1,
        audience: 2345678, poster: "/xyz789.jpg", type: "boxoffice", rank: 1
    },
    // 같은 모양으로 8건 더(내 영화 4편을 먼저, 박스오피스 2~5위를 나중에)
];