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
        audience: 0, poster: "/gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg", type: "mine", rank: null
    },
    {
        title: "아이언맨", year: 2008, date: "2008-04-30", rating: 7.7,
        audience: 0, poster: "/ziReGUV3xURsWmcmsn2GOunPc0L.jpg", type: "mine", rank: null
    },
    {
        title: "마션", year: 2015, date: "2015-09-30", rating: 7.7  ,
        audience: 0, poster: "/uH8q40cjMAjrRHyPJMbQwAIJATb.jpg", type: "mine", rank: null
    },
    {
        title: "겨울왕국", year: 2013, date: "2013-11-20", rating: 7.2,
        audience: 0, poster: "/lYceQKe3EsYn7VdDXGTy7dSwBLp.jpg", type: "mine", rank: null
    },
    {
        title: "레미제라블", year: 2012, date: "2012-12-18", rating: 7.2,
        audience: 0, poster: "/hSjWT9LsyNJ9H3d1Tn9Hx02hnQD.jpg", type: "mine", rank: null
    },

    {
        title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.4,
        audience: 2248126, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 1
    },
    {
        title: "암살자(들)", year: 2026, date: "2026-09-23", rating: 7.2,
        audience: 3374510, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 2
    },
    {
        title: "실낙원", year: 2026, date: "2026-10-21", rating: 8.0,
        audience: 104874, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 3
    },
    {
        title: "타짜: 벨제붑의 노래 포스터", year: 2026, date: "2026-09-30", rating: 7.0,
        audience: 1999477, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 4
    },
    {
        title: "클레이페이스", year: 2026, date: "2026-09-30", rating: 7.5,
        audience: 77153, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 5
    },
];