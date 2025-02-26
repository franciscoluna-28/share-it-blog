import { type CollectionEntry, getEntries } from "astro:content";

export async function getTagsByArticle(articleEntry: CollectionEntry<"articles">){
  const tagEntries = await getEntries(articleEntry.data.tags);
  const tags = tagEntries.map(te => te.data);
  
  return tags;
}

export async function getTagsByArticles(articleEntries: CollectionEntry<"articles">[]){
  const articlesTags = new Map<string, { id: string; name: string; description: string; }[]>();
  for (const article of articleEntries) {
    const tagEntries = await getEntries(article.data.tags);
    const tags = tagEntries.map(te => te.data);
    articlesTags.set(article.id, tags);
  }

  return articlesTags;
}

export async function getTagNamesByArticles(articleEntries: CollectionEntry<"articles">[]){
  const articlesTagNames = new Map<string, string[]>();
  for (const article of articleEntries) {
    const tagEntries = await getEntries(article.data.tags);
    const tags = tagEntries.map(te => te.data.name);
    articlesTagNames.set(article.id, tags);
  }

  return articlesTagNames;
}