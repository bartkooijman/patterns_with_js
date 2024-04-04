class ProgrammingNewsItem {
  constructor(title, writer, story, publicationDate) {
    this.title = title;
    this.writer = writer;
    this.story = story;
    this.publicationDate = publicationDate;
  }
}

class PatternNewsItem {
  constructor(title, writer, story, publicationDate) {
    this.title = title;
    this.writer = writer;
    this.story = story;
    this.publicationDate = publicationDate;
  }
}

export default class NewsItemFactory {
  createNewsItem(type, title, writer, story) {
    let result;

    if (type === "programming") {
      result = new PatternNewsItem(title, writer, story, this.getTime());
    } else if (type === "pattern") {
      result = new ProgrammingNewsItem(title, writer, story, this.getTime());
    }

    return result;
  }

  getTime() {
    return new Date().getTime();
  }
}
