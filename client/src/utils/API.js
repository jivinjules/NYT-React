const axios = require("axios");

//Taken from Section 6 assignment CHECK THIS>>>>>>>>>>>>>>>>
// const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"

const API = {
     getArticles: function (query, startYear, endYear) {
        const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
        const APIKEY = "0X850GfA7vD202QsMQF9KsFpxHeNYz0j";
        return axios.get(BASEURL + query + "&api-key=" + APIKEY);
    },

    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData)
    },

    getArticle: function() {
        return axios.get("/api/articles");
    },
};

export default API;
