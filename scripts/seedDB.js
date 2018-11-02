const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytiimes"
);

const articleSeed = [
  {
    title: "Whitey Bulger, Boston Mobster and Informant, Is Dead at 89",
   url: 'https://www.nytimes.com/2018/10/30/obituaries/whitey-bulger-dead.html?action=click&module=Top%20Stories&pgtype=Homepage',
    date: new Date(Date.now())
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
