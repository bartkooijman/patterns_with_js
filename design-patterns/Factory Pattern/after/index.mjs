import NewsItemFactory from "./NewsItem.mjs"

const newsItemFactory = new NewsItemFactory()

const newPatternNewsItem = newsItemFactory.createNewsItem(
  "pattern",
  "New GoF book finally going to be published",
  "Capgemini",
  "Capgemini is finally taking the long awaited responsibility to rewrite the book"
);

const newProgrammingNewsItem = newsItemFactory.createNewsItem(
  "programming",
  "New version of JavaScript released",
  "Anonymouse",
  "There is a new version of JavaScript on it's way"
);

console.log(newPatternNewsItem);
console.log(newProgrammingNewsItem);