const axios = require("axios");

//Taken from Section 6 assignment CHECK THIS>>>>>>>>>>>>>>>>
// const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"

const API = {
     getArticles: function (query, startYear, endYear) {
        const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
        const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        return axios.get(BASEURL + APIKEY + "&q=" + query + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101");
    },

    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData)
    },

    getArticle: function() {
        return axios.get("/api/articles");
    },
};

export default API;
