import { PatternNewsItem, ProgrammingNewsItem } from "./NewsItem.mjs";

const newPatternNewsItem = new PatternNewsItem(
  "New GoF book finally going to be published",
  "Capgemini",
  "Capgemini is finally taking the long awaited responsibility to rewrite the book",
  new Date().getTime()
);

const newProgrammingNewsItem = new ProgrammingNewsItem(
  "New version of JavaScript released",
  "Anonymouse",
  "There is a new version of JavaScript on it's way",
  new Date().getTime()
);

console.log(newPatternNewsItem);
console.log(newProgrammingNewsItem);
